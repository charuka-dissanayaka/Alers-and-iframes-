import {test, Page, expect} from '@playwright/test'

test('Verify the file download link', async ({page}) => {

    await page.goto('https://the-internet.herokuapp.com/download');

    //assert file download text

    await expect(page.locator('h3')).toHaveText('File Downloader');

    //click file download link
    const downloadFile = page.waitForEvent('download');
    await page.getByRole('link', {name:'some-file.txt'}).click()

    const download = await downloadFile;

   expect(download).toBeTruthy();
    // Take screenshot
    await page.screenshot({
        path: 'screenshots/session3-ex2-result.png',
        fullPage: true
    });

    //console.log('Download file path:', download.path());

     
})