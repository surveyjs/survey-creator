// Records every file the test pages load from a non-local host, so that e2e/helper.ts can answer those
// requests locally (see serveFromOfflineCache there). Run from the repo root after building the packages:
//   node e2e/offline-cache/refresh.mjs [react,js,vue,angular]
// Rerun it when a test page or an example app changes its CDN URLs, and commit the diff.
// Each package's test server is started here (port 8080 must be free) and stopped afterwards.
// Requests are recorded through the same route layer the tests use: a recorded redirect is replayed as a
// redirect, and the bytes are the ones Playwright received (already decompressed).
/* eslint-env node, browser */
import { chromium } from "@playwright/test";
import { spawn, execSync } from "child_process";
import { createHash } from "crypto";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const cacheDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(cacheDir, "../..");
const manifestPath = path.join(cacheDir, "manifest.json");
const baseUrl = "http://127.0.0.1:8080";
const nonLocalUrl = /^https?:\/\/(?!(127\.0\.0\.1|localhost)(:\d+)?\/)/;
const keptHeaders = ["content-type", "access-control-allow-origin", "location"];

const reactJsPages = ["default", "by-page", "preview-theme-switcher", "theme-for-preview-option", "dropdown-collapse-view",
  "localized_ui", "no-license", "widget", "theme-tab", "creator-themes", "presets", "csp-strict"];
const examplePages = reactJsPages.filter(name => name !== "csp-strict");
const packages = {
  react: { serve: "serve", pages: reactJsPages.map(name => `/test-pages/${name}.html`) },
  js: { serve: "serve", pages: reactJsPages.map(name => `/test-pages/${name}.html`) },
  vue: { serve: "serve:example:prod", pages: examplePages.map(name => `/test-pages/${name}`) },
  angular: { serve: "serve:example:prod", pages: examplePages.map(name => `/test-pages/${name}`) },
};
// Requested by the tests themselves (image links in the survey JSON), not by the pages.
const testUrls = [
  "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
  "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
  "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
  "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
];

