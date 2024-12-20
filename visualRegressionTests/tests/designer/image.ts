import { ClientFunction, Selector } from "testcafe";
import { url, setJSON, explicitErrorHandler, wrapVisualTest, takeElementScreenshot } from "../../helper";

const title = "Image Screenshot";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

const json = {
  "logoPosition": "right",
  "pages": [
    {
      "name": "page2",
      "elements": [
        {
          "type": "text",
          "name": "question1"
        },
        {
          "type": "image",
          "name": "question2",
          "imageLink": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACFCAYAAAAenrcsAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAK5SURBVHhe7dtLbhpBGIVRyFaynnixYT2shRC5pdgELv2s6q46Z0J7hn7dz+CBz7e7E/DUj+EVeEIgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEPiX2x35+fvX8HQ6XT8uwxM1+QTZia9x/PX4M3UIZAdexSCS+gRS2bsIRFKXQCoaO36R1COQSqaOXiR1CKSCuWMXSXkCKWzpyEVSlkAKWmvcIilHIIWsPWqRlCGQArYas0i2J5CNbT1ikWxLIBsqNV6RbEcgGyk9WpFsQyAbqDVWkaxPICurPVKRrEsgK9rLOEWyHoGsZG+jFMk6BLKCvY5RJMsJZKG9j1AkywhkgaOMTyTzCWSmo41OJPMIZIajjk0k0wlkoqOPTCTTCGSCVsYlkvEEMlJroxLJOAIZodUxieQ9gbzR+ohEkgkk6GU8InlNIC/0NhqRPCeQJ3odi0j+J5AHvY9EJN8J5Avj+OQO/whkYBTfuccngdwZw3PuIhAjeKP3+3QdiDjG6flO3QYijml6vVeXgYhjnh7v1l0g4limt/t1FYg41tHTHbsJRBzr6uWeXQQijm30cNfmAxHHtlq/b9OBiKOMlu/cbCDiKKvVezcZiDjqaPHuXfyRDnMJBIImA7l+XIYnSmrx7ufb3fDMCC18z/YLZDxfsSAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgE10/LsPTMR39/Zd2vt0Nz8ADnyAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAReOp3+AJ6KhqcfMnIzAAAAAElFTkSuQmCC"
        }
      ]
    }
  ]
};

test("Adorner design", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await explicitErrorHandler();
    await t.resizeWindow(2560, 1440);
    await setJSON(json);
    await t.wait(3000);

    const image = Selector(".sd-image");
    await t.click(image);
    await takeElementScreenshot("image-adorner.png", Selector(".svc-question__content--image"), t, comparer);

  });
});

test("empty imageLink", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await explicitErrorHandler();
    await t.resizeWindow(2560, 1440);
    await setJSON({
      "logoPosition": "right",
      "pages": [
        {
          "name": "page2",
          "elements": [
            {
              "type": "text",
              "name": "question1"
            },
            {
              "type": "image",
              "name": "question2"
            }
          ]
        }
      ]
    });
    await t.wait(3000);
    const fileplaceholder = Selector(".svc-question__content--image .sd-file");
    await t.expect(fileplaceholder.exists).ok();
    await t.click(fileplaceholder);
    await takeElementScreenshot("image-empty-image-link.png", Selector(".svc-question__content--image"), t, comparer);
  });
});

test("broken imageLink", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await explicitErrorHandler();
    await t.resizeWindow(2560, 1440);
    await setJSON({
      "logoPosition": "right",
      "pages": [
        {
          "name": "page2",
          "elements": [
            {
              "type": "text",
              "name": "question1"
            },
            {
              "type": "image",
              "name": "question2",
              "imageLink": "test"
            }
          ]
        }
      ]
    });
    await t.wait(3000);
    await t.click(Selector(".sd-image"));
    await takeElementScreenshot("image-broken-image-link.png", Selector(".svc-question__content--image"), t, comparer);
  });
});
test("Check image loading indicator", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await explicitErrorHandler();
    await t.resizeWindow(2560, 1440);
    await setJSON({
      "logoPosition": "right",
      "pages": [
        {
          "name": "page2",
          "elements": [
            {
              "type": "image",
              "name": "question2",
              "imageLink": "wrong_url"
            }
          ]
        }
      ]
    });
    await ClientFunction(() => {
      (window as any).creator.onUploadFile.add((_, opt) => {
        setTimeout(() => {
          opt.callback("success", "");
        }, 1000000);
      });
    })();
    await ClientFunction(() => {
      (window as any).creator.onOpenFileChooser.add((s, o) => {
        o.callback([{}]);
      });
    })();
    const root = Selector(".svc-question__content--image");
    await t.click(root, { offsetX: 5, offsetY: 5 })
      .click(Selector(".svc-question__content--image .svc-context-button"));
    await ClientFunction(() => {
      (<HTMLElement>document.querySelector(".sd-loading-indicator .sv-svg-icon")).style.animation = "none";
    })();
    await takeElementScreenshot("image-loading.png", Selector(root), t, comparer);
  });
});
