const { $ } = require('@wdio/globals')
const Page = require('./page');

class CartPage {

    /**
     * define selectors using getter methods
     */

    get proceedToCheckOut () {
        return $('=Proceed to Checkout');
    }

    get streetAddress () {
        return $('[name="street[0]"]');
    }

    get city () {
        return $('[name="city"]');
    }

    get state () {
        return $('[name="region_id"]');
    }

    get phoneNumber () {
        return $('[name="telephone"]');
    }

    get nextButton() {
        return $('=Next');
    }

    get shippingMethodasFlatRate() {
        return $('[value="flatrate_flatrate"]');
    }

    get placeOrder() {
        return $('=Place Order');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to add item to cart
     */
    async checkOut () {
        await this.proceedToCheckOut.click();
     }

     async addStreetAddressValue () {
        await this.streetAddress.setValue("Street 1");
     }

     async selectStateValue () {
        await this.state.selectByAttribute('value',12);
     }

     async addCityValue () {
        await this.state.setValue("City");
     }

     async addPhoneNumber () {
        await this.phoneNumber.setValue("1234567");
     }

     async clickNectButton () {
        await this.nextButton.click();
     }

     async selectShippingMethodasflatRate() {
        await this.shippingMethodasFlatRate.click();
     }

     async clickOnPlaceOrderButton() {
        await this.placeOrder.click();
     }

}
module.exports = new CartPage();