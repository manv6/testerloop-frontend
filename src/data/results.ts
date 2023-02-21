/**
* Lifted from https://github.com/overloop-io/overloop-testing-framework/blob/master/test-data/cypress/results.json
*/

const results = {
    "status": "finished",
    "startedTestsAt": "2023-02-20T14:28:47.916Z",
    "endedTestsAt": "2023-02-20T14:29:00.197Z",
    "totalDuration": 12281,
    "totalSuites": 2,
    "totalTests": 1,
    "totalPassed": 0,
    "totalPending": 0,
    "totalFailed": 1,
    "totalSkipped": 0,
    "runs": [
      {
        "stats": {
          "suites": 2,
          "tests": 1,
          "passes": 0,
          "pending": 0,
          "skipped": 0,
          "failures": 1,
          "duration": 12281,
          "startedAt": "2023-02-20T14:28:47.916Z",
          "endedAt": "2023-02-20T14:29:00.197Z"
        },
        "reporter": "spec",
        "reporterStats": {
          "suites": 2,
          "tests": 1,
          "passes": 0,
          "pending": 0,
          "failures": 1,
          "start": "2023-02-20T14:28:47.918Z",
          "end": "2023-02-20T14:29:00.203Z",
          "duration": 12285
        },
        "hooks": [
          {
            "hookName": "before all",
            "title": ["\"before all\" hook"],
            "body": "function () {\n  cy.connectToCDP().wait(100);\n}"
          },
          {
            "hookName": "before all",
            "title": ["\"before all\" hook"],
            "body": "function () {\n        var _a;\n        if (!((_a = retrieveInternalSuiteProperties()) === null || _a === void 0 ? void 0 : _a.isEventHandlersAttached)) {\n            (0, assertions_1.fail)(\"Missing preprocessor event handlers (this usally means you've not invoked `addCucumberPreprocessorPlugin()` or not returned the config object in `setupNodeEvents()`)\");\n        }\n    }"
          },
          {
            "hookName": "after each",
            "title": ["\"after each\" hook"],
            "body": "function () {\n        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;\n        (0, registry_1.freeRegistry)();\n        const properties = retrieveInternalSpecProperties();\n        const { testCaseStartedId, remainingSteps } = properties;\n        const endTimestamp = (0, messages_helpers_1.createTimestamp)();\n        if (remainingSteps.length > 0 &&\n            ((_a = this.currentTest) === null || _a === void 0 ? void 0 : _a.state) !== \"pending\") {\n            const error = (0, assertions_1.assertAndReturn)((_c = (_b = this.currentTest) === null || _b === void 0 ? void 0 : _b.err) === null || _c === void 0 ? void 0 : _c.message, \"Expected to find an error message\");\n            if (constants_1.HOOK_FAILURE_EXPR.test(error)) {\n                return;\n            }\n            const failedStep = (0, assertions_1.assertAndReturn)(remainingSteps.shift(), \"Expected there to be a remaining step\");\n            const testStepId = (0, assertions_1.assertAndReturn)((_e = (_d = failedStep.hook) === null || _d === void 0 ? void 0 : _d.id) !== null && _e !== void 0 ? _e : (_f = failedStep.pickleStep) === null || _f === void 0 ? void 0 : _f.id, \"Expected a step to either be a hook or a pickleStep\");\n            const failedTestStepFinished = error.includes(\"Step implementation missing\")\n                ? {\n                    testStepFinished: {\n                        testStepId,\n                        testCaseStartedId,\n                        testStepResult: {\n                            status: Status.Undefined,\n                            duration: {\n                                seconds: 0,\n                                nanos: 0,\n                            },\n                        },\n                        timestamp: endTimestamp,\n                    },\n                }\n                : {\n                    testStepFinished: {\n                        testStepId,\n                        testCaseStartedId,\n                        testStepResult: {\n                            status: Status.Failed,\n                            message: (_h = (_g = this.currentTest) === null || _g === void 0 ? void 0 : _g.err) === null || _h === void 0 ? void 0 : _h.message,\n                            // TODO: Create a proper duration from when the step started.\n                            duration: {\n                                seconds: 0,\n                                nanos: 0,\n                            },\n                        },\n                        timestamp: endTimestamp,\n                    },\n                };\n            messages.push(failedTestStepFinished);\n            for (const skippedStep of remainingSteps) {\n                const testStepId = (0, assertions_1.assertAndReturn)((_k = (_j = skippedStep.hook) === null || _j === void 0 ? void 0 : _j.id) !== null && _k !== void 0 ? _k : (_l = skippedStep.pickleStep) === null || _l === void 0 ? void 0 : _l.id, \"Expected a step to either be a hook or a pickleStep\");\n                messages.push({\n                    testStepStarted: {\n                        testStepId,\n                        testCaseStartedId,\n                        timestamp: endTimestamp,\n                    },\n                });\n                messages.push({\n                    testStepFinished: {\n                        testStepId,\n                        testCaseStartedId,\n                        testStepResult: {\n                            status: Status.Skipped,\n                            duration: {\n                                seconds: 0,\n                                nanos: 0,\n                            },\n                        },\n                        timestamp: endTimestamp,\n                    },\n                });\n            }\n        }\n        messages.push({\n            testCaseFinished: {\n                testCaseStartedId,\n                timestamp: endTimestamp,\n                willBeRetried: false,\n            },\n        });\n        /**\n         * Repopulate internal properties in case previous test is retried.\n         */\n        updateInternalSpecProperties({\n            testCaseStartedId: (0, uuid_1.v4)(),\n            remainingSteps: [...properties.allSteps],\n        });\n    }"
          },
          {
            "hookName": "after all",
            "title": ["\"after all\" hook"],
            "body": "function () {\n  cy.task(\"saveCypressOutput\", {\n    contents: cypressCommands,\n    fileName: \"cypress/out.json\"\n  });\n  cy.task(\"saveCypressOutput\", {\n    contents: snapshotMetaData,\n    fileName: \"snapshots/snapshot-metadata.json\"\n  });\n}"
          },
          {
            "hookName": "after all",
            "title": ["\"after all\" hook"],
            "body": "function () {\n        if (messagesEnabled) {\n            cy.task(constants_1.TASK_APPEND_MESSAGES, messages, { log: false });\n        }\n    }"
          }
        ],
        "tests": [
          {
            "title": ["Check overloop's website", "Verify", "Contact page"],
            "state": "failed",
            "body": "function () {\n        var _a, _b, _c, _d, _e;\n        const { remainingSteps, testCaseStartedId } = retrieveInternalSpecProperties();\n        (0, registry_1.assignRegistry)(registry);\n        messages.stack.push({\n            testCaseStarted: {\n                id: testCaseStartedId,\n                testCaseId,\n                attempt: attempt++,\n                timestamp: (0, messages_helpers_1.createTimestamp)(),\n            },\n        });\n        window.testState = {\n            gherkinDocument,\n            pickles,\n            pickle,\n        };\n        for (const step of steps) {\n            if (step.hook) {\n                const hook = step.hook;\n                cy.then(() => {\n                    delete window.testState.pickleStep;\n                    const start = (0, messages_helpers_1.createTimestamp)();\n                    messages.stack.push({\n                        testStepStarted: {\n                            testStepId: hook.id,\n                            testCaseStartedId,\n                            timestamp: start,\n                        },\n                    });\n                    if (messages.enabled) {\n                        cy.task(constants_1.TASK_TEST_STEP_STARTED, hook.id, { log: false });\n                    }\n                    return cy.wrap(start, { log: false });\n                })\n                    .then((start) => {\n                    (0, cypress_1.runStepWithLogGroup)({\n                        fn: () => registry.runHook(this, hook),\n                        keyword: hook.keyword,\n                    });\n                    return cy.wrap(start, { log: false });\n                })\n                    .then((start) => {\n                    const end = (0, messages_helpers_1.createTimestamp)();\n                    messages.stack.push({\n                        testStepFinished: {\n                            testStepId: hook.id,\n                            testCaseStartedId,\n                            testStepResult: {\n                                status: Status.Passed,\n                                duration: (0, messages_helpers_1.duration)(start, end),\n                            },\n                            timestamp: end,\n                        },\n                    });\n                    remainingSteps.shift();\n                });\n            }\n            else if (step.pickleStep) {\n                const pickleStep = step.pickleStep;\n                const text = (0, assertions_1.assertAndReturn)(pickleStep.text, \"Expected pickle step to have a text\");\n                const scenarioStep = (0, assertions_1.assertAndReturn)(astIdMap.get((0, assertions_1.assertAndReturn)((_a = pickleStep.astNodeIds) === null || _a === void 0 ? void 0 : _a[0], \"Expected to find at least one astNodeId\")), `Expected to find scenario step associated with id = ${(_b = pickleStep.astNodeIds) === null || _b === void 0 ? void 0 : _b[0]}`);\n                const argument = ((_c = pickleStep.argument) === null || _c === void 0 ? void 0 : _c.dataTable)\n                    ? new data_table_1.default(pickleStep.argument.dataTable)\n                    : ((_e = (_d = pickleStep.argument) === null || _d === void 0 ? void 0 : _d.docString) === null || _e === void 0 ? void 0 : _e.content)\n                        ? pickleStep.argument.docString.content\n                        : undefined;\n                cy.then(() => {\n                    window.testState.pickleStep = step.pickleStep;\n                    internalProperties.currentStep = { pickleStep };\n                    const start = (0, messages_helpers_1.createTimestamp)();\n                    messages.stack.push({\n                        testStepStarted: {\n                            testStepId: pickleStep.id,\n                            testCaseStartedId,\n                            timestamp: start,\n                        },\n                    });\n                    if (messages.enabled) {\n                        cy.task(constants_1.TASK_TEST_STEP_STARTED, pickleStep.id, { log: false });\n                    }\n                    return cy.wrap(start, { log: false });\n                })\n                    .then((start) => {\n                    try {\n                        return (0, cypress_1.runStepWithLogGroup)({\n                            keyword: (0, assertions_1.assertAndReturn)(\"keyword\" in scenarioStep && scenarioStep.keyword, \"Expected to find a keyword in the scenario step\"),\n                            text,\n                            fn: () => registry.runStepDefininition(this, text, argument),\n                        }).then((result) => {\n                            return {\n                                start,\n                                result,\n                            };\n                        });\n                    }\n                    catch (e) {\n                        if (e instanceof registry_1.MissingDefinitionError) {\n                            throw new Error(createMissingStepDefinitionMessage(context, pickleStep, context.registry.parameterTypeRegistry));\n                        }\n                        else {\n                            throw e;\n                        }\n                    }\n                })\n                    .then(({ start, result }) => {\n                    var _a, _b, _c;\n                    const end = (0, messages_helpers_1.createTimestamp)();\n                    if (result === \"pending\") {\n                        messages.stack.push({\n                            testStepFinished: {\n                                testStepId: pickleStep.id,\n                                testCaseStartedId,\n                                testStepResult: {\n                                    status: Status.Pending,\n                                    duration: (0, messages_helpers_1.duration)(start, end),\n                                },\n                                timestamp: end,\n                            },\n                        });\n                        remainingSteps.shift();\n                        for (const skippedStep of remainingSteps) {\n                            const testStepId = (0, assertions_1.assertAndReturn)((_b = (_a = skippedStep.hook) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : (_c = skippedStep.pickleStep) === null || _c === void 0 ? void 0 : _c.id, \"Expected a step to either be a hook or a pickleStep\");\n                            messages.stack.push({\n                                testStepStarted: {\n                                    testStepId,\n                                    testCaseStartedId,\n                                    timestamp: (0, messages_helpers_1.createTimestamp)(),\n                                },\n                            });\n                            messages.stack.push({\n                                testStepFinished: {\n                                    testStepId,\n                                    testCaseStartedId,\n                                    testStepResult: {\n                                        status: Status.Skipped,\n                                        duration: {\n                                            seconds: 0,\n                                            nanos: 0,\n                                        },\n                                    },\n                                    timestamp: (0, messages_helpers_1.createTimestamp)(),\n                                },\n                            });\n                        }\n                        for (let i = 0, count = remainingSteps.length; i < count; i++) {\n                            remainingSteps.pop();\n                        }\n                        this.skip();\n                    }\n                    else {\n                        messages.stack.push({\n                            testStepFinished: {\n                                testStepId: pickleStep.id,\n                                testCaseStartedId,\n                                testStepResult: {\n                                    status: Status.Passed,\n                                    duration: (0, messages_helpers_1.duration)(start, end),\n                                },\n                                timestamp: end,\n                            },\n                        });\n                        remainingSteps.shift();\n                    }\n                });\n            }\n        }\n    }",
            "displayError": "AssertionError: expected '<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>' to be 'disabled'\n    at Context.eval (cypress/steps/overloop-steps.js:35:24)\n    at Registry.runStepDefininition (node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js:119:0)\n    at Object.fn (node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js:299:0)\n    at runStepWithLogGroup (node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js:11:0)\n    at Context.eval (node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js:296:0)",
            "attempts": [
              {
                "state": "failed",
                "error": {
                  "name": "AssertionError",
                  "message": "expected '<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>' to be 'disabled'",
                  "stack": "    at Context.eval (cypress/steps/overloop-steps.js:35:24)\n    at Registry.runStepDefininition (node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js:119:0)\n    at Object.fn (node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js:299:0)\n    at runStepWithLogGroup (node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js:11:0)\n    at Context.eval (node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js:296:0)",
                  "codeFrame": {
                    "line": 35,
                    "column": 25,
                    "originalFile": "cypress/steps/overloop-steps.js",
                    "relativeFile": "cypress/steps/overloop-steps.js",
                    "absoluteFile": "/Users/kalli.kavasi/overloop-framework/cypress-poc/cypress/steps/overloop-steps.js",
                    "frame": "  33 | Then(/Validation error for missing fields occurs/, () => {\n  34 |   cy.get(\".field-error\").should(\"be.visible\");\n> 35 |   cy.contains(\"Submit\").should(\"be.disabled\");\n     |                         ^\n  36 | });\n  37 | \n  38 | Then(/I can see the content/, () => {",
                    "language": "js"
                  }
                },
                "videoTimestamp": null,
                "duration": 8033,
                "startedAt": "2023-02-20T14:28:52.129Z",
                "screenshots": [
                  {
                    "name": null,
                    "takenAt": "2023-02-20T14:28:59.995Z",
                    "path": "/Users/kalli.kavasi/overloop-framework/cypress-poc/cypress/screenshots/overloop.feature/Check overloop's website -- Verify -- Contact page (failed).png",
                    "height": 720,
                    "width": 1280
                  }
                ]
              }
            ]
          }
        ],
        "error": null,
        "video": null,
        "spec": {
          "fileExtension": ".feature",
          "baseName": "overloop.feature",
          "fileName": "overloop",
          "specFileExtension": ".feature",
          "relativeToCommonRoot": "overloop.feature",
          "specType": "integration",
          "name": "cypress/e2e/overloop.feature",
          "relative": "cypress/e2e/overloop.feature",
          "absolute": "/Users/kalli.kavasi/overloop-framework/cypress-poc/cypress/e2e/overloop.feature"
        },
        "shouldUploadVideo": true
      }
    ],
    "browserPath": "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "browserName": "chromium",
    "browserVersion": "112.0.5571.0",
    "osName": "darwin",
    "osVersion": "21.6.0",
    "cypressVersion": "10.10.0",
    "config": {
      "configFile": "/Users/kalli.kavasi/overloop-framework/cypress-poc/cypress.config.js",
      "env": {
        "__cypress_cucumber_preprocessor_dont_use_this_suite": {
          "isEventHandlersAttached": true
        }
      },
      "testingType": "e2e",
      "projectId": "u9ja7g",
      "video": false,
      "specPattern": "cypress/e2e/**/*.feature",
      "excludeSpecPattern": "*.js",
      "setupNodeEvents": "[Function setupNodeEvents]",
      "projectRoot": "/Users/kalli.kavasi/overloop-framework/cypress-poc",
      "projectName": "cypress-poc",
      "repoRoot": "/Users/kalli.kavasi/overloop-framework/cypress-poc",
      "rawJson": {
        "projectId": "u9ja7g",
        "video": false,
        "e2e": {
          "specPattern": "cypress/e2e/**/*.feature",
          "excludeSpecPattern": "*.js",
          "setupNodeEvents": "[Function setupNodeEvents]"
        },
        "specPattern": "cypress/e2e/**/*.feature",
        "excludeSpecPattern": "*.js",
        "setupNodeEvents": "[Function setupNodeEvents]",
        "envFile": {},
        "projectRoot": "/Users/kalli.kavasi/overloop-framework/cypress-poc",
        "projectName": "cypress-poc",
        "repoRoot": "/Users/kalli.kavasi/overloop-framework/cypress-poc"
      },
      "morgan": false,
      "isTextTerminal": true,
      "socketId": "xx92yf0uss",
      "report": true,
      "animationDistanceThreshold": 5,
      "arch": "x64",
      "baseUrl": null,
      "blockHosts": null,
      "chromeWebSecurity": true,
      "clientCertificates": [],
      "defaultCommandTimeout": 4000,
      "downloadsFolder": "/Users/kalli.kavasi/overloop-framework/cypress-poc/cypress/downloads",
      "execTimeout": 60000,
      "experimentalFetchPolyfill": false,
      "experimentalInteractiveRunEvents": false,
      "experimentalSessionAndOrigin": false,
      "experimentalModifyObstructiveThirdPartyCode": false,
      "experimentalSourceRewriting": false,
      "experimentalSingleTabRunMode": false,
      "experimentalStudio": false,
      "experimentalWebKitSupport": false,
      "fileServerFolder": "/Users/kalli.kavasi/overloop-framework/cypress-poc",
      "fixturesFolder": "/Users/kalli.kavasi/overloop-framework/cypress-poc/cypress/fixtures",
      "includeShadowDom": false,
      "keystrokeDelay": 0,
      "modifyObstructiveCode": true,
      "numTestsKeptInMemory": 0,
      "platform": "darwin",
      "pageLoadTimeout": 60000,
      "port": 50438,
      "redirectionLimit": 20,
      "reporter": "spec",
      "reporterOptions": null,
      "requestTimeout": 5000,
      "resolvedNodePath": "/Users/kalli.kavasi/.nvm/versions/node/v16.8.0/bin/node",
      "resolvedNodeVersion": "16.8.0",
      "responseTimeout": 30000,
      "retries": { "runMode": 0, "openMode": 0 },
      "screenshotOnRunFailure": true,
      "screenshotsFolder": "/Users/kalli.kavasi/overloop-framework/cypress-poc/cypress/screenshots",
      "slowTestThreshold": 10000,
      "scrollBehavior": "top",
      "supportFile": "/Users/kalli.kavasi/overloop-framework/cypress-poc/cypress/support/e2e.js",
      "supportFolder": "/Users/kalli.kavasi/overloop-framework/cypress-poc/cypress/support",
      "taskTimeout": 60000,
      "testIsolation": "legacy",
      "trashAssetsBeforeRuns": true,
      "userAgent": null,
      "videoCompression": 32,
      "videosFolder": "/Users/kalli.kavasi/overloop-framework/cypress-poc/cypress/videos",
      "videoUploadOnPasses": true,
      "viewportHeight": 660,
      "viewportWidth": 1000,
      "waitForAnimations": true,
      "watchForFileChanges": false,
      "additionalIgnorePattern": [],
      "autoOpen": false,
      "browsers": [
        {
          "name": "chrome",
          "family": "chromium",
          "channel": "stable",
          "displayName": "Chrome",
          "version": "110.0.5481.100",
          "path": "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
          "minSupportedVersion": 64,
          "majorVersion": "110"
        },
        {
          "name": "chromium",
          "family": "chromium",
          "channel": "stable",
          "displayName": "Chromium",
          "version": "112.0.5571.0",
          "path": "/Applications/Chromium.app/Contents/MacOS/Chromium",
          "minSupportedVersion": 64,
          "majorVersion": "112"
        },
        {
          "name": "electron",
          "channel": "stable",
          "family": "chromium",
          "displayName": "Electron",
          "version": "106.0.5249.51",
          "path": "",
          "majorVersion": 106
        }
      ],
      "clientRoute": "/__/",
      "cypressBinaryRoot": "/Users/kalli.kavasi/Library/Caches/Cypress/10.10.0/Cypress.app/Contents/Resources/app",
      "devServerPublicPathRoute": "/__cypress/src",
      "hosts": null,
      "isInteractive": true,
      "namespace": "__cypress",
      "reporterRoute": "/__cypress/reporter",
      "socketIoCookie": "__socket",
      "socketIoRoute": "/__socket",
      "version": "10.10.0",
      "xhrRoute": "/xhrs/",
      "cypressEnv": "production",
      "resolved": {
        "animationDistanceThreshold": { "value": 5, "from": "default" },
        "arch": { "value": "x64", "from": "default" },
        "baseUrl": { "value": null, "from": "default" },
        "blockHosts": { "value": null, "from": "default" },
        "chromeWebSecurity": { "value": true, "from": "default" },
        "clientCertificates": { "value": [], "from": "default" },
        "defaultCommandTimeout": { "value": 4000, "from": "default" },
        "downloadsFolder": { "value": "cypress/downloads", "from": "default" },
        "env": {
          "__cypress_cucumber_preprocessor_dont_use_this_suite": {
            "value": { "isEventHandlersAttached": true },
            "from": "plugin"
          }
        },
        "execTimeout": { "value": 60000, "from": "default" },
        "experimentalFetchPolyfill": { "value": false, "from": "default" },
        "experimentalInteractiveRunEvents": { "value": false, "from": "default" },
        "experimentalSessionAndOrigin": { "value": false, "from": "default" },
        "experimentalModifyObstructiveThirdPartyCode": {
          "value": false,
          "from": "default"
        },
        "experimentalSourceRewriting": { "value": false, "from": "default" },
        "experimentalSingleTabRunMode": { "value": false, "from": "default" },
        "experimentalStudio": { "value": false, "from": "default" },
        "experimentalWebKitSupport": { "value": false, "from": "default" },
        "fileServerFolder": { "value": "", "from": "default" },
        "fixturesFolder": { "value": "cypress/fixtures", "from": "default" },
        "excludeSpecPattern": { "value": "*.js", "from": "config" },
        "includeShadowDom": { "value": false, "from": "default" },
        "keystrokeDelay": { "value": 0, "from": "default" },
        "modifyObstructiveCode": { "value": true, "from": "default" },
        "nodeVersion": { "from": "default" },
        "numTestsKeptInMemory": { "value": 0, "from": "config" },
        "platform": { "value": "darwin", "from": "default" },
        "pageLoadTimeout": { "value": 60000, "from": "default" },
        "port": { "value": null, "from": "default" },
        "projectId": { "value": "u9ja7g", "from": "config" },
        "redirectionLimit": { "value": 20, "from": "default" },
        "reporter": { "value": "spec", "from": "default" },
        "reporterOptions": { "value": null, "from": "default" },
        "requestTimeout": { "value": 5000, "from": "default" },
        "resolvedNodePath": { "value": null, "from": "default" },
        "resolvedNodeVersion": { "value": null, "from": "default" },
        "responseTimeout": { "value": 30000, "from": "default" },
        "retries": {
          "value": { "runMode": 0, "openMode": 0 },
          "from": "default"
        },
        "screenshotOnRunFailure": { "value": true, "from": "default" },
        "screenshotsFolder": {
          "value": "cypress/screenshots",
          "from": "default"
        },
        "slowTestThreshold": { "value": 10000, "from": "default" },
        "scrollBehavior": { "value": "top", "from": "default" },
        "supportFile": {
          "value": "cypress/support/e2e.{js,jsx,ts,tsx}",
          "from": "default"
        },
        "supportFolder": { "value": false, "from": "default" },
        "taskTimeout": { "value": 60000, "from": "default" },
        "testIsolation": { "value": "legacy", "from": "default" },
        "trashAssetsBeforeRuns": { "value": true, "from": "default" },
        "userAgent": { "value": null, "from": "default" },
        "video": { "value": false, "from": "config" },
        "videoCompression": { "value": 32, "from": "default" },
        "videosFolder": { "value": "cypress/videos", "from": "default" },
        "videoUploadOnPasses": { "value": true, "from": "default" },
        "viewportHeight": { "value": 660, "from": "default" },
        "viewportWidth": { "value": 1000, "from": "default" },
        "waitForAnimations": { "value": true, "from": "default" },
        "watchForFileChanges": { "value": false, "from": "config" },
        "specPattern": { "value": "cypress/e2e/**/*.feature", "from": "config" },
        "browsers": {
          "value": [
            {
              "name": "chrome",
              "family": "chromium",
              "channel": "stable",
              "displayName": "Chrome",
              "version": "110.0.5481.100",
              "path": "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
              "minSupportedVersion": 64,
              "majorVersion": "110"
            },
            {
              "name": "chromium",
              "family": "chromium",
              "channel": "stable",
              "displayName": "Chromium",
              "version": "112.0.5571.0",
              "path": "/Applications/Chromium.app/Contents/MacOS/Chromium",
              "minSupportedVersion": 64,
              "majorVersion": "112",
              "isHeadless": true,
              "isHeaded": false
            },
            {
              "name": "electron",
              "channel": "stable",
              "family": "chromium",
              "displayName": "Electron",
              "version": "106.0.5249.51",
              "path": "",
              "majorVersion": 106
            }
          ],
          "from": "runtime"
        },
        "hosts": { "value": null, "from": "default" },
        "isInteractive": { "value": true, "from": "default" },
        "configFile": {
          "value": "/Users/kalli.kavasi/overloop-framework/cypress-poc/cypress.config.js",
          "from": "plugin"
        },
        "testingType": { "value": "e2e", "from": "plugin" }
      },
      "remote": {
        "origin": "http://localhost:50438",
        "strategy": "file",
        "fileServer": "http://localhost:50439",
        "domainName": "localhost",
        "props": null
      },
      "browser": null,
      "specs": [],
      "proxyUrl": "http://localhost:50438",
      "browserUrl": "http://localhost:50438/__/",
      "reporterUrl": "http://localhost:50438/__cypress/reporter",
      "xhrUrl": "__cypress/xhrs/",
      "proxyServer": "http://localhost:50438",
      "state": {}
    }
  }
  
export default results;
