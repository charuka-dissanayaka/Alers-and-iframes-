import { test, expect } from '@playwright/test';

// verify the file uploading button working
test('Verify the file uploading button working', async ({ page }) => {
      // Navigate to upload page
    await page.goto('https://the-internet.herokuapp.com/upload');

    // Upload file
    await page.locator('#file-upload')
        .setInputFiles('test-data/test-file.txt');

    // Assert 1
    await expect(page.locator('#file-upload')).toBeAttached();

    // Click Upload button
    //await page.locator('#file-upload').click();

  await page.getByRole('button', { name: 'Upload' }).click();

  // Assert 2
  await expect(page.locator('h3'))
    .toHaveText('File Uploaded!');

  // Assert 3
  await expect(page.locator('#uploaded-files'))
    .toHaveText('test-file.txt');
});
