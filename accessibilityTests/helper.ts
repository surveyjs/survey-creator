import type { RunOptions } from "axe-core";
import type { Page } from "playwright";
export const url = "http://127.0.0.1:8080/testCafe/testcafe";

export const creatorTabDesignerName = "Designer";
export const creatorTabPreviewName = "Preview";
export const creatorTabLogicName = "Logic";
export const creatorTabTranslationName = "Translation";
export const creatorTabThemeName = "Themes";
export const creatorTabJSONName = "JSON Editor";

export var downArrowImageLink = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACFCAYAAAAenrcsAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAALISURBVHhe7dvLbdtAGIVRKyW4QZfhGlyGa2E/bkEBYSKJFemKzyE5c87GXAo/7gdKC1+6rru+AHf9Gv4CdwgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAv9yO8Pb18fwdD6fr+/DE2N4g0x05jh6Z//8pQkEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAILl3XXYfnqrx9fQxPlPL5+j481aPKN4g49lHj3X3FgkAgEFQZSI3fhc/Ab5ATEUlZtd676q9YIimj5jtX/xtEJNuq/b5N/EgXyTZauGsTgfREsq5W7tlMID2RrKOlOzYVSE8ky7R2v+YC6Ylknhbv1mQgPZFM0+q9mg2kJ5JxWr5T04H0RJK1fp/mA+mJ5D53EcgfxvCTe3wTyD+M4ps7/CWQG62PQxw/CeSOVkcijv8J5IHWxiKO+wQStDIacTwmkCdqH484MoGMUOuIxPGcQEaqbUziGEcgE9QyKnGMJ5CJzj4ucUwjkBnOOjJxTCeQmc42NnHMI5AFzjI6ccwnkIWOPj5xLCOQFRx1hOJYTiArOdoYxbEOgazoKKMUx3oEsrK9xymOdQlkA3uNVBzrE8hGSo9VHNsQyIZKjVYc2xHIxrYerzi2JZACthqxOLYnkELWHrM4yhBIQWuNWhzlCKSwpeMWR1kC2cHckYujPIHsZOrYxbEPgexo7OjFsR+B7OzZ+MWxL4EcwKMIxLE/gRzEbQziOIZL13XX4Rm44Q0CgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUDgoZeX345nhpcQYL2CAAAAAElFTkSuQmCC";
export var rigthArrowImageLink = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACFCAYAAAAenrcsAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAALJSURBVHhe7dzNjdtADIBRb0pIgykjNaSMrUX9pIVNBHgBQ5Bo/UtDvnfx+Cr4AzUH86Pruq8HMOrH8xMYIRAICAQCAoGAQCAgEAgIBAICgYBAICAQCAgEAgKBgEAgIBAICAQCAoGAQCDgH4U38uvvn+fp8fj8+ft54komyE28xtEbfucaArkBMdyXQC4mjnsTyIXEcX8CuYg42iCQC4ijHQI5mTjaIpATiaM9AjmJONokkBOIo10COZg42iaQA4mjfQI5iDhyEMgBxJGHQHYmjlwEsiNx5COQnYgjJ4HsQBx5CWQjceQmkA3EkZ9AVhJHDQJZQRx1WPuzkDimZVxVZIIsII5YxucjkJnEUZNAZhBHXQJ5Qxy1CSQgDgQyQRz0BDJCHHwTyIA4eCWQF+JgSCBP4mCMQP4TB1PKByIOIqUDEQfvlA1EHMxRMhBxMFe5QMTBEqUCEQdLlQlEHKxRIhBxsFb6QMTBFqkDEQdbpQ1EHOwhZSDiYC8lLumwlkAgkDKQjBv+uEbaCSIS9pD6FUskbJX+DiIStihxSRcJa5UIpCcS1igTSE8kLFUqkJ5IWKJcID2RMFfJQHoiYY6ygfREwjulA+mJhEj5QHoiYYpAnkTCGIG8EAlDAhkQCa8EMkIkfBPIBJHQE0hAJAjkDZHUJpAZRFKXQGYSSU0CWUAksYzP56Pruq/nmZnO2twoyOuZICv44dYhkJVEUoNANhBJfgLZSCS5CWQHIslLIDsRSU4C2ZFI8hHIzkSSi0AOIJI8BHIQkeQgkAOJpH0COZhI2iaQE4ikXQI5iUjaJJATiaQ9AjmZSNoikAuIpB0CuYhI2iCQC4nk/gRyMZHcm0BuQCT3JZCbGEYimnuw9gcCJggEBAIBgUBAIBAQCAQEAgGBQEAgEBAIBAQCAYFAQCAQEAgEBAIBgUBAIBAQCAQEAgGBwKTH4x+QJ6duSQLV/gAAAABJRU5ErkJggg==";
export var leftArrowImageLink = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACFCAYAAAAenrcsAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAALISURBVHhe7dzNcZxAEIDRlUNwgg7DMTgMxUI+TkEupC3Jq2V7+Yfpfu/CcAW+mrnQL13XvV2AQT+uV2CAQCAgEAgIBAICgYBAICAQCAgEAgKBgEAgIBAICAQCAoGAQCAgEAgIBAICgYA/Ck/k198/19Xl8vrz93XFkewgJ/F/HL3v9xxDICcmkuMJ5OREciyBNEAkxxFII0RyDIE0RCT7E0hjRLIvgTRIJPsRSKNEsg+BNEwk2xNI40SyLYEkIJLtCCQJkWxDIImIZH0CSUYk6xJIQiJZj0CSEsk6BJKYSJYTSHIiWUYgBYhkPoEUIZJ5BFKISKZLO/bHx/CYkULjpdxBxBHzfMZzxCpKJOMIpDCRPCeQ4kQSEwgiCQiEdyIZJhA+ieSeQLghklsC4Y5IvgiEQSL5IBAeEolAeKJ6JALhqcqRCIRRqkYiEEarGIlAmKRaJAJhskqRCIRZqkQiEGarEIlAWCR7JAJhscyRCIRVZI1EIKwmYyQCgYBAICAQVpNxYqNAWEXWcaYCYbHMs34FwiLZB2ELhNkqTIkXCLNUiKMnECarEkdPIExSKY6eQBitWhw9gTBKxTh6AuGpqnH0BEKochw9gfBQ9Th6AmGQOD4IhDvi+CIQbojjlkD4JI57AuGdOIYJBHEEBFKcOGICKUwczwmkKHGMkzIQLz/m+Yz30nXd23XNgfaaSiiOaRyxChHHdAIpQhzzCKQAccwnkOTEsYxAEhPHcgJJShzrEEhC4liPQJIRx7oEkog41ieQJMSxDYEkII7tCKRx4tiWQBomju0JpFHi2IdAGiSO/QikMeLYl0AaIo79CaQR4jiGQBogjuMI5OTEcSyBnJg4jieQk/gegzjOwdgfCNhBICAQCAgEAgKBgEAgIBAICAQCAoGAQCAgEAgIBAICgYBAICAQCAgEAgKBgEAgIBAICAQeulz+AcZap24+5oKPAAAAAElFTkSuQmCC";
export var upArrowImageLink = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACFCAYAAAAenrcsAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAALCSURBVHhe7dvRcdpAGIVRSAk0mDKoIWVQi/pJCyQZa8Y2gYskpF2xe84L8hvzz/0MfvBxGIbrAbjrx/gK3CEQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCPzL7Y78/P1rfDocLqfz+ERNPkF24msc/9z+TB0C2YFHMYikPoFU9iwCkdQlkIqmjl8k9QikkrmjF0kdAqlg6dhFUp5ACnt15CIpSyAFrTVukZQjkELWHrVIyhBIAVuNWSTbE8jGth6xSLYlkA2VGq9ItiOQjZQerUi2IZAN1BqrSNYnkJXVHqlI1iWQFe1lnCJZj0BWsrdRimQdAlnBXscoktcJ5EV7H6FIXiOQF7zL+ESynEAWerfRiWQZgSzwrmMTyXwCmendRyaSeQQyQyvjEsl0ApmotVGJZBqBTNDqmETynECeaH1EIskEEvQyHpE8JpAHehuNSO4TyB29jkUk/xPIjd5HIpLvBPKFcXxwh08CGRnFd+7xQSB/GcN97iIQI3ii9/t0HYg4pun5Tt0GIo55er1Xl4GIY5ke79ZdIOJ4TW/36yoQcayjpzt2E4g41tXLPbsIRBzb6OGuzQcijm21ft+mAxFHGS3fudlAxFFWq/duMhBx1NHi3bv4Ix2WEggETQZyOZ3HJ0pq8e7HYRiu4zMTtPA92y+Q6XzFgkAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoHMdDmdx6f39O7vv7TjMAzX8Rm44RMEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoHAQ4fDH0O9wbeYZugeAAAAAElFTkSuQmCC";

export function getTabbedMenuItemByText(page: Page, text: "Designer" | "Preview" | "Logic" | "Translation" | "JSON Editor" | "Embed Survey" | "Themes") {
  return page.locator(".svc-tabbed-menu-item-container .svc-tabbed-menu-item__text").getByText(text);
}
export async function setJSON(page: Page, json?: any) {
  await page.evaluate(([json]) => {
    (window as any).creator.JSON = json;
  }, [json]);
}

export async function updateCreatorModel(page: Page, options?: any, json?: any) {
  await page.evaluate(([options, json]) => {
    (window as any).updateCreatorModel(options, json);
    if (!!options) {
      Object.keys(options).forEach(key => {
        (window as any).creator[key] = options[key];
      });
    }
  }, [options, json]);
}

export const axeOptions: RunOptions = {
  runOnly: {
    type: "tag",
    values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice", "section508", "wcag412"]
  },
  rules: {
    "color-contrast": {
      enabled: false
    },
    "document-title": {
      enabled: false
    },
    "landmark-one-main": {
      enabled: false
    },
    "page-has-heading-one": {
      enabled: false
    },
    "region": {
      enabled: false
    }
  }
};