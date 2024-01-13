import { browser } from '@wdio/globals'
import AxeBuilder from '@axe-core/webdriverio'

describe('Accessibility Test', () => {
    it('should get the accessibility results from a page', async () => {
        const builder = new AxeBuilder({ client: browser })

        // Launch the url
        await browser.url('https://practicetestautomation.com/practice-test-login/')

        //Get build analyze
        const result = await builder.analyze()

        //Log the results
        console.log('Acessibility Results:', result)
    })
})