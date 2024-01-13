import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

describe('My Login application', () => {
    
    it('Login application should get the title',  () => {
       // Launch the url
        LoginPage.open()

        // Wait until the browser gets title or timesout
        browser.waitUntil(() => {
          return browser.getTitle() !== 'undefined';
        }, { timeout: 5000, timeoutMsg: 'Title not available after 5 seconds' })

        // Get title
        const title = browser.getTitle()
        
        //Validate that the title contains the below text
        expect(title).toHaveText(expect.stringContaining('Test Login | Practice Test Automation'))       
      });
 }); 