const log = (...args) => console.log(...args); // eslint-disable-line no-console
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// <host>/<path>, plus the query string; characters Windows does not allow in a file name become "_".
function fileNameFor(url) {
  const u = new URL(url);
  let name = u.pathname.endsWith("/") ? u.pathname + "index" : u.pathname;
  if (u.search) name += "__" + u.search.substring(1);
  name = name.split("/").map(part => part.replace(/[<>:"\\|?*&=]/g, "_")).join("/");
  return u.host.replace(/:/g, "_") + name;
}

async function isServerUp() {
  try {
    await fetch(baseUrl);
    return true;
  } catch{
    return false;
  }
}

// The test servers do not all fail on a busy port (http-server and vite preview move to the next one), so
// a server that already holds 8080 would be recorded instead of the package's own.
async function waitForServer(isUp) {
  for (let i = 0; i < 240; i++) {
    if (await isServerUp() === isUp) return;
    await delay(500);
  }
  throw new Error(isUp ? "The test server did not start on port 8080" : "Port 8080 is still in use");
}

function stopServer(server) {
  try {
    if (process.platform === "win32") {
      execSync(`taskkill /pid ${server.pid} /T /F`, { stdio: "ignore" });
    } else {
      process.kill(-server.pid);
    }
  } catch{
    // already gone
  }
}

async function recordPage(context, pageUrl) {
  const page = await context.newPage();
  await page.goto(baseUrl + pageUrl, { waitUntil: "networkidle" });
  await page.waitForFunction(() => !!window["creator"]);
  // Fonts load lazily, per face: request every declared face, as compareScreenshot does.
  await page.evaluate(async () => {
    const pending = [];
    document.fonts.forEach(face => pending.push(face.load().catch(() => undefined)));
    await Promise.all(pending);
  });
  await page.waitForLoadState("networkidle");
  await page.close();
}

// Checks every name before anything on disk changes.
function checkFileNames(manifest) {
  const files = Object.values(manifest).map(item => item.file).filter(file => !!file);
  const lowerCase = new Set();
  for (const file of files) {
    if (lowerCase.has(file.toLowerCase())) throw new Error(`Two URLs map to ${file} (file names are not case-sensitive everywhere)`);
    lowerCase.add(file.toLowerCase());
  }
  for (const file of files) {
    for (let dir = path.posix.dirname(file); dir !== "."; dir = path.posix.dirname(dir)) {
      if (lowerCase.has(dir.toLowerCase())) throw new Error(`${dir} is both a file and a folder`);
    }
  }
  return files;
}

async function main() {
  const names = (process.argv[2] || Object.keys(packages).join(",")).split(",");
  const unknown = names.filter(name => !packages[name]);
  if (unknown.length) throw new Error(`Unknown package: ${unknown.join(", ")}`);
  if (await isServerUp()) throw new Error("Port 8080 is in use: stop that server first");

  const recorded = new Map();
  const failed = [];
  const browser = await chromium.launch();
  const context = await browser.newContext();
  await context.route(nonLocalUrl, async route => {
    const url = route.request().url();
    let response;
    try {
      response = await route.fetch({ maxRedirects: 0 });
    } catch(error) {
      failed.push(`${url} (${error.message})`);
      await route.abort();
      return;
    }
    if (response.status() >= 400) failed.push(`${url} (HTTP ${response.status()})`);
    const headers = {};
    for (const name of keptHeaders) {
      const value = response.headers()[name];
      if (value !== undefined) headers[name] = value;
    }
    const isRedirect = response.status() >= 300 && response.status() < 400;
    recorded.set(url, { status: response.status(), headers, body: isRedirect ? undefined : await response.body() });
    await route.fulfill({ response });
  });

  for (const name of names) {
    const pkg = packages[name];
    const cwd = path.join(repoRoot, "packages", `survey-creator-${name}`);
    log(`${name}: starting "npm run ${pkg.serve}"`);
    const server = spawn(`npm run ${pkg.serve}`, { cwd, shell: true, stdio: ["ignore", "ignore", "inherit"], detached: process.platform !== "win32" });
    try {
      await waitForServer(true);
      for (const pageUrl of pkg.pages) {
        const before = recorded.size;
        await recordPage(context, pageUrl);
        log(`  ${pageUrl}: ${recorded.size - before} new`);
      }
    } finally {
      stopServer(server);
    }
    await waitForServer(false);
  }
  const page = await context.newPage();
  for (const url of testUrls) {
    await page.goto(url);
  }
  await browser.close();
  // A failed or error response must not replace a good cached file (a full run deletes what it did not record).
  if (failed.length) throw new Error(`Nothing written, these requests failed:\n  ${failed.join("\n  ")}`);

  // A run over some of the packages keeps what the others recorded; a run over all of them starts over.
  const oldManifest = fs.existsSync(manifestPath) ? JSON.parse(fs.readFileSync(manifestPath, "utf8")) : {};
  const isFullRun = Object.keys(packages).every(name => names.includes(name));
  const manifest = isFullRun ? {} : { ...oldManifest };
  const bodies = new Map();
  for (const [url, entry] of recorded) {
    const item = { status: entry.status, headers: entry.headers };
    if (entry.body) {
      item.file = fileNameFor(url);
      item.size = entry.body.length;
      item.sha256 = createHash("sha256").update(entry.body).digest("hex");
      bodies.set(item.file, entry.body);
    }
    manifest[url] = item;
  }
  const files = checkFileNames(manifest);

  const kept = new Set(files);
  for (const item of Object.values(oldManifest)) {
    if (item.file && !kept.has(item.file)) fs.rmSync(path.join(cacheDir, item.file), { force: true });
  }
  for (const [file, body] of bodies) {
    fs.mkdirSync(path.dirname(path.join(cacheDir, file)), { recursive: true });
    fs.writeFileSync(path.join(cacheDir, file), body);
  }
  const sortedManifest = {};
  for (const url of Object.keys(manifest).sort()) sortedManifest[url] = manifest[url];
  fs.writeFileSync(manifestPath, JSON.stringify(sortedManifest, null, 2) + "\n");
  log(`${Object.keys(sortedManifest).length} URLs, ${files.length} files in ${path.relative(repoRoot, cacheDir)}`);
}

main().catch(error => {
  // eslint-disable-next-line no-console
  console.error(error);
  process.exit(1);
});
