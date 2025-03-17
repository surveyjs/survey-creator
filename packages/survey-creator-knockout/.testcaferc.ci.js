

module.exports = {
  "browsers": [`chrome:${require("puppeteer").executablePath()}:headless`],
  "nativeAutomation": "true",
  "concurrency": 1,
  "quarantineMode": {
    "successThreshold": 1,
    "attemptLimit": 5
  }
}