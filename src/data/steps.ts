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
        "wallClockStartedAt": "2023-02-20T14:28:52.198Z",
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
        "wallClockStartedAt": "2023-02-20T14:28:52.515Z",
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
        "wallClockStartedAt": "2023-02-20T14:28:52.636Z",
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
        "wallClockStartedAt": "2023-02-20T14:28:52.648Z",
        "group": "log-https://www.overloop.io-3",
        "totalTime": 530,
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
        "wallClockStartedAt": "2023-02-20T14:28:54.996Z",
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
        "wallClockStartedAt": "2023-02-20T14:28:55.410Z",
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
        "wallClockStartedAt": "2023-02-20T14:28:55.418Z",
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
        "wallClockStartedAt": "2023-02-20T14:28:55.441Z",
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
        "wallClockStartedAt": "2023-02-20T14:28:55.718Z",
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
        "wallClockStartedAt": "2023-02-20T14:28:55.728Z",
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
        "wallClockStartedAt": "2023-02-20T14:28:55.977Z",
        "group": "log-https://www.overloop.io-11",
        "coords": {
          "top": 42,
          "left": 828.203125,
          "topCenter": 61,
          "leftCenter": 882,
          "x": 882,
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
        "wallClockStartedAt": "2023-02-20T14:28:56.318Z",
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
        "wallClockStartedAt": "2023-02-20T14:28:56.044Z",
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
        "wallClockStartedAt": "2023-02-20T14:28:56.741Z",
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
        "wallClockStartedAt": "2023-02-20T14:28:56.916Z",
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
        "wallClockStartedAt": "2023-02-20T14:28:56.921Z",
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
        "wallClockStartedAt": "2023-02-20T14:28:56.933Z",
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
        "wallClockStartedAt": "2023-02-20T14:28:57.102Z",
        "group": "log-https://www.overloop.io-24",
        "coords": {
          "top": 251,
          "left": 517.171875,
          "topCenter": 272,
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
        "wallClockStartedAt": "2023-02-20T14:28:57.369Z",
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
        "wallClockStartedAt": "2023-02-20T14:28:57.525Z",
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
        "wallClockStartedAt": "2023-02-20T14:28:57.534Z",
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
        "wallClockStartedAt": "2023-02-20T14:28:57.682Z",
        "group": "log-https://www.overloop.io-24",
        "coords": {
          "top": 251,
          "left": 730.84375,
          "topCenter": 272,
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
        "wallClockStartedAt": "2023-02-20T14:28:58.008Z",
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
        "wallClockStartedAt": "2023-02-20T14:28:58.159Z",
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
        "wallClockStartedAt": "2023-02-20T14:28:58.167Z",
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
        "wallClockStartedAt": "2023-02-20T14:28:58.313Z",
        "group": "log-https://www.overloop.io-24",
        "coords": {
          "top": 464,
          "left": 517,
          "topCenter": 485,
          "leftCenter": 726,
          "x": 726,
          "y": 486
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
        "wallClockStartedAt": "2023-02-20T14:28:58.670Z",
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
        "wallClockStartedAt": "2023-02-20T14:28:58.832Z",
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
        "wallClockStartedAt": "2023-02-20T14:28:58.842Z",
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
        "wallClockStartedAt": "2023-02-20T14:28:58.989Z",
        "group": "log-https://www.overloop.io-24",
        "coords": {
          "top": 790,
          "left": 517,
          "topCenter": 810,
          "leftCenter": 575,
          "x": 575,
          "y": 811
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
        "wallClockStartedAt": "2023-02-20T14:28:59.091Z",
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
        "id": "log-https://www.overloop.io-43",
        "state": "passed",
        "instrument": "command",
        "url": "https://www.overloop.io/contact-us",
        "wallClockStartedAt": "2023-02-20T14:28:59.265Z",
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
        "id": "log-https://www.overloop.io-44",
        "state": "passed",
        "instrument": "command",
        "url": "https://www.overloop.io/contact-us",
        "wallClockStartedAt": "2023-02-20T14:28:59.269Z",
        "group": "log-https://www.overloop.io-43",
        "numRetries": 17,
        "ended": true
      }
    },
    {
      "options": {
        "message": "getSnapShot, www.overloop.io-138",
        "timeout": 60000,
        "name": "task",
        "type": "parent",
        "event": false,
        "id": "log-https://www.overloop.io-80",
        "state": "passed",
        "instrument": "command",
        "url": "https://www.overloop.io/contact-us",
        "wallClockStartedAt": "2023-02-20T14:28:59.638Z",
        "group": "log-https://www.overloop.io-43",
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
        "id": "log-https://www.overloop.io-81",
        "state": "passed",
        "instrument": "command",
        "url": "https://www.overloop.io/contact-us",
        "wallClockStartedAt": "2023-02-20T14:28:59.799Z",
        "group": "log-https://www.overloop.io-43",
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
        "id": "log-https://www.overloop.io-82",
        "state": "passed",
        "instrument": "command",
        "url": "https://www.overloop.io/contact-us",
        "wallClockStartedAt": "2023-02-20T14:28:59.813Z",
        "group": "log-https://www.overloop.io-43",
        "ended": true
      }
    },
    {
      "options": {
        "message": "getSnapShot, www.overloop.io-143",
        "timeout": 60000,
        "name": "task",
        "type": "parent",
        "event": false,
        "id": "log-https://www.overloop.io-83",
        "state": "passed",
        "instrument": "command",
        "url": "https://www.overloop.io/contact-us",
        "wallClockStartedAt": "2023-02-20T14:28:59.823Z",
        "group": "log-https://www.overloop.io-43",
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
        "id": "log-https://www.overloop.io-84",
        "state": "failed",
        "instrument": "command",
        "url": "https://www.overloop.io/contact-us",
        "wallClockStartedAt": "2023-02-20T14:28:59.982Z",
        "group": "log-https://www.overloop.io-43",
        "commandLogId": "-1-2",
        "ended": true,
        "err": {
          "message": "expected '<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>' to be 'disabled'",
          "name": "AssertionError",
          "stack": "AssertionError: expected '<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>' to be 'disabled'\n    at Context.eval (cypress/steps/overloop-steps.js:35:24)\n    at Registry.runStepDefininition (node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js:119:0)\n    at Object.fn (node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js:299:0)\n    at runStepWithLogGroup (node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js:11:0)\n    at Context.eval (node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js:296:0)",
          "parsedStack": [
            {
              "message": "AssertionError: expected '<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>' to be 'disabled'",
              "whitespace": ""
            },
            {
              "function": "Context.eval",
              "fileUrl": "https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature",
              "originalFile": "cypress/steps/overloop-steps.js",
              "relativeFile": "cypress/steps/overloop-steps.js",
              "absoluteFile": "/Users/kalli.kavasi/overloop-framework/cypress-poc/cypress/steps/overloop-steps.js",
              "line": 35,
              "column": 24,
              "whitespace": "    "
            },
            {
              "function": "Registry.runStepDefininition",
              "fileUrl": "https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature",
              "originalFile": "node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js",
              "relativeFile": "node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js",
              "absoluteFile": "/Users/kalli.kavasi/overloop-framework/cypress-poc/node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js",
              "line": 119,
              "column": 0,
              "whitespace": "    "
            },
            {
              "function": "Object.fn",
              "fileUrl": "https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature",
              "originalFile": "node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js",
              "relativeFile": "node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js",
              "absoluteFile": "/Users/kalli.kavasi/overloop-framework/cypress-poc/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js",
              "line": 299,
              "column": 0,
              "whitespace": "    "
            },
            {
              "function": "runStepWithLogGroup",
              "fileUrl": "https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature",
              "originalFile": "node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js",
              "relativeFile": "node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js",
              "absoluteFile": "/Users/kalli.kavasi/overloop-framework/cypress-poc/node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js",
              "line": 11,
              "column": 0,
              "whitespace": "    "
            },
            {
              "function": "Context.eval",
              "fileUrl": "https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature",
              "originalFile": "node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js",
              "relativeFile": "node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js",
              "absoluteFile": "/Users/kalli.kavasi/overloop-framework/cypress-poc/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js",
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
            "absoluteFile": "/Users/kalli.kavasi/overloop-framework/cypress-poc/cypress/steps/overloop-steps.js",
            "frame": "  33 | Then(/Validation error for missing fields occurs/, () => {\n  34 |   cy.get(\".field-error\").should(\"be.visible\");\n> 35 |   cy.contains(\"Submit\").should(\"be.disabled\");\n     |                         ^\n  36 | });\n  37 | \n  38 | Then(/I can see the content/, () => {",
            "language": "js"
          }
        }
      }
    }
  ]  

export default steps;
