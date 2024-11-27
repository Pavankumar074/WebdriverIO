const { $ } = require('@wdio/globals')
const Page = require('./page');

class HomePage {

    /**
     * define selectors using getter methods
     */

    get menSection () {
        return $('=Men');
    }

    get pantsSection () {
        return $('=Pants');
    }

    get cronusYogaPants () {
        return $('=Cronus Yoga Pant');
    }

    get pantSizeAs36 () {
        return $('=36');
    }

    get pantColourAsRed () {
        return $('[option-label="Red"]');
    }

    get addToCart () {
        return $('=Add to Cart');
    }

    get navigateToCart () {
        return $('=shopping cart');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to add item to cart
     */
    async selectTheItem () {
        await this.menSection.click();
        await this.pantsSection.click();
        await this.cronusYogaPants.click();
        await this.pantSizeAs36.click();
        await this.pantColourAsRed.click();
    }

    async addItemToCart () {
        await this.addToCart.click();
    }

    async validateItemAddedToCart () {
        await this.navigateToCart.click();
    }

}
module.exports = new HomePage();