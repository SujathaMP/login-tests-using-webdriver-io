import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import ResultPage from '../pageobjects/result.page.js'

describe('My Login application', () => {
   
    it('should get error message with empty credentials for a login functionality', async () => {
        // Launch the url
        await LoginPage.open()

        // Enter empty credentials
        await LoginPage.login('', '')

        // Validate that error message exists and contains the below text
        await expect(ResultPage.ErrorMessage).toBeExisting()
        await expect(ResultPage.ErrorMessage).toHaveText(expect.stringContaining('Your username is invalid!'))
    })
   
})

