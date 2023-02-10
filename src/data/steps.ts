// 20230202120120
// https://raw.githubusercontent.com/overloop-io/overloop-testing-framework/master/test-data/cypress/out.json?token=GHSAT0AAAAAAB6GM6DARSB6Y6BUATX6ALHMY63UYHQ

const steps = [
    {
        "options":{
            "name":"Given ",
            "message":"**I visit overloop's website**",
            "groupStart":true,
            "type":"parent",
            "timeout":4000,
            "event":false,
            "id":"log-https://www.overloop.io-1",
            "state":"passed",
            "instrument":"command",
            "url":"",
            "wallClockStartedAt":"2023-02-07T15:22:45.344Z",
            "ended":true
        }
    },
    {
        "options":{
            "message":"https://overloop.io/ -> 301: https://www.overloop.io/",
            "timeout":60000,
            "name":"visit",
            "type":"parent",
            "event":false,
            "id":"log-https://www.overloop.io-2",
            "state":"passed",
            "instrument":"command",
            "url":"https://overloop.io/",
            "wallClockStartedAt":"2023-02-07T15:22:45.359Z",
            "group":"log-https://www.overloop.io-1",
            "totalTime":321,
            "ended":true
        }
    },
    {
        "options":{
            "name":"When ",
            "message":"**I navigate to contact page**",
            "groupStart":true,
            "type":"parent",
            "timeout":4000,
            "event":false,
            "id":"log-https://www.overloop.io-8",
            "state":"passed",
            "instrument":"command",
            "url":"https://www.overloop.io/",
            "wallClockStartedAt":"2023-02-07T15:22:47.698Z",
            "ended":true
        }
    },
    {
        "options":{
            "message":".Header-nav-item",
            "aliasType":"dom",
            "timeout":4000,
            "name":"get",
            "type":"parent",
            "event":false,
            "id":"log-https://www.overloop.io-9",
            "state":"passed",
            "instrument":"command",
            "url":"https://www.overloop.io/",
            "wallClockStartedAt":"2023-02-07T15:22:47.706Z",
            "group":"log-https://www.overloop.io-8",
            "ended":true
        }
    },
    {
        "options":{
            "message":"Contact",
            "type":"child",
            "timeout":4000,
            "name":"contains",
            "event":false,
            "id":"log-https://www.overloop.io-10",
            "state":"passed",
            "instrument":"command",
            "url":"https://www.overloop.io/",
            "wallClockStartedAt":"2023-02-07T15:22:47.745Z",
            "group":"log-https://www.overloop.io-8",
            "ended":true
        }
    },
    {
        "options":{
            "message":"",
            "timeout":4000,
            "name":"click",
            "type":"child",
            "event":false,
            "id":"log-https://www.overloop.io-11",
            "state":"passed",
            "instrument":"command",
            "url":"https://www.overloop.io/",
            "wallClockStartedAt":"2023-02-07T15:22:47.759Z",
            "group":"log-https://www.overloop.io-8",
            "coords":{
                "top":42,
                "left":828.203125,
                "topCenter":61,
                "leftCenter":882,
                "x":882,
                "y":62
            },
            "ended":true
        }
    },
    {
        "options":{
            "name":"new url",
            "message":"https://www.overloop.io/contact-us",
            "event":true,
            "type":"parent",
            "end":true,
            "snapshot":true,
            "timeout":4000,
            "id":"log-https://www.overloop.io-13",
            "state":"passed",
            "instrument":"command",
            "url":"https://www.overloop.io/contact-us",
            "wallClockStartedAt":"2023-02-07T15:22:48.159Z",
            "group":"log-https://www.overloop.io-8",
            "ended":true
        }
    },
    {
        "options":{
            "type":"parent",
            "name":"page load",
            "message":"--page loaded--",
            "event":true,
            "timeout":60000,
            "id":"log-https://www.overloop.io-12",
            "state":"passed",
            "instrument":"command",
            "url":"https://www.overloop.io/",
            "wallClockStartedAt":"2023-02-07T15:22:47.859Z",
            "group":"log-https://www.overloop.io-8",
            "ended":true
        }
    },
    {
        "options":{
            "name":"And ",
            "message":"**I fill in contact form details**",
            "groupStart":true,
            "type":"parent",
            "timeout":4000,
            "event":false,
            "id":"log-https://www.overloop.io-18",
            "state":"passed",
            "instrument":"command",
            "url":"https://www.overloop.io/contact-us",
            "wallClockStartedAt":"2023-02-07T15:22:48.461Z",
            "ended":true
        }
    },
    {
        "options":{
            "message":"input[name=\"fname\"]",
            "aliasType":"dom",
            "timeout":4000,
            "name":"get",
            "type":"parent",
            "event":false,
            "id":"log-https://www.overloop.io-19",
            "state":"passed",
            "instrument":"command",
            "url":"https://www.overloop.io/contact-us",
            "wallClockStartedAt":"2023-02-07T15:22:48.468Z",
            "group":"log-https://www.overloop.io-18",
            "ended":true
        }
    },
    {
        "options":{
            "message":"testName",
            "timeout":4000,
            "name":"type",
            "type":"child",
            "event":false,
            "id":"log-https://www.overloop.io-20",
            "state":"passed",
            "instrument":"command",
            "url":"https://www.overloop.io/contact-us",
            "wallClockStartedAt":"2023-02-07T15:22:48.489Z",
            "group":"log-https://www.overloop.io-18",
            "coords":{
                "top":251,
                "left":517.171875,
                "topCenter":272,
                "leftCenter":619,
                "x":619,
                "y":273
            },
            "ended":true
        }
    },
    {
        "options":{
            "message":"input[name=\"lname\"]",
            "aliasType":"dom",
            "timeout":4000,
            "name":"get",
            "type":"parent",
            "event":false,
            "id":"log-https://www.overloop.io-21",
            "state":"passed",
            "instrument":"command",
            "url":"https://www.overloop.io/contact-us",
            "wallClockStartedAt":"2023-02-07T15:22:48.769Z",
            "group":"log-https://www.overloop.io-18",
            "ended":true
        }
    },
    {
        "options":{
            "message":"testLastName",
            "timeout":4000,
            "name":"type",
            "type":"child",
            "event":false,
            "id":"log-https://www.overloop.io-22",
            "state":"passed",
            "instrument":"command",
            "url":"https://www.overloop.io/contact-us",
            "wallClockStartedAt":"2023-02-07T15:22:48.787Z",
            "group":"log-https://www.overloop.io-18",
            "coords":{
                "top":251,
                "left":730.84375,
                "topCenter":272,
                "leftCenter":833,
                "x":833,
                "y":273
            },
            "ended":true
        }
    },
    {
        "options":{
            "message":"input[name=\"email\"]",
            "aliasType":"dom",
            "timeout":4000,
            "name":"get",
            "type":"parent",
            "event":false,
            "id":"log-https://www.overloop.io-23",
            "state":"passed",
            "instrument":"command",
            "url":"https://www.overloop.io/contact-us",
            "wallClockStartedAt":"2023-02-07T15:22:49.107Z",
            "group":"log-https://www.overloop.io-18",
            "ended":true
        }
    },
    {
        "options":{
            "message":"email@gmail.com",
            "timeout":4000,
            "name":"type",
            "type":"child",
            "event":false,
            "id":"log-https://www.overloop.io-24",
            "state":"passed",
            "instrument":"command",
            "url":"https://www.overloop.io/contact-us",
            "wallClockStartedAt":"2023-02-07T15:22:49.127Z",
            "group":"log-https://www.overloop.io-18",
            "coords":{
                "top":464,
                "left":517,
                "topCenter":485,
                "leftCenter":726,
                "x":726,
                "y":486
            },
            "ended":true
        }
    },
    {
        "options":{
            "message":"Submit",
            "type":"parent",
            "timeout":4000,
            "name":"contains",
            "event":false,
            "id":"log-https://www.overloop.io-25",
            "state":"passed",
            "instrument":"command",
            "url":"https://www.overloop.io/contact-us",
            "wallClockStartedAt":"2023-02-07T15:22:49.487Z",
            "group":"log-https://www.overloop.io-18",
            "ended":true
        }
    },
    {
        "options":{
            "message":"",
            "timeout":4000,
            "name":"click",
            "type":"child",
            "event":false,
            "id":"log-https://www.overloop.io-26",
            "state":"passed",
            "instrument":"command",
            "url":"https://www.overloop.io/contact-us",
            "wallClockStartedAt":"2023-02-07T15:22:49.503Z",
            "group":"log-https://www.overloop.io-18",
            "coords":{
                "top":790,
                "left":517,
                "topCenter":810,
                "leftCenter":575,
                "x":575,
                "y":811
            },
            "ended":true
        }
    },
    {
        "options":{
            "name":"Then ",
            "message":"**Validation error for missing fields occurs**",
            "groupStart":true,
            "type":"parent",
            "timeout":4000,
            "event":false,
            "id":"log-https://www.overloop.io-29",
            "state":"passed",
            "instrument":"command",
            "url":"https://www.overloop.io/contact-us",
            "wallClockStartedAt":"2023-02-07T15:22:49.616Z",
            "ended":true
        }
    },
    {
        "options":{
            "message":".field-error",
            "aliasType":"dom",
            "timeout":4000,
            "name":"get",
            "type":"parent",
            "event":false,
            "id":"log-https://www.overloop.io-30",
            "state":"passed",
            "instrument":"command",
            "url":"https://www.overloop.io/contact-us",
            "wallClockStartedAt":"2023-02-07T15:22:49.621Z",
            "group":"log-https://www.overloop.io-29",
            "numRetries":16,
            "ended":true
        }
    },
    {
        "options":{
            "name":"assert",
            "message":"expected **[ <div.field-error>, 3 more... ]** to be **visible**",
            "passed":true,
            "timeout":0,
            "type":"child",
            "event":false,
            "id":"log-https://www.overloop.io-31",
            "state":"passed",
            "instrument":"command",
            "url":"https://www.overloop.io/contact-us",
            "wallClockStartedAt":"2023-02-07T15:22:50.010Z",
            "group":"log-https://www.overloop.io-29",
            "commandLogId":"0-2",
            "subject":{
                "0":{
                    "_yuid":"yui_3_17_2_1_1675783368198_111"
                },
                "1":{
                    "_yuid":"yui_3_17_2_1_1675783368198_110"
                },
                "2":{
                    "_yuid":"yui_3_17_2_1_1675783368198_108"
                },
                "3":{
                    "_yuid":"yui_3_17_2_1_1675783368198_106"
                },
                "length":4
            },
            "ended":true
        }
    },
    {
        "options":{
            "message":"Submit",
            "type":"parent",
            "timeout":4000,
            "name":"contains",
            "event":false,
            "id":"log-https://www.overloop.io-65",
            "state":"failed",
            "instrument":"command",
            "url":"https://www.overloop.io/contact-us",
            "wallClockStartedAt":"2023-02-07T15:22:50.040Z",
            "group":"log-https://www.overloop.io-29",
            "ended":true,
            "err":{
                "message":"Timed out retrying after 4000ms: expected '<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>' to be 'disabled'",
                "name":"AssertionError",
                "stack":"AssertionError: Timed out retrying after 4000ms: expected '<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>' to be 'disabled'\n    at Context.eval (cypress/steps/overloop-steps.js:35:24)\n    at Registry.runStepDefininition (node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js:119:0)\n    at Object.fn (node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js:299:0)\n    at runStepWithLogGroup (node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js:11:0)\n    at Context.eval (node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js:296:0)",
                "parsedStack":[
                    {
                        "message":"AssertionError: Timed out retrying after 4000ms: expected '<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>' to be 'disabled'",
                        "whitespace":""
                    },
                    {
                        "function":"Context.eval",
                        "fileUrl":"https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature",
                        "originalFile":"cypress/steps/overloop-steps.js",
                        "relativeFile":"cypress/steps/overloop-steps.js",
                        "absoluteFile":"/Users/kalli.kavasi/overloop-framework/cypress-poc/cypress/steps/overloop-steps.js",
                        "line":35,
                        "column":24,
                        "whitespace":"    "
                    },
                    {
                        "function":"Registry.runStepDefininition",
                        "fileUrl":"https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature",
                        "originalFile":"node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js",
                        "relativeFile":"node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js",
                        "absoluteFile":"/Users/kalli.kavasi/overloop-framework/cypress-poc/node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js",
                        "line":119,
                        "column":0,
                        "whitespace":"    "
                    },
                    {
                        "function":"Object.fn",
                        "fileUrl":"https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature",
                        "originalFile":"node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js",
                        "relativeFile":"node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js",
                        "absoluteFile":"/Users/kalli.kavasi/overloop-framework/cypress-poc/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js",
                        "line":299,
                        "column":0,
                        "whitespace":"    "
                    },
                    {
                        "function":"runStepWithLogGroup",
                        "fileUrl":"https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature",
                        "originalFile":"node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js",
                        "relativeFile":"node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js",
                        "absoluteFile":"/Users/kalli.kavasi/overloop-framework/cypress-poc/node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js",
                        "line":11,
                        "column":0,
                        "whitespace":"    "
                    },
                    {
                        "function":"Context.eval",
                        "fileUrl":"https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature",
                        "originalFile":"node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js",
                        "relativeFile":"node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js",
                        "absoluteFile":"/Users/kalli.kavasi/overloop-framework/cypress-poc/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js",
                        "line":296,
                        "column":0,
                        "whitespace":"    "
                    }
                ],
                "codeFrame":{
                    "line":35,
                    "column":25,
                    "originalFile":"cypress/steps/overloop-steps.js",
                    "relativeFile":"cypress/steps/overloop-steps.js",
                    "absoluteFile":"/Users/kalli.kavasi/overloop-framework/cypress-poc/cypress/steps/overloop-steps.js",
                    "frame":"  33 | Then(/Validation error for missing fields occurs/, () => {\n  34 |   cy.get(\".field-error\").should(\"be.visible\");\n> 35 |   cy.contains(\"Submit\").should(\"be.disabled\");\n     |                         ^\n  36 | });\n  37 | \n  38 | Then(/I can see the content/, () => {",
                    "language":"js"
                }
            }
        }
    },
    {
        "options":{
            "subject":{
                "0":{
                    "_yuid":"yui_3_17_2_1_1675783368198_90",
                    "__Cypress_state__":{
                        "start":6,
                        "end":6
                    }
                },
                "length":1
            },
            "_error":{
                "name":"AssertionError",
                "message":"Timed out retrying after 4000ms: expected '<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>' to be 'disabled'",
                "isDefaultAssertionErr":false,
                "parsedStack":[
                    {
                        "message":"AssertionError: Timed out retrying after 4000ms: expected '<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>' to be 'disabled'",
                        "whitespace":""
                    },
                    {
                        "function":"Context.eval",
                        "fileUrl":"https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature",
                        "originalFile":"cypress/steps/overloop-steps.js",
                        "relativeFile":"cypress/steps/overloop-steps.js",
                        "absoluteFile":"/Users/kalli.kavasi/overloop-framework/cypress-poc/cypress/steps/overloop-steps.js",
                        "line":35,
                        "column":24,
                        "whitespace":"    "
                    },
                    {
                        "function":"Registry.runStepDefininition",
                        "fileUrl":"https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature",
                        "originalFile":"node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js",
                        "relativeFile":"node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js",
                        "absoluteFile":"/Users/kalli.kavasi/overloop-framework/cypress-poc/node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js",
                        "line":119,
                        "column":0,
                        "whitespace":"    "
                    },
                    {
                        "function":"Object.fn",
                        "fileUrl":"https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature",
                        "originalFile":"node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js",
                        "relativeFile":"node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js",
                        "absoluteFile":"/Users/kalli.kavasi/overloop-framework/cypress-poc/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js",
                        "line":299,
                        "column":0,
                        "whitespace":"    "
                    },
                    {
                        "function":"runStepWithLogGroup",
                        "fileUrl":"https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature",
                        "originalFile":"node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js",
                        "relativeFile":"node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js",
                        "absoluteFile":"/Users/kalli.kavasi/overloop-framework/cypress-poc/node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js",
                        "line":11,
                        "column":0,
                        "whitespace":"    "
                    },
                    {
                        "function":"Context.eval",
                        "fileUrl":"https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature",
                        "originalFile":"node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js",
                        "relativeFile":"node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js",
                        "absoluteFile":"/Users/kalli.kavasi/overloop-framework/cypress-poc/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js",
                        "line":296,
                        "column":0,
                        "whitespace":"    "
                    }
                ],
                "codeFrame":{
                    "line":35,
                    "column":25,
                    "originalFile":"cypress/steps/overloop-steps.js",
                    "relativeFile":"cypress/steps/overloop-steps.js",
                    "absoluteFile":"/Users/kalli.kavasi/overloop-framework/cypress-poc/cypress/steps/overloop-steps.js",
                    "frame":"  33 | Then(/Validation error for missing fields occurs/, () => {\n  34 |   cy.get(\".field-error\").should(\"be.visible\");\n> 35 |   cy.contains(\"Submit\").should(\"be.disabled\");\n     |                         ^\n  36 | });\n  37 | \n  38 | Then(/I can see the content/, () => {",
                    "language":"js"
                },
                "hasFailed":true,
                "stack":"AssertionError: Timed out retrying after 4000ms: expected '<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>' to be 'disabled'\n    at Context.eval (cypress/steps/overloop-steps.js:35:24)\n    at Registry.runStepDefininition (node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js:119:0)\n    at Object.fn (node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js:299:0)\n    at runStepWithLogGroup (node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js:11:0)\n    at Context.eval (node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js:296:0)"
            },
            "name":"assert",
            "message":"expected **<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>** to be **disabled**",
            "passed":false,
            "timeout":0,
            "type":"child",
            "event":false,
            "id":"log-https://www.overloop.io-66",
            "state":"failed",
            "instrument":"command",
            "url":"https://www.overloop.io/contact-us",
            "wallClockStartedAt":"2023-02-07T15:22:54.075Z",
            "group":"log-https://www.overloop.io-29",
            "commandLogId":"0-2",
            "ended":true,
            "err":{
                "message":"Timed out retrying after 4000ms: expected '<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>' to be 'disabled'",
                "name":"AssertionError",
                "stack":"AssertionError: Timed out retrying after 4000ms: expected '<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>' to be 'disabled'\n    at Context.eval (cypress/steps/overloop-steps.js:35:24)\n    at Registry.runStepDefininition (node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js:119:0)\n    at Object.fn (node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js:299:0)\n    at runStepWithLogGroup (node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js:11:0)\n    at Context.eval (node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js:296:0)",
                "parsedStack":[
                    {
                        "message":"AssertionError: Timed out retrying after 4000ms: expected '<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>' to be 'disabled'",
                        "whitespace":""
                    },
                    {
                        "function":"Context.eval",
                        "fileUrl":"https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature",
                        "originalFile":"cypress/steps/overloop-steps.js",
                        "relativeFile":"cypress/steps/overloop-steps.js",
                        "absoluteFile":"/Users/kalli.kavasi/overloop-framework/cypress-poc/cypress/steps/overloop-steps.js",
                        "line":35,
                        "column":24,
                        "whitespace":"    "
                    },
                    {
                        "function":"Registry.runStepDefininition",
                        "fileUrl":"https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature",
                        "originalFile":"node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js",
                        "relativeFile":"node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js",
                        "absoluteFile":"/Users/kalli.kavasi/overloop-framework/cypress-poc/node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js",
                        "line":119,
                        "column":0,
                        "whitespace":"    "
                    },
                    {
                        "function":"Object.fn",
                        "fileUrl":"https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature",
                        "originalFile":"node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js",
                        "relativeFile":"node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js",
                        "absoluteFile":"/Users/kalli.kavasi/overloop-framework/cypress-poc/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js",
                        "line":299,
                        "column":0,
                        "whitespace":"    "
                    },
                    {
                        "function":"runStepWithLogGroup",
                        "fileUrl":"https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature",
                        "originalFile":"node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js",
                        "relativeFile":"node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js",
                        "absoluteFile":"/Users/kalli.kavasi/overloop-framework/cypress-poc/node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js",
                        "line":11,
                        "column":0,
                        "whitespace":"    "
                    },
                    {
                        "function":"Context.eval",
                        "fileUrl":"https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature",
                        "originalFile":"node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js",
                        "relativeFile":"node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js",
                        "absoluteFile":"/Users/kalli.kavasi/overloop-framework/cypress-poc/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js",
                        "line":296,
                        "column":0,
                        "whitespace":"    "
                    }
                ],
                "codeFrame":{
                    "line":35,
                    "column":25,
                    "originalFile":"cypress/steps/overloop-steps.js",
                    "relativeFile":"cypress/steps/overloop-steps.js",
                    "absoluteFile":"/Users/kalli.kavasi/overloop-framework/cypress-poc/cypress/steps/overloop-steps.js",
                    "frame":"  33 | Then(/Validation error for missing fields occurs/, () => {\n  34 |   cy.get(\".field-error\").should(\"be.visible\");\n> 35 |   cy.contains(\"Submit\").should(\"be.disabled\");\n     |                         ^\n  36 | });\n  37 | \n  38 | Then(/I can see the content/, () => {",
                    "language":"js"
                }
            }
        }
    }
];

export default steps
    .map((step) => {
        const wallClockStartedAt = new Date(Date.parse(step.options.wallClockStartedAt));
        return {
            ...step,
            options: {
                ...step.options,
                wallClockStartedAt
            }
        };
    })
    .sort((step1, step2) =>
        step1.options.wallClockStartedAt.getTime() - step2.options.wallClockStartedAt.getTime());
