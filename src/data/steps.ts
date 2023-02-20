// 20230215
// https://raw.githubusercontent.com/overloop-io/overloop-testing-framework/master/test-data/cypress/out.json?token=GHSAT0AAAAAAB6GM6DARSB6Y6BUATX6ALHMY63UYHQ

const steps = [
    {
        "options": {
            "message": "connect",
            "timeout": 60000,
            "name": "task",
            "type": "parent",
            "event": false,
            "id": "log-https://www.overloop.io-1",
            "state": "passed",
            "instrument": "command",
            "url": "",
            "wallClockStartedAt": "2023-02-15T15:34:16.215Z",
            "ended": true
        }
    },
    {
        "options": {
            "timeout": 100,
            "name": "wait",
            "type": "parent",
            "event": false,
            "message": "100",
            "id": "log-https://www.overloop.io-2",
            "state": "passed",
            "instrument": "command",
            "url": "",
            "wallClockStartedAt": "2023-02-15T15:34:16.710Z",
            "ended": true
        }
    },
    {
        "options": {
            "name": "Given ",
            "message": "**I visit overloop's website**",
            "groupStart": true,
            "type": "parent",
            "timeout": 4000,
            "event": false,
            "id": "log-https://www.overloop.io-3",
            "state": "passed",
            "instrument": "command",
            "url": "",
            "wallClockStartedAt": "2023-02-15T15:34:16.870Z",
            "ended": true
        }
    },
    {
        "options": {
            "message": "https://overloop.io/ -> 301: https://www.overloop.io/",
            "timeout": 60000,
            "name": "visit",
            "type": "parent",
            "event": false,
            "id": "log-https://www.overloop.io-4",
            "state": "passed",
            "instrument": "command",
            "url": "https://overloop.io/",
            "wallClockStartedAt": "2023-02-15T15:34:16.896Z",
            "group": "log-https://www.overloop.io-3",
            "totalTime": 399,
            "ended": true
        }
    },
    {
        "options": {
            "message": "getSnapShot, www.overloop.io-29",
            "timeout": 60000,
            "name": "task",
            "type": "parent",
            "event": false,
            "id": "log-https://www.overloop.io-9",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-15T15:34:22.698Z",
            "group": "log-https://www.overloop.io-3",
            "ended": true
        }
    },
    {
        "options": {
            "name": "When ",
            "message": "**I navigate to contact page**",
            "groupStart": true,
            "type": "parent",
            "timeout": 4000,
            "event": false,
            "id": "log-https://www.overloop.io-11",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-15T15:34:23.141Z",
            "ended": true
        }
    },
    {
        "options": {
            "message": ".Header-nav-item",
            "aliasType": "dom",
            "timeout": 4000,
            "name": "get",
            "type": "parent",
            "event": false,
            "id": "log-https://www.overloop.io-12",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-15T15:34:23.154Z",
            "group": "log-https://www.overloop.io-11",
            "ended": true
        }
    },
    {
        "options": {
            "message": "getSnapShot, www.overloop.io-45",
            "timeout": 60000,
            "name": "task",
            "type": "parent",
            "event": false,
            "id": "log-https://www.overloop.io-13",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-15T15:34:23.179Z",
            "group": "log-https://www.overloop.io-11",
            "ended": true
        }
    },
    {
        "options": {
            "message": "Contact",
            "type": "child",
            "timeout": 4000,
            "name": "contains",
            "event": false,
            "id": "log-https://www.overloop.io-14",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-15T15:34:23.533Z",
            "group": "log-https://www.overloop.io-11",
            "ended": true
        }
    },
    {
        "options": {
            "message": "getSnapShot, www.overloop.io-48",
            "timeout": 60000,
            "name": "task",
            "type": "parent",
            "event": false,
            "id": "log-https://www.overloop.io-15",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-15T15:34:23.633Z",
            "group": "log-https://www.overloop.io-11",
            "ended": true
        }
    },
    {
        "options": {
            "message": "",
            "timeout": 4000,
            "name": "click",
            "type": "child",
            "event": false,
            "id": "log-https://www.overloop.io-16",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-15T15:34:23.956Z",
            "group": "log-https://www.overloop.io-11",
            "coords": {
                "top": 42,
                "left": 827.796875,
                "topCenter": 61,
                "leftCenter": 881,
                "x": 881,
                "y": 62
            },
            "ended": true
        }
    },
    {
        "options": {
            "name": "new url",
            "message": "https://www.overloop.io/contact-us",
            "event": true,
            "type": "parent",
            "end": true,
            "snapshot": true,
            "timeout": 4000,
            "id": "log-https://www.overloop.io-18",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/contact-us",
            "wallClockStartedAt": "2023-02-15T15:34:24.214Z",
            "group": "log-https://www.overloop.io-11",
            "ended": true
        }
    },
    {
        "options": {
            "type": "parent",
            "name": "page load",
            "message": "--page loaded--",
            "event": true,
            "timeout": 60000,
            "id": "log-https://www.overloop.io-17",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-15T15:34:24.054Z",
            "group": "log-https://www.overloop.io-11",
            "ended": true
        }
    },
    {
        "options": {
            "message": "getSnapShot, www.overloop.io-51",
            "timeout": 60000,
            "name": "task",
            "type": "parent",
            "event": false,
            "id": "log-https://www.overloop.io-22",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/contact-us",
            "wallClockStartedAt": "2023-02-15T15:34:25.891Z",
            "group": "log-https://www.overloop.io-11",
            "ended": true
        }
    },
    {
        "options": {
            "name": "And ",
            "message": "**I fill in contact form details**",
            "groupStart": true,
            "type": "parent",
            "timeout": 4000,
            "event": false,
            "id": "log-https://www.overloop.io-24",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/contact-us",
            "wallClockStartedAt": "2023-02-15T15:34:26.199Z",
            "ended": true
        }
    },
    {
        "options": {
            "message": "input[name=\"fname\"]",
            "aliasType": "dom",
            "timeout": 4000,
            "name": "get",
            "type": "parent",
            "event": false,
            "id": "log-https://www.overloop.io-25",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/contact-us",
            "wallClockStartedAt": "2023-02-15T15:34:26.205Z",
            "group": "log-https://www.overloop.io-24",
            "ended": true
        }
    },
    {
        "options": {
            "message": "getSnapShot, www.overloop.io-66",
            "timeout": 60000,
            "name": "task",
            "type": "parent",
            "event": false,
            "id": "log-https://www.overloop.io-26",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/contact-us",
            "wallClockStartedAt": "2023-02-15T15:34:26.216Z",
            "group": "log-https://www.overloop.io-24",
            "ended": true
        }
    },
    {
        "options": {
            "message": "testName",
            "timeout": 4000,
            "name": "type",
            "type": "child",
            "event": false,
            "id": "log-https://www.overloop.io-27",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/contact-us",
            "wallClockStartedAt": "2023-02-15T15:34:26.437Z",
            "group": "log-https://www.overloop.io-24",
            "coords": {
                "top": 251,
                "left": 517.171875,
                "topCenter": 273,
                "leftCenter": 619,
                "x": 619,
                "y": 273
            },
            "ended": true
        }
    },
    {
        "options": {
            "message": "getSnapShot, www.overloop.io-69",
            "timeout": 60000,
            "name": "task",
            "type": "parent",
            "event": false,
            "id": "log-https://www.overloop.io-28",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/contact-us",
            "wallClockStartedAt": "2023-02-15T15:34:26.724Z",
            "group": "log-https://www.overloop.io-24",
            "ended": true
        }
    },
    {
        "options": {
            "message": "input[name=\"lname\"]",
            "aliasType": "dom",
            "timeout": 4000,
            "name": "get",
            "type": "parent",
            "event": false,
            "id": "log-https://www.overloop.io-29",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/contact-us",
            "wallClockStartedAt": "2023-02-15T15:34:27.007Z",
            "group": "log-https://www.overloop.io-24",
            "ended": true
        }
    },
    {
        "options": {
            "message": "getSnapShot, www.overloop.io-73",
            "timeout": 60000,
            "name": "task",
            "type": "parent",
            "event": false,
            "id": "log-https://www.overloop.io-30",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/contact-us",
            "wallClockStartedAt": "2023-02-15T15:34:27.050Z",
            "group": "log-https://www.overloop.io-24",
            "ended": true
        }
    },
    {
        "options": {
            "message": "testLastName",
            "timeout": 4000,
            "name": "type",
            "type": "child",
            "event": false,
            "id": "log-https://www.overloop.io-31",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/contact-us",
            "wallClockStartedAt": "2023-02-15T15:34:27.282Z",
            "group": "log-https://www.overloop.io-24",
            "coords": {
                "top": 251,
                "left": 730.84375,
                "topCenter": 273,
                "leftCenter": 833,
                "x": 833,
                "y": 273
            },
            "ended": true
        }
    },
    {
        "options": {
            "message": "getSnapShot, www.overloop.io-76",
            "timeout": 60000,
            "name": "task",
            "type": "parent",
            "event": false,
            "id": "log-https://www.overloop.io-32",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/contact-us",
            "wallClockStartedAt": "2023-02-15T15:34:27.623Z",
            "group": "log-https://www.overloop.io-24",
            "ended": true
        }
    },
    {
        "options": {
            "message": "input[name=\"email\"]",
            "aliasType": "dom",
            "timeout": 4000,
            "name": "get",
            "type": "parent",
            "event": false,
            "id": "log-https://www.overloop.io-33",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/contact-us",
            "wallClockStartedAt": "2023-02-15T15:34:27.812Z",
            "group": "log-https://www.overloop.io-24",
            "ended": true
        }
    },
    {
        "options": {
            "message": "getSnapShot, www.overloop.io-80",
            "timeout": 60000,
            "name": "task",
            "type": "parent",
            "event": false,
            "id": "log-https://www.overloop.io-34",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/contact-us",
            "wallClockStartedAt": "2023-02-15T15:34:27.821Z",
            "group": "log-https://www.overloop.io-24",
            "ended": true
        }
    },
    {
        "options": {
            "message": "email@gmail.com",
            "timeout": 4000,
            "name": "type",
            "type": "child",
            "event": false,
            "id": "log-https://www.overloop.io-35",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/contact-us",
            "wallClockStartedAt": "2023-02-15T15:34:28.024Z",
            "group": "log-https://www.overloop.io-24",
            "coords": {
                "top": 466,
                "left": 517,
                "topCenter": 488,
                "leftCenter": 726,
                "x": 726,
                "y": 488
            },
            "ended": true
        }
    },
    {
        "options": {
            "message": "getSnapShot, www.overloop.io-83",
            "timeout": 60000,
            "name": "task",
            "type": "parent",
            "event": false,
            "id": "log-https://www.overloop.io-36",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/contact-us",
            "wallClockStartedAt": "2023-02-15T15:34:28.385Z",
            "group": "log-https://www.overloop.io-24",
            "ended": true
        }
    },
    {
        "options": {
            "message": "Submit",
            "type": "parent",
            "timeout": 4000,
            "name": "contains",
            "event": false,
            "id": "log-https://www.overloop.io-37",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/contact-us",
            "wallClockStartedAt": "2023-02-15T15:34:28.591Z",
            "group": "log-https://www.overloop.io-24",
            "ended": true
        }
    },
    {
        "options": {
            "message": "getSnapShot, www.overloop.io-87",
            "timeout": 60000,
            "name": "task",
            "type": "parent",
            "event": false,
            "id": "log-https://www.overloop.io-38",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/contact-us",
            "wallClockStartedAt": "2023-02-15T15:34:28.603Z",
            "group": "log-https://www.overloop.io-24",
            "ended": true
        }
    },
    {
        "options": {
            "message": "",
            "timeout": 4000,
            "name": "click",
            "type": "child",
            "event": false,
            "id": "log-https://www.overloop.io-39",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/contact-us",
            "wallClockStartedAt": "2023-02-15T15:34:28.887Z",
            "group": "log-https://www.overloop.io-24",
            "coords": {
                "top": 794,
                "left": 517,
                "topCenter": 814,
                "leftCenter": 576,
                "x": 576,
                "y": 815
            },
            "ended": true
        }
    },
    {
        "options": {
            "message": "getSnapShot, www.overloop.io-90",
            "timeout": 60000,
            "name": "task",
            "type": "parent",
            "event": false,
            "id": "log-https://www.overloop.io-41",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/contact-us",
            "wallClockStartedAt": "2023-02-15T15:34:29.046Z",
            "group": "log-https://www.overloop.io-24",
            "ended": true
        }
    },
    {
        "options": {
            "name": "Then ",
            "message": "**Validation error for missing fields occurs**",
            "groupStart": true,
            "type": "parent",
            "timeout": 4000,
            "event": false,
            "id": "log-https://www.overloop.io-44",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/contact-us",
            "wallClockStartedAt": "2023-02-15T15:34:29.354Z",
            "ended": true
        }
    },
    {
        "options": {
            "message": ".field-error",
            "aliasType": "dom",
            "timeout": 4000,
            "name": "get",
            "type": "parent",
            "event": false,
            "id": "log-https://www.overloop.io-45",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/contact-us",
            "wallClockStartedAt": "2023-02-15T15:34:29.407Z",
            "group": "log-https://www.overloop.io-44",
            "numRetries": 4,
            "ended": true
        }
    },
    {
        "options": {
            "message": "getSnapShot, www.overloop.io-139",
            "timeout": 60000,
            "name": "task",
            "type": "parent",
            "event": false,
            "id": "log-https://www.overloop.io-54",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/contact-us",
            "wallClockStartedAt": "2023-02-15T15:34:29.574Z",
            "group": "log-https://www.overloop.io-44",
            "ended": true
        }
    },
    {
        "options": {
            "end": true,
            "snapshot": true,
            "name": "assert",
            "message": "expected **[ <div.field-error>, 3 more... ]** to be **visible**",
            "passed": true,
            "timeout": 0,
            "type": "child",
            "event": false,
            "id": "log-https://www.overloop.io-55",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/contact-us",
            "wallClockStartedAt": "2023-02-15T15:34:29.814Z",
            "group": "log-https://www.overloop.io-44",
            "commandLogId": "-1-2",
            "ended": true
        }
    },
    {
        "options": {
            "message": "Submit",
            "type": "parent",
            "timeout": 4000,
            "name": "contains",
            "event": false,
            "id": "log-https://www.overloop.io-56",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/contact-us",
            "wallClockStartedAt": "2023-02-15T15:34:29.833Z",
            "group": "log-https://www.overloop.io-44",
            "ended": true
        }
    },
    {
        "options": {
            "message": "getSnapShot, www.overloop.io-144",
            "timeout": 60000,
            "name": "task",
            "type": "parent",
            "event": false,
            "id": "log-https://www.overloop.io-57",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/contact-us",
            "wallClockStartedAt": "2023-02-15T15:34:29.854Z",
            "group": "log-https://www.overloop.io-44",
            "ended": true
        }
    },
    {
        "options": {
            "end": true,
            "snapshot": true,
            "name": "assert",
            "message": "expected **<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>** to be **disabled**",
            "passed": false,
            "timeout": 0,
            "type": "child",
            "event": false,
            "id": "log-https://www.overloop.io-58",
            "state": "failed",
            "instrument": "command",
            "url": "https://www.overloop.io/contact-us",
            "wallClockStartedAt": "2023-02-15T15:34:30.070Z",
            "group": "log-https://www.overloop.io-44",
            "commandLogId": "-1-2",
            "ended": true,
            "err": {
                "message": "expected '<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>' to be 'disabled'",
                "name": "AssertionError",
                "stack": "AssertionError: expected '<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>' to be 'disabled'\n    at Context.eval (cypress/steps/overloop-steps.js:35:24)\n    at Registry.runStepDefininition (../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js:119:0)\n    at Object.fn (../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js:299:0)\n    at runStepWithLogGroup (../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js:11:0)\n    at Context.eval (../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js:296:0)",
                "parsedStack": [
                    {
                        "message": "AssertionError: expected '<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>' to be 'disabled'",
                        "whitespace": ""
                    },
                    {
                        "function": "Context.eval",
                        "fileUrl": "https://www.overloop.io/__cypress/tests?p=cypress/e2e/parsed/cypress/e2e/Check_overloop's_website-Contact_page.feature",
                        "originalFile": "cypress/steps/overloop-steps.js",
                        "relativeFile": "cypress/steps/overloop-steps.js",
                        "absoluteFile": "/tmp/cypress/cypress/steps/overloop-steps.js",
                        "line": 35,
                        "column": 24,
                        "whitespace": "    "
                    },
                    {
                        "function": "Registry.runStepDefininition",
                        "fileUrl": "https://www.overloop.io/__cypress/tests?p=cypress/e2e/parsed/cypress/e2e/Check_overloop's_website-Contact_page.feature",
                        "originalFile": "../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js",
                        "relativeFile": "../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js",
                        "absoluteFile": "/var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js",
                        "line": 119,
                        "column": 0,
                        "whitespace": "    "
                    },
                    {
                        "function": "Object.fn",
                        "fileUrl": "https://www.overloop.io/__cypress/tests?p=cypress/e2e/parsed/cypress/e2e/Check_overloop's_website-Contact_page.feature",
                        "originalFile": "../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js",
                        "relativeFile": "../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js",
                        "absoluteFile": "/var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js",
                        "line": 299,
                        "column": 0,
                        "whitespace": "    "
                    },
                    {
                        "function": "runStepWithLogGroup",
                        "fileUrl": "https://www.overloop.io/__cypress/tests?p=cypress/e2e/parsed/cypress/e2e/Check_overloop's_website-Contact_page.feature",
                        "originalFile": "../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js",
                        "relativeFile": "../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js",
                        "absoluteFile": "/var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js",
                        "line": 11,
                        "column": 0,
                        "whitespace": "    "
                    },
                    {
                        "function": "Context.eval",
                        "fileUrl": "https://www.overloop.io/__cypress/tests?p=cypress/e2e/parsed/cypress/e2e/Check_overloop's_website-Contact_page.feature",
                        "originalFile": "../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js",
                        "relativeFile": "../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js",
                        "absoluteFile": "/var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js",
                        "line": 296,
                        "column": 0,
                        "whitespace": "    "
                    }
                ],
                "codeFrame": {
                    "line": 35,
                    "column": 25,
                    "originalFile": "cypress/steps/overloop-steps.js",
                    "relativeFile": "cypress/steps/overloop-steps.js",
                    "absoluteFile": "/tmp/cypress/cypress/steps/overloop-steps.js",
                    "frame": "  33 | Then(/Validation error for missing fields occurs/, () => {\n  34 |   cy.get(\".field-error\").should(\"be.visible\");\n> 35 |   cy.contains(\"Submit\").should(\"be.disabled\");\n     |                         ^\n  36 | });\n  37 | \n  38 | Then(/I can see the content/, () => {",
                    "language": "js"
                }
            }
        }
    }
]

export default steps;
