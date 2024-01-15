import { expect, type Locator, type Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;

  readonly getUsername: Locator;
  readonly getPassword: Locator;
  readonly getSinginButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.getUsername = page.locator("xpath=//input[@autocomplete='username']");
    this.getPassword = page.locator(
      "xpath=//input[@autocomplete='current-password']"
    );
    this.getSinginButton = page.locator("xpath=//input[@value='Sign In']");
  }

  async goto() {
    await this.page.goto("https://dev1.test.kate/portal/");
  }
}
