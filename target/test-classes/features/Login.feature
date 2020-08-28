Feature: Login page tests

  Scenario: Verify student log in credentials
    Given I open "http://automation.techleadacademy.io/#/usermgt"
    When  I click a button "Login"
    And I input "student@techleadacademy.io" as a "username"
    And I input "john.smith$" as a "password"
    And I click a button "Login user"
    Then I verify title is "Student Page"


  Scenario: Verify mentor log in credentials
    Given I open "http://automation.techleadacademy.io/#/usermgt"
    When  I click a button "Login"
    And I input "mentor@techleadacademy.io" as a "username"
    And I input "stephanie.adams$" as a "password"
    And I click a button "Login user"
    Then I verify title is "Mentor Page"


  Scenario: Verify instructor log in credentials
    Given I open "http://automation.techleadacademy.io/#/usermgt"
    When  I click a button "Login"
    And I input "instructor@techleadacademy.io" as a "username"
    And I input "kate.anderson$" as a "password"
    And I click a button "Login user"
    Then I verify title is "Instructor Page"


@userCredentialsTest
  Scenario Outline: Verify user log in credentials
    Given I open "http://automation.techleadacademy.io/#/usermgt"
    When  I click a button "Login"
    And I input "<username>" as a "username"
    And I input "<password>" as a "password"
    And I click a button "Login user"
    Then I verify title is "<title value>"
    Examples:
    |username                     | password         | title value     |
    |student@techleadacademy.io   | john.smith$      | Student Page    |
    |mentor@techleadacademy.io    | stephanie.adams$ | Mentor Page     |
    |instructor@techleadacademy.io| kate.anderson$   | Instructor Page |






