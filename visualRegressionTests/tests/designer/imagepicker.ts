import { ClientFunction, Selector } from "testcafe";
import { url, setJSON, explicitErrorHandler, wrapVisualTest, takeElementScreenshot } from "../../helper";

const title = "ImagePicker Screenshot";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

const json = {
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "imagepicker",
          "name": "question1",
          "choices": [
            {
              "value": "up",
              "imageLink": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACFCAYAAAAenrcsAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAK5SURBVHhe7dtLbhpBGIVRyFaynnixYT2shRC5pdgELv2s6q46Z0J7hn7dz+CBz7e7E/DUj+EVeEIgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEPiX2x35+fvX8HQ6XT8uwxM1+QTZia9x/PX4M3UIZAdexSCS+gRS2bsIRFKXQCoaO36R1COQSqaOXiR1CKSCuWMXSXkCKWzpyEVSlkAKWmvcIilHIIWsPWqRlCGQArYas0i2J5CNbT1ikWxLIBsqNV6RbEcgGyk9WpFsQyAbqDVWkaxPICurPVKRrEsgK9rLOEWyHoGsZG+jFMk6BLKCvY5RJMsJZKG9j1AkywhkgaOMTyTzCWSmo41OJPMIZIajjk0k0wlkoqOPTCTTCGSCVsYlkvEEMlJroxLJOAIZodUxieQ9gbzR+ohEkgkk6GU8InlNIC/0NhqRPCeQJ3odi0j+J5AHvY9EJN8J5Avj+OQO/whkYBTfuccngdwZw3PuIhAjeKP3+3QdiDjG6flO3QYijml6vVeXgYhjnh7v1l0g4limt/t1FYg41tHTHbsJRBzr6uWeXQQijm30cNfmAxHHtlq/b9OBiKOMlu/cbCDiKKvVezcZiDjqaPHuXfyRDnMJBIImA7l+XIYnSmrx7ufb3fDMCC18z/YLZDxfsSAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgE10/LsPTMR39/Zd2vt0Nz8ADnyAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAReOp3+AJ6KhqcfMnIzAAAAAElFTkSuQmCC"
            },
            {
              "value": "right",
              "imageLink": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACFCAYAAAAenrcsAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAALBSURBVHhe7dzLddswEEBROa2knqTYpJ7U4piOjh1Z1Igf8IOZezcEtyTfATacl9c3F2DUt+sVGCEQCAgEAgKBgEAgIBAICAQCAoGAQCAgEAgIBAICgYBAICAQCAgEAgKBgEAg4I/CE/n+68d1dbn8+fn7uuJIdpCT+D+Owdd7jiGQExPJ8QRyciI5lkA6IJLjCKQTIjmGQDoikv0JpDMi2ZdAOiSS/QikUyLZh0A6JpLtCaRzItmWQBIQyXYEkoRItiGQRETSnkCSEUlbAklIJO0IJCmRtCGQxESynkCSE8k6AilAJMsJpAiRLCOQQkQyX9qxPz6Gx4wUmi7lDiKOmOcznSNWUSKZRiCFieQ5gRQnkphAEElAILwTyTiB8EEk9wTCDZHcEgh3RPJJIIwSyT8C4SGRCIQnqkciEJ6qHIlAmKRqJAJhsoqRCIRZqkUiEGarFIlAWKRKJAJhsQqRCIRVskciEFbLHIlAaCJrJAKhmYyRCAQCAoGAQGgm48RGgdBE1nGmAmG1zLN+BcIq2QdhC4TFKkyJFwiLVIhjIBBmqxLHQCDMUimOgUCYrFocA4EwScU4BgLhqapxDARCqHIcA4HwUPU4BgJhlDj+EQh3xPFJINwQxy2B8EEc9wTCO3GMEwjiCAikOHHEBFKYOJ4TSFHimCZlIF5+zPOZ7uX1zXXNgfaaSiiOeRyxChHHfAIpQhzLCKQAcSwnkOTEsY5AEhPHegJJShxtCCQhcbQjkGTE0ZZAEhFHewJJQhzbEEgC4tiOQDonjm0JpGPi2J5AOiWOfQikQ+LYj0A6I459CaQj4tifQDohjmMIpAPiOI5ATk4cxxLIiYnjeAI5ia8xiOMcjP2BgB0EAgKBgEAgIBAICAQCAoGAQCAgEAgIBAICgYBAICAQCAgEAgKBgEAgIBAICAQCAoGAQOChy+UveG+q8tcbgXEAAAAASUVORK5CYII="
            },
            {
              "value": "down",
              "imageLink": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACFCAYAAAAenrcsAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAALBSURBVHhe7dtBUttAFEVRnK2wHlgsrIe1OFahSoJjP0tyqyV1nzNBQ9evd0v2gNP54gW46df4F7hBIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBD4l9sFXj/exqfj+Xr/HJ+YwhtkpiPHMTj6569NIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQHA6X4zPTXn9eBufqOXr/XN8akeTbxBxbKPFu/uKBYFAIGgykBa/Cx+B3yAHIpK6Wr1301+xRFJHy3du/jeISNbV+n27+JEuknX0cNcuAhmIpKxe7tlNIAORlNHTHbsKZCCS5/R2v+4CGYhkmR7v1mUgA5HM0+u9ug1kIJJper5T14EMRJL1fp/uAxmI5DZ3EcgfxvCTe3wTyD+M4ps7/CWQK72PQxw/CeSGXkcijv8J5I7exiKO2wQS9DIacdwnkAdaH484MoFM0OqIxPGYQCZqbUzimEYgM7QyKnFMJ5CZjj4uccwjkAWOOjJxzCeQhY42NnEsI5AnHGV04lhOIE/a+/jE8RyBFLDXEYrjeQIpZG9jFEcZAiloL6MURzkCKWzrcYqjLIGsYKuRiqM8gayk9ljFsQ6BrKjWaMWxHoGsbO3ximNdAqlgrRGLY30CqaT0mMVRh0AqKjVqcdQjkMqeHbc46hLIBpaOXBz1CWQjc8cujm0IZENTRy+O7QhkY4/GL45tCWQH7kUgju0JZCeuYxDHPpzOF+MzcMUbBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBwF0vL78BaeXHR9mlVzEAAAAASUVORK5CYII="
            },
            {
              "value": "left",
              "imageLink": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACFCAYAAAAenrcsAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAALBSURBVHhe7dzNjdtADIBRb1pJPUmxST2pZbMCvIAhSLT+NUO+d/H4KvgDNQfz4/PLA5j04/kJTBAIBAQCAYFAQCAQEAgEBAIBgUBAIBAQCAQEAgGBQEAgEBAIBAQCAYFAQCAQ8I/Chvz88+t5ejz+/f77PHEnE6QRr3EMxt+5h0AaIIZ2CeRm4mibQG4kjvYJ5Cbi6INAbiCOfgjkYuLoi0AuJI7+COQi4uiTQC4gjn4J5GTi6JtATiSO/gnkJOLIQSAnEEceAjmYOHIRyIHEkY9ADiKOnARyAHHkJZCdxJGbQHYQR34C2UgcNQhkA3HUYe3PSuKYl3FVkQmygjhiGZ+PQBYSR00CWUAcdQnkDXHUJpCAOBDIDHEwEMgEcfBNICPi4JVAXoiDMYE8iYMpAvkiDuaUD0QcREoHIg7eKRuIOFiiZCDiYKlygYiDNUoFIg7WKhOIONiiRCDiYKv0gYiDPVIHIg72ShuIODhCykDEwVFKXNJhK4FAIGUgGTf8cY+0E0QkHCH1K5ZI2Cv9HUQk7FHiki4StioRyEAkbFEmkIFIWKtUIAORsEa5QAYiYamSgQxEwhJlAxmIhHdKBzIQCZHygQxEwhyBPImEKQJ5IRLGBDIiEl4JZIJI+CaQGSJhIJCASBDIGyKpTSALiKQugSwkkpoEsoJIYhmfz8fnl+eZha7a3CjI+5kgG/jh1iGQjURSg0B2EEl+AtlJJLkJ5AAiyUsgBxFJTgI5kEjyEcjBRJKLQE4gkjwEchKR5CCQE4mkfwI5mUj6JpALiKRfArmISPokkAuJpD8CuZhI+iKQG4ikHwK5iUj6IJAbiaR9ArmZSNomkAaIpF0CacQ4EtG0wdofCJggEBAIBAQCAYFAQCAQEAgEBAIBgUBAIBAQCAQEAgGBQEAgEBAIBAQCAYFAQCAQEAgEBAKzHo//Qjyq8mzlYTkAAAAASUVORK5CYII="
            }
          ],
        }
      ]
    }
  ]
};

