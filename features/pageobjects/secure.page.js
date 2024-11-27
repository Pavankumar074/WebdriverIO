const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('span[class="logged-in"]');
    }

    get addedItemName () {
        return $('=Cronus Yoga Pant');
    }

    get addedItemSize () {
        return $('=36');
    }

    get addedItemColour () {
        return $('=Red');
    }
}

module.exports = new SecurePage();  
