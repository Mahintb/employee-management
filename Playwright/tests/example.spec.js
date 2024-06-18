// @ts-check
const { test, expect } = require('@playwright/test');

test('employee managment', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  console.log(page.title)
  await page.locator("//a[contains(text(),'Add Employee')]").click()
  await page.locator("#name").click()
  //await page.locator("#name").clear()
  await page.locator("#dob").fill("12/03/2023")
  await page.selectOption("#status","inactive")
  // Expect a title "to contain" a substring.
 // await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://demo.guru99.com/test/radio.html');
  await page.locator("#vfb-7-3").check()
  await page.locator("#vfb-6-2").check()
  await page.waitForTimeout(6000)
  await page.locator("#vfb-6-2").uncheck()
  await page.locator("//a[@class='dropdown-toggle'][normalize-space()='Selenium']").click()
  await page.locator("//a[normalize-space()='Ajax Demo']").click()




});
