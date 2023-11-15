const login = require("./user");
const {chromium}  = require("playwright");
const { test, expect } = require('@playwright/test');

//console.log(login.user, login.pas);

test("test", async ({ page }) => {
(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 3000,
    devtools: false
  });
  const page = await browser.newPage();
  await page.goto("https://netology.ru");
  //await page.goto("https://netology.ru/?modal=sign_in");
//   await page.getByPlaceholder('Email').click();
//   await page.getByPlaceholder('Email').fill(login.user);
//   await page.getByPlaceholder('Пароль').click();
//   await page.getByPlaceholder('Пароль').fill(login.pass);
//   await page.getByTestId('login-submit-btn').click();
  //console.log(page.locator("h2:has-text("Playwright")"));
  //await expect(page).toHaveURL(/.*intro/);
  expect(page.url()).toBe('https://netology.ru/');

  //getByRole('heading', { name: 'Моё обучение' })

  await page.pause();

  //assertion
  await browser.close();
})();
