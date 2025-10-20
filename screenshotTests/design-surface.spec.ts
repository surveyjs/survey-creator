import { url, compareScreenshot, test, setJSON, expect, setShowToolbox, setShowAddQuestionButton, upArrowImageLink, setAllowEditSurveyTitle, setShowSidebar, setIsCompact, changeToolboxSearchEnabled, changeToolboxScrolling } from "./helper";

const title = "Design Surface";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.waitForLoadState("networkidle");
    await page.goto(`${url}`);
  });

  test("Check minimal height", async ({ page }) => {
    await changeToolboxScrolling(page, false);
    await changeToolboxSearchEnabled(page, false);
    await page.setViewportSize({ width: 1120, height: 900 });
    const root = page.locator(".svc-full-container").nth(1);
    await setJSON(page, {});
    await page.evaluate(() => {
      const creator = document.getElementById("survey-creator");
      if (creator) {
        creator.style.bottom = "";
        creator.style.height = "1px";
      }
    });
    await compareScreenshot(page, root, "creator-min-height.png");
  });

  test("Check survey layout in mobile mode", async ({ page }) => {
    await page.setViewportSize({ width: 550, height: 900 });
    const designerTabContent = page.locator(".svc-tab-designer");
    await setJSON(page, {
      "title": "Survey title",
      "description": "Survey description",
      "showQuestionNumbers": "off",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "question11"
            },
            {
              "type": "matrix",
              "name": "question1",
              "columns": [
                "Column 1",
                "Column 2",
              ],
              "rows": [
                "Row 1",
                "Row 2"
              ]
            }
          ],
        }
      ]
    });
    await compareScreenshot(page, designerTabContent, "designer-survey-layout-mobile.png");
  });

  test("Check property grid flyout", async ({ page }) => {
    await setShowToolbox(page, false);
    await setShowAddQuestionButton(page, false);
    await page.setViewportSize({ width: 1120, height: 900 });
    const root = page.locator(".svc-creator");
    await setJSON(page, {});
    await page.getByRole("button", { name: "Survey settings" }).click();
    await compareScreenshot(page, root, "propery-grid-flyout.png");
  });

  test("Scaling design surface", async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 3700 });
    await page.evaluate(() => {
      window["creator"].allowZoom = true;
      window["creator"].showToolbox = false;
      window["creator"].showSidebar = false;
    });
    const json = {
      showQuestionNumbers: true,
      "pages": [
        {
          "name": "page1",
          "elements": [
            { "type": "rating", "name": "question1" },
            {
              "type": "dropdown", "name": "question2",
              "choices": ["Item 1", "Item 2", "Item 3"]
            },
            { "type": "boolean", "name": "question3" },
            { "type": "file", "name": "question4" },
            { "type": "panel", "name": "panel1" }
          ]
        }
      ]
    };
    await setJSON(page, json);
    const surfaceSelector = page.locator(".svc-tab-designer_content > div");
    const qContent = page.locator(".svc-question__content").first();
    await qContent.click({ position: { x: 5, y: 5 } });

    for (let i = 0; i < 5; i++) {
      await page.click("#zoomOut button");
    }
    await page.setViewportSize({ width: 600, height: 1900 });
    await compareScreenshot(page, surfaceSelector, "design-surface-zoom-out.png");
  });

  test("Placeholder", async ({ page }) => {
    await page.setViewportSize({ width: 1767, height: 900 });
    await setShowToolbox(page, false);
    const designerTabContent = page.locator(".svc-tab-designer");
    await compareScreenshot(page, designerTabContent, "surface-placeholder.png");
  });

  test("Placeholder with survey header", async ({ page }) => {
    await page.evaluate(() => {
      (window as any).creator.toolbox.isCompact = true;
      (window as any).creator.showHeaderInEmptySurvey = true;
    });
    await page.setViewportSize({ width: 1767, height: 900 });

    const designerTabContent = page.locator(".svc-tab-designer");
    await compareScreenshot(page, designerTabContent, "surface-placeholder-with-header.png");
  });

  test("Page borders", async ({ page }) => {
    await page.setViewportSize({ width: 1232, height: 900 });
    const json = {
      showQuestionNumbers: true,
      "logoPosition": "right",
      "pages": [{ "name": "page1", "elements": [{ "type": "text", "name": "question1" }] }]
    };
    await setShowToolbox(page, false);
    await setAllowEditSurveyTitle(page, false);
    await setJSON(page, json);
    await setShowSidebar(page, false);
    await setIsCompact(page, true);

    const designerTabContent = page.locator(".svc-tab-designer");
    const pageContent = page.locator(".svc-page__content:not(.svc-page__content--new)");

    await compareScreenshot(page, designerTabContent, "page-content.png");
    await pageContent.hover({ position: { x: 5, y: 5 } });
    await page.waitForTimeout(300);
    await compareScreenshot(page, designerTabContent, "page-content-hover.png");

    await pageContent.locator(".svc-element__add-new-question").hover();
    await compareScreenshot(page, pageContent, "question-add-hover.png");

    await pageContent.click({ position: { x: 5, y: 5 } });
    await compareScreenshot(page, designerTabContent, "page-content-click.png");

    await pageContent.locator(".sd-page__title").click({ position: { x: 5, y: 5 } });
    await compareScreenshot(page, designerTabContent, "page-title-click.png");
  });

  test("Page placeholder without elements", async ({ page }) => {
    await page.setViewportSize({ width: 770, height: 900 });
    await setJSON(page, {
      showQuestionNumbers: true,
      "pages": [{ "name": "page1", "title": "Page1" }]
    });

    await compareScreenshot(page, page.locator(".svc-page"), "page-placeholder-without-elements.png");
  });

  test("Check page selection when width mode is responsive", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    const json = {
      showQuestionNumbers: true,
      widthMode: "responsive",
      "pages": [{ "name": "page1", "elements": [{ "type": "text", "name": "text", }] }]
    };
    await setAllowEditSurveyTitle(page, false);
    await setJSON(page, json);
    const rootSelector = page.locator(".svc-tab-designer");
    await page.click(".svc-page", { position: { x: 5, y: 5 } });
    await compareScreenshot(page, rootSelector, "page-selected-responsive.png");
  });

  test("Page hidden header and top toolbar", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    const json = {
      showQuestionNumbers: true,
      "logoPosition": "right",
      "pages": [{ "name": "page1", "elements": [{ "type": "text", "name": "question1" }] }]
    };

    await page.evaluate((json) => {
      (window as any).Survey.settings.designMode.showEmptyTitles = false;
      (window as any).updateCreatorModel({ expandCollapseButtonVisibility: "never" }, json);
    }, json);

    const rootSelector = page.locator(".svc-tab-designer");
    await page.click(".svc-page", { position: { x: 5, y: 5 } });
    await compareScreenshot(page, rootSelector, "page-selected-hidden-header.png");
  });

  test("Check page button states", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.evaluate(() => {
      window["creator"].onDefineElementMenuItems.add((_, options) => {
        if (!options.obj["isPage"]) return;
        options.items.push({
          id: "duplicate2",
          title: "Duplicate",
          enabled: false,
          iconSize: 16,
          iconName: "icon-copy-16x16",
          action: () => { }
        });
      });
    });
    await setJSON(page, {
      showQuestionNumbers: true,
      "logoPosition": "right",
      "elements": [{ type: "text", name: "q1", title: "Question Title" }]
    });
    const button = page.locator(".svc-page-toolbar__item").first();
    const buttonDisabled = page.locator(".svc-page-toolbar__item:disabled").first();
    await page.locator(".svc-page__content").first().click({ position: { x: 5, y: 5 } });
    await compareScreenshot(page, button, "page-button.png");
    await button.hover();
    await compareScreenshot(page, button, "page-button-hover.png");
    await page.keyboard.press("Tab");
    await compareScreenshot(page, button, "page-button-focused.png");
    await compareScreenshot(page, buttonDisabled, "page-button-disabled.png");
    await buttonDisabled.hover();
    await compareScreenshot(page, buttonDisabled, "page-button-disabled-hover.png");
    await page.evaluate(() => {
      const page = window["creator"].survey.getPageByName("page1");
      const adorner = window["SurveyCreatorCore"].PageAdorner.GetAdorner(page);
      adorner.actionContainer.actions[0].pressed = true;
      adorner.actionContainer.actions[2].pressed = true;
    });
    await compareScreenshot(page, button, "page-button-pressed.png");
    await compareScreenshot(page, buttonDisabled, "page-button-pressed-disabled.png");
  });

  test("Logo big image", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1900 });
    const json = {
      showQuestionNumbers: true,
      "logo": "data:image/svg+xml,%3Csvg height='100%25' width='100%25' viewBox='0 0 162 66' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M161.579 0H0.420532V50.1402H143.407L161.579 66V0Z' fill='%2319B394'%3E%3C/path%3E%3Cpath d='M38.9962 26.02C39.2441 26.5983 39.4093 27.3417 39.4093 28.1677C39.4093 29.159 39.2441 30.0676 38.831 30.7284C38.418 31.4719 37.9224 32.0501 37.2616 32.4631C36.6007 32.8761 35.8573 33.2065 35.0313 33.4543C34.2053 33.6195 33.2966 33.7847 32.388 33.7847C30.9837 33.7847 29.5795 33.5369 28.1752 33.1239C26.771 32.7109 25.5319 32.1327 24.4581 31.3066L26.1101 28.1677C26.2753 28.3329 26.5231 28.4981 26.9362 28.8285C27.3492 29.0764 27.8448 29.3242 28.423 29.572C29.0012 29.8198 29.5795 30.0676 30.3229 30.2328C30.9837 30.398 31.7272 30.4806 32.4706 30.4806C34.4531 30.4806 35.4443 29.8198 35.4443 28.5807C35.4443 28.1677 35.3617 27.8373 35.1139 27.5895C34.8661 27.3417 34.5357 27.0939 34.1226 26.8461C33.7096 26.5983 33.214 26.4331 32.5532 26.2678C31.975 26.1026 31.3141 25.9374 30.5707 25.6896C29.6621 25.4418 28.9186 25.194 28.2578 24.8636C27.597 24.5332 27.0188 24.2028 26.6058 23.8724C26.1927 23.4593 25.8623 23.0463 25.6145 22.4681C25.3667 21.9725 25.2841 21.3117 25.2841 20.5682C25.2841 19.577 25.4493 18.7509 25.7797 18.0075C26.1101 17.2641 26.6058 16.6859 27.2666 16.1902C27.9274 15.6946 28.5882 15.2816 29.4143 15.0338C30.2403 14.786 31.1489 14.6208 32.0576 14.6208C33.3792 14.6208 34.6183 14.8686 35.6921 15.2816C36.766 15.6946 37.7572 16.1902 38.5832 16.7685L36.9312 19.7422C36.8486 19.6596 36.6007 19.4118 36.2703 19.2466C35.9399 18.9988 35.5269 18.8336 35.1139 18.5857C34.6183 18.4205 34.1226 18.1727 33.627 18.0901C33.0488 17.9249 32.5532 17.8423 31.975 17.8423C30.9837 17.8423 30.2403 18.0075 29.7447 18.4205C29.2491 18.7509 29.0012 19.3292 29.0012 19.99C29.0012 20.403 29.0839 20.7334 29.2491 20.9812C29.4143 21.229 29.6621 21.4769 30.0751 21.6421C30.4881 21.8073 30.9011 21.9725 31.3967 22.1377C31.975 22.3029 32.5532 22.4681 33.2966 22.6333C34.2053 22.8811 35.0313 23.1289 35.7747 23.4593C36.5181 23.7071 37.179 24.1202 37.6746 24.5332C38.3354 24.9462 38.7484 25.4418 38.9962 26.02ZM54.6909 29.4894V19.7422H51.1389V28.3329C50.7259 29.159 50.2303 29.8198 49.5695 30.2328C48.9086 30.6458 48.2478 30.8936 47.587 30.8936C46.0175 30.8936 45.2741 29.8198 45.2741 27.6721V19.7422H41.7221V28.4155C41.7221 30.2328 42.0526 31.5545 42.796 32.4631C43.5394 33.3717 44.6133 33.8673 46.0175 33.8673C47.174 33.8673 48.2478 33.6195 49.239 33.1239C50.2303 32.6283 50.9737 31.9675 51.6345 30.9762L51.7171 32.0501C51.7997 32.5457 52.0476 32.9587 52.378 33.2891C52.791 33.6195 53.2866 33.7021 53.9474 33.7021C54.1126 33.7021 54.3604 33.7021 54.6083 33.7021C54.8561 33.7021 55.1039 33.6195 55.5169 33.5369V30.5632C55.1865 30.5632 55.0213 30.4806 54.8561 30.3154C54.6909 30.1502 54.6909 29.9024 54.6909 29.4894ZM65.6771 19.4944C65.3467 19.4944 64.9337 19.577 64.5206 19.7422C64.1076 19.9074 63.6946 20.0726 63.3642 20.403C62.9512 20.6508 62.6208 20.9812 62.2904 21.3943C61.9599 21.8073 61.6295 22.2203 61.3817 22.7159V19.7422H58.1602V33.6195H61.7121V25.194C62.0425 24.368 62.7034 23.7897 63.5294 23.3767C64.3554 22.9637 65.3467 22.7985 66.4205 22.7159V19.4944C66.3379 19.4944 66.2553 19.4944 66.1727 19.4944C66.0901 19.4944 65.9249 19.4944 65.6771 19.4944ZM74.1852 30.6458L70.6333 19.6596H66.9987L72.1201 33.5369H75.9199L81.0413 19.6596H77.7372L74.1852 30.6458ZM95.5795 23.8724C95.9099 24.6984 96.0751 25.607 96.0751 26.5983C96.0751 26.8461 96.0751 27.0113 96.0751 27.2591C96.0751 27.5069 96.0751 27.6721 95.9925 27.7547H85.2541C85.3367 28.3329 85.4193 28.7459 85.6671 29.2416C85.9149 29.6546 86.1627 29.985 86.4931 30.3154C86.8235 30.6458 87.2365 30.811 87.6496 30.9762C88.0626 31.1414 88.4756 31.224 88.9712 31.224C89.7146 31.224 90.3755 31.0588 90.9537 30.7284C91.6145 30.398 92.0275 29.9024 92.2753 29.4068L95.3317 30.2328C94.836 31.3066 94.01 32.1327 92.8536 32.8761C91.6971 33.5369 90.3755 33.8673 88.8886 33.8673C87.8148 33.8673 86.7409 33.7021 85.9149 33.2891C85.0889 32.8761 84.2628 32.3805 83.602 31.7197C82.9412 31.0588 82.4456 30.3154 82.1151 29.4068C81.7847 28.5807 81.6195 27.6721 81.6195 26.6809C81.6195 25.6896 81.7847 24.781 82.1151 23.8724C82.4456 22.9637 82.9412 22.2203 83.602 21.5595C84.2628 20.8986 85.0063 20.403 85.9149 19.99C86.8235 19.577 87.8148 19.4118 88.9712 19.4118C90.1277 19.4118 91.1189 19.577 92.0275 19.99C92.9362 20.403 93.6796 20.8986 94.3404 21.5595C94.836 22.3029 95.2491 23.0463 95.5795 23.8724ZM92.4405 25.4418C92.3579 24.368 91.9449 23.5419 91.2841 22.9637C90.6233 22.3855 89.7972 22.0551 88.806 22.0551C88.3104 22.0551 87.8974 22.1377 87.4844 22.3029C87.0713 22.4681 86.7409 22.7159 86.4105 22.9637C86.0801 23.2115 85.8323 23.6245 85.6671 24.0376C85.5019 24.4506 85.3367 24.9462 85.3367 25.4418H92.4405ZM107.144 19.7422L103.84 30.5632L100.123 19.7422H96.4881L101.94 33.6195C101.775 34.1978 101.61 34.6934 101.444 35.1064C101.279 35.5194 101.114 35.7672 100.949 36.015C100.783 36.2628 100.618 36.428 100.453 36.5106C100.288 36.5933 100.04 36.6759 99.7922 36.6759C99.627 36.6759 99.3792 36.6759 99.0488 36.5933C98.801 36.5106 98.4706 36.5106 98.1402 36.428V39.4844C98.4706 39.567 98.801 39.6496 99.0488 39.7322C99.3792 39.8148 99.627 39.8148 99.8748 39.8148C101.114 39.8148 102.105 39.4844 102.849 38.9061C103.675 38.3279 104.253 37.5019 104.583 36.5106L110.365 19.9074H107.144V19.7422Z' fill='white'%3E%3C/path%3E%3Cpath d='M109.787 29.7372C110.035 29.9024 110.448 30.0676 111.026 30.3154C111.605 30.5632 112.265 30.6458 113.009 30.6458C113.752 30.6458 114.33 30.4806 114.743 30.2328C115.156 29.985 115.487 29.572 115.735 29.0764C115.983 28.5807 116.148 27.9199 116.148 27.0939C116.23 26.3504 116.23 25.3592 116.23 24.368V14.786H119.865V24.368C119.865 25.7722 119.782 27.0939 119.617 28.2503C119.452 29.4068 119.121 30.398 118.626 31.224C118.13 32.0501 117.469 32.7109 116.561 33.1239C115.652 33.5369 114.413 33.7847 112.844 33.7847C111.274 33.7847 109.87 33.3717 108.796 32.6283L109.787 29.7372ZM134.899 19.7422C134.816 19.6596 134.568 19.4118 134.238 19.2466C133.907 19.0814 133.494 18.8336 133.081 18.5857C132.586 18.4205 132.09 18.1727 131.595 18.0901C131.016 17.9249 130.521 17.8423 129.942 17.8423C128.951 17.8423 128.208 18.0075 127.712 18.4205C127.217 18.7509 126.969 19.3292 126.969 19.99C126.969 20.403 127.051 20.7334 127.217 20.9812C127.382 21.229 127.63 21.4769 128.043 21.6421C128.373 21.8073 128.869 21.9725 129.364 22.1377C129.942 22.3029 130.521 22.4681 131.264 22.6333C132.173 22.8811 132.999 23.1289 133.742 23.4593C134.486 23.7071 135.146 24.1202 135.642 24.5332C136.138 24.9462 136.551 25.4418 136.881 26.02C137.129 26.5983 137.294 27.3417 137.294 28.1677C137.294 29.159 137.129 30.0676 136.716 30.7284C136.303 31.4719 135.807 32.0501 135.146 32.4631C134.486 32.8761 133.742 33.2065 132.916 33.4543C132.09 33.6195 131.182 33.7847 130.273 33.7847C128.869 33.7847 127.464 33.5369 126.06 33.1239C124.656 32.7109 123.417 32.1327 122.343 31.3066L123.995 28.1677C124.16 28.3329 124.408 28.4981 124.821 28.8285C125.234 29.0764 125.73 29.3242 126.308 29.572C126.886 29.8198 127.464 30.0676 128.208 30.2328C128.869 30.398 129.612 30.4806 130.355 30.4806C132.338 30.4806 133.329 29.8198 133.329 28.5807C133.329 28.1677 133.247 27.8373 132.999 27.5895C132.751 27.3417 132.421 27.0939 132.008 26.8461C131.595 26.5983 131.099 26.4331 130.438 26.2678C129.86 26.1026 129.199 25.9374 128.456 25.6896C127.547 25.4418 126.804 25.194 126.143 24.8636C125.482 24.5332 124.904 24.2028 124.491 23.8724C124.078 23.4593 123.747 23.0463 123.499 22.4681C123.252 21.9725 123.169 21.3117 123.169 20.5682C123.169 19.577 123.334 18.7509 123.665 18.0075C123.995 17.2641 124.491 16.6859 125.151 16.1903C125.812 15.6946 126.473 15.2816 127.299 15.0338C128.125 14.786 129.034 14.6208 129.942 14.6208C131.264 14.6208 132.503 14.8686 133.577 15.2816C134.651 15.6946 135.642 16.1902 136.468 16.7685L134.899 19.7422Z' fill='white'%3E%3C/path%3E%3C/svg%3E",
      "logoWidth": "600px",
      "logoHeight": "auto",
      "pages": [{ "name": "page1", "elements": [{ "type": "text", "name": "question1" }] }]
    };
    await setJSON(page, json);
    await compareScreenshot(page, ".svc-designer-header", "logo-big-image.png");
  });

  test("Logo image hover", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1900 });
    const json = {
      showQuestionNumbers: true,
      elements: [{ type: "text", name: "q1" },],
    };
    await setJSON(page, json);
    await page.hover(".svc-logo-image-placeholder");
    await compareScreenshot(page, ".svc-logo-image-placeholder", "logo-image-hover.png");
  });

  test("Logo image loading", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1900 });
    const json = {
      showQuestionNumbers: true,
      elements: [{ type: "text", name: "q1" },],
    };
    await setJSON(page, json);
    await page.evaluate(() => {
      (window as any).creator.onUploadFile.add((_, opt) => {
        setTimeout(() => {
          opt.callback("success", "");
        }, 1000000);
      });
    });
    await page.evaluate(() => {
      (window as any).creator.onOpenFileChooser.add((s, o) => {
        o.callback([{}]);
      });
    });
    await page.click(".svc-logo-image");
    await page.evaluate(() => {
      (document.querySelector(".sd-loading-indicator .sv-svg-icon") as HTMLElement).style.animation = "none";
    });
    await compareScreenshot(page, ".svc-logo-image__loading", "logo-image-loading.png");
  });

  test("Logo image adorners", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1900 });
    const json = {
      showQuestionNumbers: true,
      logo: upArrowImageLink,
      elements: [{ type: "text", name: "q1" },],
    };
    await setJSON(page, json);
    await compareScreenshot(page, ".svc-logo-image", "logo-image-adorners.png");
    await page.hover(".svc-logo-image-container");
    await compareScreenshot(page, ".svc-logo-image", "logo-image-adorners-hover.png");
    await page.hover(".svc-logo-image-container .svc-context-button");
    await compareScreenshot(page, ".svc-logo-image", "logo-image-adorners-choose-hover.png");
    await page.hover(".svc-logo-image-container .svc-context-button--danger");
    await compareScreenshot(page, ".svc-logo-image", "logo-image-adorners-clear-hover.png");
  });

  test("Check string editor on isRequired", async ({ page }) => {
    await page.evaluate((json) => {
      window["Survey"].Serializer.findProperty("survey", "title").isRequired = true;
      window["creator"].JSON = json;
    }, {
      showQuestionNumbers: true,
      title: "title",
      elements: [{ type: "text", name: "q1" }]
    });

    await page.evaluate(() => {
      const el: any = document.querySelectorAll(".svc-designer-header .sd-title .svc-string-editor .sv-string-editor")[0];
      if (el) {
        el.style.color = "transparent";
      }
    });

    const svStringSelector = page.locator(".svc-designer-header .sd-title .svc-string-editor").first();
    await svStringSelector.click();
    await page.keyboard.press("Delete");
    await page.keyboard.press("Enter");
    await expect(svStringSelector).toHaveClass(/svc-string-editor--error/);
    await compareScreenshot(page, ".svc-designer-header .sd-title", "surface-string-editor-error.png");
  });
});
