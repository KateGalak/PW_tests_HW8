import { expect, type Locator, type Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page;

    readonly getEmailAdress: Locator;
    readonly getPassword: Locator;
    readonly getLoginButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.getEmailAdress = page.locator("xpath=//input[@data-qa='login-email']");
        this.getPassword = page.locator("xpath=//input[@placeholder='Password']");
        this.getLoginButton = page.locator(
            "xpath=//button[@data-qa='login-button']"
        );
    }

    async goto() {
        await this.page.goto("https://automationexercise.com/login");
    }
}
