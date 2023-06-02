import { expect, test } from '@playwright/test'

test('When i open application should go to todos-list page', async ({ page }) => {
  await page.goto('http://localhost:4200')

  await expect(page).toHaveURL(/.*todos/)
})
