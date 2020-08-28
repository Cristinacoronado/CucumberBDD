$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login page tests",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify user log in credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@userCredentialsTest"
    }
  ]
});
formatter.step({
  "name": "I open \"http://automation.techleadacademy.io/#/usermgt\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I click a button \"Login\"",
  "keyword": "When "
});
formatter.step({
  "name": "I input \"\u003cusername\u003e\" as a \"username\"",
  "keyword": "And "
});
formatter.step({
  "name": "I input \"\u003cpassword\u003e\" as a \"password\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click a button \"Login user\"",
  "keyword": "And "
});
formatter.step({
  "name": "I verify title is \"\u003ctitle value\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "title value"
      ]
    },
    {
      "cells": [
        "student@techleadacademy.io",
        "john.smith$",
        "Student Page"
      ]
    },
    {
      "cells": [
        "mentor@techleadacademy.io",
        "stephanie.adams$",
        "Mentor Page"
      ]
    },
    {
      "cells": [
        "instructor@techleadacademy.io",
        "kate.anderson$",
        "Instructor Page"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify user log in credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@userCredentialsTest"
    }
  ]
});
formatter.before({
  "error_message": "java.lang.NullPointerException\r\n\tat utils.Driver.getDriver(Driver.java:25)\r\n\tat step_definitions.Hooks.setUp(Hooks.java:18)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I open \"http://automation.techleadacademy.io/#/usermgt\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.classTaskSteps.iOpen(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click a button \"Login\"",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.CommonPageTest.i_click_a_button(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I input \"student@techleadacademy.io\" as a \"username\"",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.UserMgtPageTest.i_input_as_a(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I input \"john.smith$\" as a \"password\"",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.UserMgtPageTest.i_input_as_a(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click a button \"Login user\"",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.CommonPageTest.i_click_a_button(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify title is \"Student Page\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.classTaskSteps.iVerifyTitleIs(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat utils.Driver.getDriver(Driver.java:25)\r\n\tat utils.SeleniumUtils.waitForPageToLoad(SeleniumUtils.java:37)\r\n\tat utils.Screenshot.takeScreenshot(Screenshot.java:11)\r\n\tat step_definitions.Hooks.tearDown(Hooks.java:27)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify user log in credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@userCredentialsTest"
    }
  ]
});
formatter.before({
  "error_message": "java.lang.NullPointerException\r\n\tat utils.Driver.getDriver(Driver.java:25)\r\n\tat step_definitions.Hooks.setUp(Hooks.java:18)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I open \"http://automation.techleadacademy.io/#/usermgt\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.classTaskSteps.iOpen(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click a button \"Login\"",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.CommonPageTest.i_click_a_button(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I input \"mentor@techleadacademy.io\" as a \"username\"",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.UserMgtPageTest.i_input_as_a(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I input \"stephanie.adams$\" as a \"password\"",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.UserMgtPageTest.i_input_as_a(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click a button \"Login user\"",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.CommonPageTest.i_click_a_button(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify title is \"Mentor Page\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.classTaskSteps.iVerifyTitleIs(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat utils.Driver.getDriver(Driver.java:25)\r\n\tat utils.SeleniumUtils.waitForPageToLoad(SeleniumUtils.java:37)\r\n\tat utils.Screenshot.takeScreenshot(Screenshot.java:11)\r\n\tat step_definitions.Hooks.tearDown(Hooks.java:27)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify user log in credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@userCredentialsTest"
    }
  ]
});
formatter.before({
  "error_message": "java.lang.NullPointerException\r\n\tat utils.Driver.getDriver(Driver.java:25)\r\n\tat step_definitions.Hooks.setUp(Hooks.java:18)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I open \"http://automation.techleadacademy.io/#/usermgt\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.classTaskSteps.iOpen(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click a button \"Login\"",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.CommonPageTest.i_click_a_button(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I input \"instructor@techleadacademy.io\" as a \"username\"",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.UserMgtPageTest.i_input_as_a(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I input \"kate.anderson$\" as a \"password\"",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.UserMgtPageTest.i_input_as_a(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click a button \"Login user\"",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.CommonPageTest.i_click_a_button(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify title is \"Instructor Page\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.classTaskSteps.iVerifyTitleIs(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat utils.Driver.getDriver(Driver.java:25)\r\n\tat utils.SeleniumUtils.waitForPageToLoad(SeleniumUtils.java:37)\r\n\tat utils.Screenshot.takeScreenshot(Screenshot.java:11)\r\n\tat step_definitions.Hooks.tearDown(Hooks.java:27)\r\n",
  "status": "failed"
});
});