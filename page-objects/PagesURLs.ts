import { expect, type Locator, type Page } from "@playwright/test";

export class PagesURLs {
    readonly page: Page;

    readonly getHomePage: Locator;
    readonly getProductPage: Locator;
    readonly getCartPage: Locator;
    readonly getLoginPage: Locator;
    readonly getTestCases: Locator;
    readonly getApiTesting: Locator;
    readonly getVideoTutorials: Locator;
    readonly getContactUs: Locator;

    constructor(page: Page) {
        this.page = page;

        this.getHomePage = page.locator("xpath=//a[contains(text(),'Home')]");
        this.getProductPage = page.locator("xpath=//a[contains(text(),'Products')]");
        this.getCartPage = page.locator("xpath=//a[contains(text(),'Cart')]");
        this.getLoginPage = page.locator("xpath=//a[contains(text(),'Signup / Login')]");
        this.getTestCases = page.locator("xpath=//a[contains(text(),'Test Cases')]");
        this.getApiTesting = page.locator("xpath=//a[contains(text(),'API Testing')]");
        this.getVideoTutorials = page.locator("xpath=//a[contains(text(),' Video Tutorials')]");
        this.getContactUs = page.locator("xpath=//a[contains(text(),'Contact us')]");
    }
    async goto() {
        await this.page.goto("https://automationexercise.com/");
    }
}
