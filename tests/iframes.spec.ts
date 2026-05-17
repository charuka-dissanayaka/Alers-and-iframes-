import { test, expect } from '@playwright/test';

test('Verify the Iframe visibility ', async ({ page }) => {
    await page.goto('https://practice-automation.com/iframes/');
     const iframe = page.frameLocator('#iframe-1')

     //Assert the iframe visiblilty 
     const logo = iframe.getByAltText('Playwright logo');
     await expect(logo).toBeVisible();

     //Assert the alert functionality 
    const getStartBtn = iframe.getByRole('link', {name: 'Get Started'});
    await expect(getStartBtn).toBeVisible();


});

test('Verify the Alerts functionality', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
