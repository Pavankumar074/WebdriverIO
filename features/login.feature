Feature: The Magento Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a successful message saying <message>

    Examples:
      | username              | password         | message                |
      | testinguser@test.com  | testinguser@1234 | Welcome, testing user! |

  Scenario: As a user, I can click on Men section and add item to the cart 

    Given I click on Men section and navigate to desired Item
    When I click on Add Item to Cart
    Then I should see Item added in the cart
