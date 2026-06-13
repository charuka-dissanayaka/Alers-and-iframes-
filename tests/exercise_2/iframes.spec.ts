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

    //screenshot of the iframe
    await page.screenshot({ path: 'session3-ex1-result.png', fullPage: true });


});
