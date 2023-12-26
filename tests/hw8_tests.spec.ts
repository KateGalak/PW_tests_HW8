import { test, expect } from "@playwright/test";
import { LoginPage } from "../page-objects/LoginPage";
import { ProductPage } from "../page-objects/ProductPage";
import { PagesURLs } from "../page-objects/PagesURLs";

test("Login", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.getEmailAdress.pressSequentially("kathreen14@gmail.com");
    await loginPage.getPassword.pressSequentially("pass123456@");
    await loginPage.getLoginButton.click();
});

test("ProductPage", async ({ page }) => {
    const productPage = new ProductPage(page);
    await productPage.goto();
    await productPage.getProductPage.click();
    await productPage.getSearchfield.pressSequentially("Blue Top");
    await productPage.getSearchButton.click();
    await page.click("xpath=//a[contains(text(),'View Product')]");
    await expect(
        page.locator("xpath=//h2[contains(text(),'Blue Top')]")
    ).toBeVisible();
});

test("PagesUrls", async ({ page }) => {
    const pageURL = new PagesURLs(page);
    await pageURL.goto();
    await pageURL.getHomePage.click();
    expect(page.url()).toBe("https://automationexercise.com/");
    await pageURL.getProductPage.click();
    expect(page.url()).toBe("https://automationexercise.com/products");
    await pageURL.getCartPage.click();
    expect(page.url()).toBe("https://automationexercise.com/view_cart");
    await pageURL.getLoginPage.click();
    expect(page.url()).toBe("https://automationexercise.com/login");
    await pageURL.getTestCases.click();
    expect(page.url()).toBe("https://automationexercise.com/test_cases");
    await pageURL.getApiTesting.click();
    expect(page.url()).toBe("https://automationexercise.com/api_list");
    await pageURL.getContactUs.click();
    expect(page.url()).toBe("https://automationexercise.com/contact_us");
    await pageURL.getVideoTutorials.click();
    expect(page.url()).toBe("https://www.youtube.com/c/AutomationExercise");
});

test("CartAction", async ({ page }) => {
    const productPage = new ProductPage(page);
    const pageURL = new PagesURLs(page);
    const expectedCartQuantity = 2;
    await productPage.goto();
    await page.click("xpath=//a[contains(@data-product-id, '24')]");
    await page.click(
        "xpath=//button[contains(@class, 'btn btn-success close-modal btn-block')]"
    );
    await page.click("xpath=//a[contains(@data-product-id, '33')]");
    await page.click(
        "xpath=//button[contains(@class, 'btn btn-success close-modal btn-block')]"
    );
    await pageURL.getCartPage.click();
    const count = await page
        .locator("xpath=//td[contains(@class,'cart_product')]")
        .count();
    expect(count).toBe(expectedCartQuantity);
});

test("CheckElements", async ({ page }) => {
    const productPage = new ProductPage(page);
    await productPage.goto();
    await productPage.getProductPage.click();
    await page.click("xpath=//a[contains(@href, '#Women')]");
    await expect(
        page.locator("xpath=//a[contains(@href, '/category_products/1')]"),
        "xpath=//a[contains(@href, '/category_products/2')]"
    ).toBeVisible();
    await page.click("xpath=//a[contains(@href, '#Kids')]");
    await page
        .locator("xpath=//a[contains(@href, '/category_products/1')]")
        .isHidden();
});
