import { expect,test } from "@playwright/test";


test('verify the alert functionality', async ({page}) =>{

  

await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

//  Page title visible
await expect(page.locator('h3')).toHaveText('JavaScript Alerts')

// Click JS Alert button
const alertBtn = page.getByRole('button', { name: 'Click for JS Alert' })
await alertBtn.click();
console.log('Alert button clicked');
await page.waitForTimeout(5000);


 // Handle alert dialog
  page.on('dialog', async dialog => {
    expect(dialog.message()).toBe('I am a JS Alert')
    await dialog.accept();
  });  


 //  Assert result message
  const result = page.locator('#result');
  await expect(result).toBeVisible();
  await expect(result).toHaveText('You successfully clicked an alert');

  // 5. Take screenshot
  await page.screenshot({ path: 'session3-ex1-result.png', fullPage: true });

})