test("Hover", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await explicitErrorHandler();
    await t.resizeWindow(2584, 1440);
    await setJSON(json);
    await t.wait(3000);

    const imagePicker = Selector(".sd-imagepicker");
    const firstImage = imagePicker.find(".svc-image-item-value-wrapper").nth(0);

    await t.click(imagePicker).hover(firstImage);
    await takeElementScreenshot("image-picker-responsive-hover.png", imagePicker, t, comparer);

    await ClientFunction(() => {
      const q = (<any>window).creator.survey.getAllQuestions()[0];
      q.colCount = 3;
      q.minImageHeight = 65;
      q.minImageWidth = 100;
    })();
    await t.click(imagePicker).hover(imagePicker.find(".svc-image-item-value-wrapper"));

    await takeElementScreenshot("image-picker-responsive-col-count-3-hover.png", imagePicker, t, comparer);

    await ClientFunction(() => {
      const q = (<any>window).creator.survey.getAllQuestions()[0];
      q.colCount = 0;
      q.imageWidth = 200;
      q.imageHeight = 150;
    })();
    await t.click(imagePicker).hover(firstImage);
    await takeElementScreenshot("image-picker-hover.png", imagePicker, t, comparer);
  });
});

test("dragging file", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await explicitErrorHandler();
    await t.resizeWindow(2560, 1440);
    await setJSON(json);
    await t.wait(3000);

    const imagePicker = Selector(".sd-imagepicker");
    await t.click(imagePicker);
    //emulate dragging class appear
    await ClientFunction(() => { document.querySelector(".svc-image-item-value--new")?.classList.add("svc-image-item-value--file-dragging"); })();
    await takeElementScreenshot("image-picker-responsive-dragging-file.png", imagePicker, t, comparer);
  });
});

test("imagepicker check state when new item is signgle", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await explicitErrorHandler();
    await t.resizeWindow(2560, 1440);
    await setJSON(json);
    await t.wait(3000);
    const imagePicker = Selector(".sd-imagepicker");
    await t.click(imagePicker);
    //emulate dragging class appear
    await ClientFunction(() => { (<any>window).creator.survey.getAllQuestions()[0].choices = []; })();
    await takeElementScreenshot("image-picker-single-new-item.png", imagePicker, t, comparer);
  });
});

test("imagepicker check loading indicator", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await explicitErrorHandler();
    await t.resizeWindow(1920, 1900);
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
    await setJSON(json);
    const imagePicker = Selector(".sd-imagepicker");
    await t.click(imagePicker);
    await t.click(Selector(".svc-image-item-value-controls__add"));
    await ClientFunction(() => {
      (<HTMLElement>document.querySelector(".sd-loading-indicator .sv-svg-icon")).style.animation = "none";
    })();
    await takeElementScreenshot("imagepicker-loading.png", imagePicker, t, comparer);
  });
});