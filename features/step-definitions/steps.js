const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const HomePage = require('../pageobjects/home.page');
const cartPage = require('../pageobjects/cart.page');

const pages = {
    login: LoginPage,
    home: HomePage
}

Given(/^I am on the (.*) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (.*) and (.*)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a successful message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));
});

Given(/^I click on Men section and navigate to desired Item$/, async () => {
    await HomePage.selectTheItem();
});

When(/^I click on Add Item to Cart$/, async () => {
    await HomePage.addItemToCart();
});

Then(/^I should see Item added in the cart$/, async() => {
    await HomePage.validateItemAddedToCart();
    await expect(SecurePage.addedItemName).toBeExisting();
    await expect(SecurePage.addedItemSize).toBeExisting();
    await expect(SecurePage.addedItemColour).toBeExisting();
});

Then(/^I should be able to place order successfuly$/, async() => {
    await cartPage.checkOut();
    await cartPage.addStreetAddressValue();
    await cartPage.addCityValue();
    await cartPage.selectStateValue();
    await cartPage.addPhoneNumber();
    await cartPage.selectShippingMethodasflatRate();
    await cartPage.clickNectButton();
    await cartPage.clickOnPlaceOrderButton();
});