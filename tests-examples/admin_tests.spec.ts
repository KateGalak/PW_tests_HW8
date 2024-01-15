import { test, expect } from "@playwright/test";
import { LoginPage } from "../page-objects/LoginPage";
import { AdminMenu } from "../page-objects/AdminMenu";
import { getRandomNumber } from "../test-data/math_random";
import { AccountsPage } from "../page-objects/AccountsPage";

test.use({
  ignoreHTTPSErrors: true,
});

test.beforeEach("Login as admin", async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`);
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.getUsername.pressSequentially("aqakuku@gmail.com");
  await loginPage.getPassword.pressSequentially("2nT55462@");
  await loginPage.getSinginButton.click();
});

test("my test", async ({ page }) => {
  expect(page.url()).toBe("https://dev1.test.kate");
});

test("Login as customer", async ({ page }) => {
  const adminMenue = new AdminMenu(page);
  const accountsPage = new AccountsPage(page);

  await adminMenue.getOrdering.click();
  await adminMenue.getAccounts.click();
  await accountsPage.getCompanyorContact.fill("admin@gmail.com");
  await accountsPage.getSearchButton.click();

  await accountsPage.getDotsDropdown.click();
  await accountsPage.getDotsLoginAsAcc.click();
  await expect(page).toHaveURL("https://dev1.test.test/customer");
});

test("Check field name/default text", async ({ page }) => {
  const adminMenue = new AdminMenu(page);

  await adminMenue.getOrdering.click();
  await adminMenue.getAccounts.click();
  await expect(
    page.locator(
      "xpath=//div[@class='react-select-container__value-container react-select-container__value-container--has-value css-b9aaqt-C']"
    )
  ).toHaveText("---Parent account---");

  await expect(page.locator("select#id_type_filter>option").first()).toHaveText(
    "---Account type---"
  );

  await expect(page.locator("select#id_type_filter>option")).toHaveText([
    "---Account type---",
    "Customer",
    "Partner",
    "Distributor VAR",
    "Distributor",
  ]);

  await expect(page.locator("select#id_status>option").first()).toHaveText(
    "Enabled"
  );

  await expect(page.locator("select#id_status>option")).toHaveText([
    "Enabled",
    "Active",
    "Active with trials",
    "Prospect",
    "Disabled",
    "All",
  ]);

  await expect(
    page.locator("xpath=//input[@placeholder='Company or contact']")
  ).toBeVisible();
});

test("Customer detail page", async ({ page }) => {
  const adminMenu = new AdminMenu(page);
  const accountsPage = new AccountsPage(page);

  await adminMenu.getOrdering.click();
  await adminMenu.getAccounts.click();
  await accountsPage.getCompanyorContact.fill("admin@gmail.com");
  await accountsPage.getSearchButton.click();
  await accountsPage.getAccountDetails.click();
  await expect(page).toHaveURL(
    "https://dev1.test.kate/portal/accounts/7f53f986/"
  );
});

test("Provision page", async ({ page }) => {
  const adminMenu = new AdminMenu(page);

  await adminMenu.getServices.click();
  await adminMenu.getProvisioning.click();
  await expect(page).toHaveURL("https://dev1.test.kate/portal/provision/");
});

test("Edit customer", async ({ page }) => {
  const adminMenue = new AdminMenu(page);
  const accountsPage = new AccountsPage(page);

  await adminMenue.getOrdering.click();
  await adminMenue.getAccounts.click();
  await accountsPage.getCompanyorContact.fill("Demon_new_Kate(Do_not_touch)");
  await accountsPage.getSearchButton.click();
  await accountsPage.getDotsDropdown.click();
  await accountsPage.getDotsEditAcc.click();
  await expect(page.locator("xpath=//div[@class='modal-body']")).toBeVisible();
  await page
    .locator("xpath=//input[@id='id_postal_code']")
    .fill(getRandomNumber());
  await page
    .locator("xpath=//button[@class='btn btn-outline-primary']")
    .click();
  await expect(
    page.locator(
      "xpath=//div[@class='swal2-popup swal2-modal swal2-icon-success swal2-show']"
    )
  ).toBeVisible();
});

test("Disable/enable customer", async ({ page }) => {
  const adminMenue = new AdminMenu(page);
  const accountsPage = new AccountsPage(page);

  await adminMenue.getOrdering.click();
  await adminMenue.getAccounts.click();
  await accountsPage.getCompanyorContact.fill("Demon_new_Kate(Do_not_touch)");
  await accountsPage.getSearchButton.click();
  await accountsPage.getDotsDropdown.click();
  await accountsPage.getDotsDisable.click();
  await page
    .locator("xpath=//select[@id='id_disable_reason']")
    .selectOption("Canceling Service");
  await page
    .locator("xpath=//button[@class='btn btn-outline-primary']")
    .click();
  await expect(
    page.locator(
      "xpath=//div[@class='swal2-popup swal2-modal swal2-icon-success swal2-show']"
    )
  ).toBeVisible({ timeout: 20000 });
  await expect(page.locator("xpath=//h2[@id='swal2-title']")).toHaveText(
    "Disabled customer Demon_new_Kate(Do_not_touch)"
  );
  await page
    .locator("xpath=//button[@class='swal2-confirm swal2-styled']")
    .click();
  await page.locator("xpath=//select[@id='id_status']").selectOption("all");
  await accountsPage.getSearchButton.click();
  await expect(
    page.locator("xpath=//td[contains(text(),'Disabled')]")
  ).toContainText("Disabled");
  await accountsPage.getDotsDropdown.click();
  await accountsPage.getDotsEnable.click();
  await expect(
    page.locator(
      "xpath=//div[@class='swal2-popup swal2-modal swal2-icon-question swal2-show']"
    )
  ).toBeVisible({ timeout: 20000 });
  await page
    .locator("xpath=//button[@class='swal2-confirm swal2-styled']")
    .click();
  await expect(
    page.locator(
      "xpath=//div[@class='swal2-popup swal2-modal swal2-icon-success swal2-show']"
    )
  ).toBeVisible({ timeout: 20000 });
  await expect(page.locator("xpath=//h2[@id='swal2-title']")).toHaveText(
    "Enabled customer Demon_new_Kate(Do_not_touch)",
    { timeout: 32000 }
  );
  await page
    .locator("xpath=//button[@class='swal2-confirm swal2-styled']")
    .click();
  await expect(
    page.locator("xpath=//td[contains(text(),'Active')]")
  ).toHaveText("Active");
});
