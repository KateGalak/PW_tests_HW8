import { expect, type Locator, type Page } from "@playwright/test";

export class ProductPage {
    readonly page: Page;

    readonly getProductPage: Locator;
    readonly getSearchfield: Locator;
    readonly getSearchButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.getProductPage = page.locator(
            "xpath=//a[contains(text(),'Products')]"
        );
        this.getSearchfield = page.locator(
            "xpath=//input[@class='form-control input-lg']"
        );
        this.getSearchButton = page.locator(
            "xpath=//button[contains(@class,'btn btn-default btn-lg')]"
        );
    }
    async goto() {
        await this.page.goto("https://automationexercise.com/");
    }
}
