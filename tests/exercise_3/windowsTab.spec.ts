import {test,expect} from '@playwright/test';

test('Verify the windows tab is opening in new tab', async( {page, context})=>{
    await page.goto('https://the-internet.herokuapp.com/windows');
    // Assert page title
    await expect(page.locator('h3')).toHaveText('Opening a new window');

    //open the click here link 
    const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('link', { name: 'Click Here' }).click()
  ]);

  await newPage.waitForLoadState();

    await expect(newPage).toHaveURL(/windows\/new/);

  // Assert the new page title
  await expect(newPage.locator('h3'))
    .toHaveText('New Window');



})