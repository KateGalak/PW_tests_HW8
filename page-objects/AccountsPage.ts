import { expect, type Locator, type Page } from "@playwright/test";

export class AccountsPage {
  readonly page: Page;

  readonly getCompanyorContact: Locator;
  readonly getSearchButton: Locator;
  readonly getAccountDetails: Locator;
  readonly getDotsDropdown: Locator;
  readonly getDotsContact: Locator;
  readonly getDotsEditAcc: Locator;
  readonly getDotsNotifications: Locator;
  readonly getDotsDisable: Locator;
  readonly getDotsEnable: Locator;
  readonly getDotsLoginAsAcc: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getCompanyorContact = page.locator(
      "xpath=//input[@placeholder='Company or contact']"
    );
    this.getSearchButton = page.locator(
      "xpath=//button[contains(text(),'Search')]"
    );
    this.getAccountDetails = page.locator(
      "xpath=//a[contains(text(),'Details')]"
    );
    this.getDotsDropdown = page.locator(
      "xpath=//div[@class='btn btn-sm btn-outline-primary  dropdown']"
    );
    this.getDotsContact = page.locator(
      "xpath=//button[contains(text(),'Contacts')]"
    );
    this.getDotsEditAcc = page.locator(
      "xpath=//button[contains(text(),'Edit')]"
    );
    this.getDotsNotifications = page.locator(
      "xpath=//button[contains(text(), 'Notifications')]"
    );
    this.getDotsDisable = page.locator(
      "xpath=//button[contains(text(), 'Disable')]"
    );
    this.getDotsEnable = page.locator(
      "xpath=//button[contains(text(), 'Enable')]"
    );
    this.getDotsLoginAsAcc = page.locator(
      "xpath=//button[contains(text(),'Login As Account')]"
    );
  }
}
