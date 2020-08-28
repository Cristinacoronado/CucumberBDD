@classTask
Feature: Class Tasks
@youtube
  Scenario: Testing youtube
    Given I open "youtube"
    Then I verify title is "YouTube"

  @amazon
  Scenario: Testing amazon
    Given I open "amazon"
    Then I verify title is "Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more"

  @chase
  Scenario: Testing chase bank
    Given I open "chase bank"
    Then I verify title is "Credit Card, Mortgage, Banking, Auto | Chase Online | Chase.com"


