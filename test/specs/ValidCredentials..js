import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import ResultPage from '../pageobjects/result.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
       // Launch the url
        await LoginPage.open()

        // Enter the valid crendentials
        await LoginPage.login('student', 'Password123')

        //Validate that login happened successfully and the below text is shown in the page
        await expect(ResultPage.LoginSuccess).toBeExisting()       
        await expect(ResultPage.LoginSuccess).toHaveText(expect.stringContaining('Logged In Successfully'))
    })   
    it('should get back to login page when loggedout successfully', async () => {
       
        // Click Logout button
        await ResultPage.logout()

         //Validate that logout happened successfully and the Username, password fields are shown
         await expect(LoginPage.inputUsername).toBeExisting()    
         await expect(LoginPage.inputPassword).toBeExisting()    
         
     })         
   
})

