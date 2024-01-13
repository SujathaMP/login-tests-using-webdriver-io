import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ResultPage extends Page {
    /**
     * define selectors using getter methods
     */
    get LoginSuccess () {
        return $('[class="post-title"]');
    }
    get LogOutBtn () {
        return $('[class*="wp-block-button__link"]');
    }
    get ErrorMessage () {
        return $('[id="error"]');
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to logout by clicking logout button
     */
    async logout () {

        await this.LogOutBtn.click();
    }
}

export default new ResultPage();
