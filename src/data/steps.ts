// 20230209
// https://raw.githubusercontent.com/overloop-io/overloop-testing-framework/master/test-data/cypress/out.json?token=GHSAT0AAAAAAB6GM6DARSB6Y6BUATX6ALHMY63UYHQ

const steps = [
    {
        "options": {
            "name": "Given ",
            "message": "**I visit overloop's website**",
            "groupStart": true,
            "type": "parent",
            "timeout": 4000,
            "event": false,
            "id": "log-https://www.overloop.io-1",
            "state": "passed",
            "instrument": "command",
            "url": "",
            "wallClockStartedAt": "2023-02-09T14:08:42.042Z",
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
            "id": "log-https://www.overloop.io-2",
            "state": "passed",
            "instrument": "command",
            "url": "https://overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:42.054Z",
            "group": "log-https://www.overloop.io-1",
            "totalTime": 530,
            "ended": true
        }
    },
    {
        "options": {
            "name": "When ",
            "message": "**I navigate to home page**",
            "groupStart": true,
            "type": "parent",
            "timeout": 4000,
            "event": false,
            "id": "log-https://www.overloop.io-8",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:44.469Z",
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
            "id": "log-https://www.overloop.io-9",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:44.477Z",
            "group": "log-https://www.overloop.io-8",
            "ended": true
        }
    },
    {
        "options": {
            "message": "Home",
            "type": "child",
            "timeout": 4000,
            "name": "contains",
            "event": false,
            "id": "log-https://www.overloop.io-10",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:44.504Z",
            "group": "log-https://www.overloop.io-8",
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
            "id": "log-https://www.overloop.io-11",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:44.518Z",
            "group": "log-https://www.overloop.io-8",
            "coords": {
                "top": 45,
                "left": 533.96875,
                "topCenter": 61,
                "leftCenter": 560,
                "x": 560,
                "y": 62
            },
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
            "id": "log-https://www.overloop.io-12",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:44.608Z",
            "group": "log-https://www.overloop.io-8",
            "ended": true
        }
    },
    {
        "options": {
            "name": "Then ",
            "message": "**I can see the content**",
            "groupStart": true,
            "type": "parent",
            "timeout": 4000,
            "event": false,
            "id": "log-https://www.overloop.io-18",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:46.343Z",
            "ended": true
        }
    },
    {
        "options": {
            "message": ".Site-inner",
            "aliasType": "dom",
            "timeout": 4000,
            "name": "get",
            "type": "parent",
            "event": false,
            "id": "log-https://www.overloop.io-19",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:46.347Z",
            "group": "log-https://www.overloop.io-18",
            "ended": true
        }
    },
    {
        "options": {
            "subject": {
                "0": {

                },
                "length": 1
            },
            "name": "assert",
            "message": "expected **<div#yui_3_17_2_1_1675951725856_79.Site-inner.Site-inner--index>** to be **visible**",
            "passed": true,
            "timeout": 0,
            "type": "child",
            "event": false,
            "id": "log-https://www.overloop.io-20",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:46.357Z",
            "group": "log-https://www.overloop.io-18",
            "commandLogId": "0-2",
            "ended": true
        }
    },
    {
        "options": {
            "message": ".Header",
            "aliasType": "dom",
            "timeout": 4000,
            "name": "get",
            "type": "parent",
            "event": false,
            "id": "log-https://www.overloop.io-21",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:46.368Z",
            "group": "log-https://www.overloop.io-18",
            "ended": true
        }
    },
    {
        "options": {
            "subject": {
                "0": {

                },
                "1": {

                },
                "length": 2
            },
            "name": "assert",
            "message": "expected **[ <header.Header.Header--top>, 1 more... ]** to be **visible**",
            "passed": true,
            "timeout": 0,
            "type": "child",
            "event": false,
            "id": "log-https://www.overloop.io-22",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:46.382Z",
            "group": "log-https://www.overloop.io-18",
            "commandLogId": "0-2",
            "ended": true
        }
    },
    {
        "options": {
            "message": ".Footer",
            "aliasType": "dom",
            "timeout": 4000,
            "name": "get",
            "type": "parent",
            "event": false,
            "id": "log-https://www.overloop.io-23",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:46.391Z",
            "group": "log-https://www.overloop.io-18",
            "ended": true
        }
    },
    {
        "options": {
            "subject": {
                "0": {

                },
                "length": 1
            },
            "name": "assert",
            "message": "expected **<footer.Footer>** to be **visible**",
            "passed": true,
            "timeout": 0,
            "type": "child",
            "event": false,
            "id": "log-https://www.overloop.io-24",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:46.404Z",
            "group": "log-https://www.overloop.io-18",
            "commandLogId": "0-2",
            "ended": true
        }
    },
    {
        "options": {
            "end": true,
            "snapshot": true,
            "message": "cyclope: **logs/snapshots/cmd-https://www.overloop.io-17**",
            "name": "log",
            "type": "parent",
            "timeout": 4000,
            "event": false,
            "id": "log-https://www.overloop.io-26",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:46.413Z",
            "ended": true
        }
    },
    {
        "options": {
            "end": true,
            "snapshot": true,
            "message": "savePage took **2059** ms",
            "name": "log",
            "type": "parent",
            "timeout": 4000,
            "event": false,
            "id": "log-https://www.overloop.io-27",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:46.508Z",
            "ended": true
        }
    },
    {
        "options": {
            "message": "cyclopePrint, savePage took 2059 ms",
            "timeout": 60000,
            "name": "task",
            "type": "parent",
            "event": false,
            "id": "log-https://www.overloop.io-28",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:46.511Z",
            "ended": true
        }
    },
    {
        "options": {
            "end": true,
            "snapshot": true,
            "message": "cyclope: **logs/snapshots/cmd-https://www.overloop.io-37**",
            "name": "log",
            "type": "parent",
            "timeout": 4000,
            "event": false,
            "id": "log-https://www.overloop.io-29",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:46.560Z",
            "ended": true
        }
    },
    {
        "options": {
            "end": true,
            "snapshot": true,
            "message": "savePage took **2178** ms",
            "name": "log",
            "type": "parent",
            "timeout": 4000,
            "event": false,
            "id": "log-https://www.overloop.io-30",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:46.674Z",
            "ended": true
        }
    },
    {
        "options": {
            "message": "cyclopePrint, savePage took 2178 ms",
            "timeout": 60000,
            "name": "task",
            "type": "parent",
            "event": false,
            "id": "log-https://www.overloop.io-31",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:46.676Z",
            "ended": true
        }
    },
    {
        "options": {
            "end": true,
            "snapshot": true,
            "message": "cyclope: **logs/snapshots/cmd-https://www.overloop.io-39**",
            "name": "log",
            "type": "parent",
            "timeout": 4000,
            "event": false,
            "id": "log-https://www.overloop.io-32",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:46.688Z",
            "ended": true
        }
    },
    {
        "options": {
            "end": true,
            "snapshot": true,
            "message": "savePage took **2066** ms",
            "name": "log",
            "type": "parent",
            "timeout": 4000,
            "event": false,
            "id": "log-https://www.overloop.io-33",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:46.733Z",
            "ended": true
        }
    },
    {
        "options": {
            "message": "cyclopePrint, savePage took 2066 ms",
            "timeout": 60000,
            "name": "task",
            "type": "parent",
            "event": false,
            "id": "log-https://www.overloop.io-34",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:46.735Z",
            "ended": true
        }
    },
    {
        "options": {
            "end": true,
            "snapshot": true,
            "message": "cyclope: **logs/snapshots/cmd-https://www.overloop.io-67**",
            "name": "log",
            "type": "parent",
            "timeout": 4000,
            "event": false,
            "id": "log-https://www.overloop.io-35",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:46.748Z",
            "ended": true
        }
    },
    {
        "options": {
            "end": true,
            "snapshot": true,
            "message": "savePage took **444** ms",
            "name": "log",
            "type": "parent",
            "timeout": 4000,
            "event": false,
            "id": "log-https://www.overloop.io-36",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:46.806Z",
            "ended": true
        }
    },
    {
        "options": {
            "message": "cyclopePrint, savePage took 444 ms",
            "timeout": 60000,
            "name": "task",
            "type": "parent",
            "event": false,
            "id": "log-https://www.overloop.io-37",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:46.808Z",
            "ended": true
        }
    },
    {
        "options": {
            "end": true,
            "snapshot": true,
            "message": "cyclope: **logs/snapshots/cmd-https://www.overloop.io-70**",
            "name": "log",
            "type": "parent",
            "timeout": 4000,
            "event": false,
            "id": "log-https://www.overloop.io-38",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:46.822Z",
            "ended": true
        }
    },
    {
        "options": {
            "end": true,
            "snapshot": true,
            "message": "savePage took **502** ms",
            "name": "log",
            "type": "parent",
            "timeout": 4000,
            "event": false,
            "id": "log-https://www.overloop.io-39",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:46.888Z",
            "ended": true
        }
    },
    {
        "options": {
            "message": "cyclopePrint, savePage took 502 ms",
            "timeout": 60000,
            "name": "task",
            "type": "parent",
            "event": false,
            "id": "log-https://www.overloop.io-40",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:46.890Z",
            "ended": true
        }
    },
    {
        "options": {
            "end": true,
            "snapshot": true,
            "message": "cyclope: **logs/snapshots/cmd-https://www.overloop.io-73**",
            "name": "log",
            "type": "parent",
            "timeout": 4000,
            "event": false,
            "id": "log-https://www.overloop.io-41",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:46.896Z",
            "ended": true
        }
    },
    {
        "options": {
            "end": true,
            "snapshot": true,
            "message": "savePage took **550** ms",
            "name": "log",
            "type": "parent",
            "timeout": 4000,
            "event": false,
            "id": "log-https://www.overloop.io-42",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:46.957Z",
            "ended": true
        }
    },
    {
        "options": {
            "message": "cyclopePrint, savePage took 550 ms",
            "timeout": 60000,
            "name": "task",
            "type": "parent",
            "event": false,
            "id": "log-https://www.overloop.io-43",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:46.959Z",
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
            "id": "log-https://www.overloop.io-44",
            "state": "passed",
            "instrument": "command",
            "url": "",
            "wallClockStartedAt": "2023-02-09T14:08:47.041Z",
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
            "id": "log-https://www.overloop.io-45",
            "state": "passed",
            "instrument": "command",
            "url": "https://overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:47.043Z",
            "group": "log-https://www.overloop.io-44",
            "totalTime": 871,
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
            "id": "log-https://www.overloop.io-51",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:48.439Z",
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
            "id": "log-https://www.overloop.io-52",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:48.442Z",
            "group": "log-https://www.overloop.io-51",
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
            "id": "log-https://www.overloop.io-53",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:48.464Z",
            "group": "log-https://www.overloop.io-51",
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
            "id": "log-https://www.overloop.io-54",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:48.475Z",
            "group": "log-https://www.overloop.io-51",
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
            "id": "log-https://www.overloop.io-56",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/contact-us",
            "wallClockStartedAt": "2023-02-09T14:08:48.815Z",
            "group": "log-https://www.overloop.io-51",
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
            "id": "log-https://www.overloop.io-55",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:48.547Z",
            "group": "log-https://www.overloop.io-51",
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
            "id": "log-https://www.overloop.io-61",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/contact-us",
            "wallClockStartedAt": "2023-02-09T14:08:49.110Z",
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
            "id": "log-https://www.overloop.io-62",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/contact-us",
            "wallClockStartedAt": "2023-02-09T14:08:49.116Z",
            "group": "log-https://www.overloop.io-61",
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
            "id": "log-https://www.overloop.io-63",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/contact-us",
            "wallClockStartedAt": "2023-02-09T14:08:49.146Z",
            "group": "log-https://www.overloop.io-61",
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
            "message": "input[name=\"lname\"]",
            "aliasType": "dom",
            "timeout": 4000,
            "name": "get",
            "type": "parent",
            "event": false,
            "id": "log-https://www.overloop.io-64",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/contact-us",
            "wallClockStartedAt": "2023-02-09T14:08:49.463Z",
            "group": "log-https://www.overloop.io-61",
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
            "id": "log-https://www.overloop.io-65",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/contact-us",
            "wallClockStartedAt": "2023-02-09T14:08:49.482Z",
            "group": "log-https://www.overloop.io-61",
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
            "message": "input[name=\"email\"]",
            "aliasType": "dom",
            "timeout": 4000,
            "name": "get",
            "type": "parent",
            "event": false,
            "id": "log-https://www.overloop.io-66",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/contact-us",
            "wallClockStartedAt": "2023-02-09T14:08:49.826Z",
            "group": "log-https://www.overloop.io-61",
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
            "id": "log-https://www.overloop.io-67",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/contact-us",
            "wallClockStartedAt": "2023-02-09T14:08:49.845Z",
            "group": "log-https://www.overloop.io-61",
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
            "message": "Submit",
            "type": "parent",
            "timeout": 4000,
            "name": "contains",
            "event": false,
            "id": "log-https://www.overloop.io-68",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/contact-us",
            "wallClockStartedAt": "2023-02-09T14:08:50.258Z",
            "group": "log-https://www.overloop.io-61",
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
            "id": "log-https://www.overloop.io-69",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/contact-us",
            "wallClockStartedAt": "2023-02-09T14:08:50.279Z",
            "group": "log-https://www.overloop.io-61",
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
            "name": "Then ",
            "message": "**Validation error for missing fields occurs**",
            "groupStart": true,
            "type": "parent",
            "timeout": 4000,
            "event": false,
            "id": "log-https://www.overloop.io-72",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/contact-us",
            "wallClockStartedAt": "2023-02-09T14:08:50.388Z",
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
            "id": "log-https://www.overloop.io-73",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/contact-us",
            "wallClockStartedAt": "2023-02-09T14:08:50.393Z",
            "group": "log-https://www.overloop.io-72",
            "numRetries": 22,
            "ended": true
        }
    },
    {
        "options": {
            "name": "assert",
            "message": "expected **[ <div.field-error>, 3 more... ]** to be **visible**",
            "passed": true,
            "timeout": 0,
            "type": "child",
            "event": false,
            "id": "log-https://www.overloop.io-74",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/contact-us",
            "wallClockStartedAt": "2023-02-09T14:08:50.954Z",
            "group": "log-https://www.overloop.io-72",
            "commandLogId": "0-2",
            "subject": {
                "0": {
                    "_yuid": "yui_3_17_2_1_1675951728828_111"
                },
                "1": {
                    "_yuid": "yui_3_17_2_1_1675951728828_110"
                },
                "2": {
                    "_yuid": "yui_3_17_2_1_1675951728828_108"
                },
                "3": {
                    "_yuid": "yui_3_17_2_1_1675951728828_106"
                },
                "length": 4
            },
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
            "id": "log-https://www.overloop.io-120",
            "state": "failed",
            "instrument": "command",
            "url": "https://www.overloop.io/contact-us",
            "wallClockStartedAt": "2023-02-09T14:08:50.967Z",
            "group": "log-https://www.overloop.io-72",
            "ended": true,
            "err": {
                "message": "Timed out retrying after 4000ms: expected '<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>' to be 'disabled'",
                "name": "AssertionError",
                "stack": "AssertionError: Timed out retrying after 4000ms: expected '<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>' to be 'disabled'\n    at Context.eval (cypress/steps/overloop-steps.js:35:24)\n    at Registry.runStepDefininition (node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js:119:0)\n    at Object.fn (node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js:299:0)\n    at runStepWithLogGroup (node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js:11:0)\n    at Context.eval (node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js:296:0)",
                "parsedStack": [
                    {
                        "message": "AssertionError: Timed out retrying after 4000ms: expected '<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>' to be 'disabled'",
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
    },
    {
        "options": {
            "subject": {
                "0": {
                    "_yuid": "yui_3_17_2_1_1675951728828_90",
                    "__Cypress_state__": {
                        "start": 6,
                        "end": 6
                    }
                },
                "length": 1
            },
            "_error": {
                "name": "AssertionError",
                "message": "Timed out retrying after 4000ms: expected '<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>' to be 'disabled'",
                "isDefaultAssertionErr": false,
                "parsedStack": [
                    {
                        "message": "AssertionError: Timed out retrying after 4000ms: expected '<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>' to be 'disabled'",
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
                },
                "hasFailed": true,
                "stack": "AssertionError: Timed out retrying after 4000ms: expected '<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>' to be 'disabled'\n    at Context.eval (cypress/steps/overloop-steps.js:35:24)\n    at Registry.runStepDefininition (node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js:119:0)\n    at Object.fn (node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js:299:0)\n    at runStepWithLogGroup (node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js:11:0)\n    at Context.eval (node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js:296:0)"
            },
            "name": "assert",
            "message": "expected **<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>** to be **disabled**",
            "passed": false,
            "timeout": 0,
            "type": "child",
            "event": false,
            "id": "log-https://www.overloop.io-121",
            "state": "failed",
            "instrument": "command",
            "url": "https://www.overloop.io/contact-us",
            "wallClockStartedAt": "2023-02-09T14:08:54.984Z",
            "group": "log-https://www.overloop.io-72",
            "commandLogId": "0-2",
            "ended": true,
            "err": {
                "message": "Timed out retrying after 4000ms: expected '<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>' to be 'disabled'",
                "name": "AssertionError",
                "stack": "AssertionError: Timed out retrying after 4000ms: expected '<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>' to be 'disabled'\n    at Context.eval (cypress/steps/overloop-steps.js:35:24)\n    at Registry.runStepDefininition (node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js:119:0)\n    at Object.fn (node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js:299:0)\n    at runStepWithLogGroup (node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js:11:0)\n    at Context.eval (node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js:296:0)",
                "parsedStack": [
                    {
                        "message": "AssertionError: Timed out retrying after 4000ms: expected '<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>' to be 'disabled'",
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
    },
    {
        "options": {
            "name": "Given ",
            "message": "**I visit overloop's website**",
            "groupStart": true,
            "type": "parent",
            "timeout": 4000,
            "event": false,
            "id": "log-https://www.overloop.io-251",
            "state": "passed",
            "instrument": "command",
            "url": "",
            "wallClockStartedAt": "2023-02-09T14:08:55.258Z",
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
            "id": "log-https://www.overloop.io-252",
            "state": "passed",
            "instrument": "command",
            "url": "https://overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:55.259Z",
            "group": "log-https://www.overloop.io-251",
            "totalTime": 716,
            "ended": true
        }
    },
    {
        "options": {
            "name": "When ",
            "message": "**I navigate to home page**",
            "groupStart": true,
            "type": "parent",
            "timeout": 4000,
            "event": false,
            "id": "log-https://www.overloop.io-258",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:56.496Z",
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
            "id": "log-https://www.overloop.io-259",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:56.499Z",
            "group": "log-https://www.overloop.io-258",
            "ended": true
        }
    },
    {
        "options": {
            "message": "Home",
            "type": "child",
            "timeout": 4000,
            "name": "contains",
            "event": false,
            "id": "log-https://www.overloop.io-260",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:56.520Z",
            "group": "log-https://www.overloop.io-258",
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
            "id": "log-https://www.overloop.io-261",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:56.531Z",
            "group": "log-https://www.overloop.io-258",
            "coords": {
                "top": 45,
                "left": 533.96875,
                "topCenter": 61,
                "leftCenter": 560,
                "x": 560,
                "y": 62
            },
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
            "id": "log-https://www.overloop.io-262",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:56.606Z",
            "group": "log-https://www.overloop.io-258",
            "ended": true
        }
    },
    {
        "options": {
            "name": "And ",
            "message": "**I can see the content**",
            "groupStart": true,
            "type": "parent",
            "timeout": 4000,
            "event": false,
            "id": "log-https://www.overloop.io-268",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:57.225Z",
            "ended": true
        }
    },
    {
        "options": {
            "message": ".Site-inner",
            "aliasType": "dom",
            "timeout": 4000,
            "name": "get",
            "type": "parent",
            "event": false,
            "id": "log-https://www.overloop.io-269",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:57.229Z",
            "group": "log-https://www.overloop.io-268",
            "ended": true
        }
    },
    {
        "options": {
            "subject": {
                "0": {
                    "sizzle1675951720965": {
                        "undefined": {
                            "parentNode": [
                                834,
                                1547,
                                true
                            ]
                        }
                    }
                },
                "length": 1
            },
            "name": "assert",
            "message": "expected **<div#yui_3_17_2_1_1675951736836_79.Site-inner.Site-inner--index>** to be **visible**",
            "passed": true,
            "timeout": 0,
            "type": "child",
            "event": false,
            "id": "log-https://www.overloop.io-270",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:57.235Z",
            "group": "log-https://www.overloop.io-268",
            "commandLogId": "0-2",
            "ended": true
        }
    },
    {
        "options": {
            "message": ".Header",
            "aliasType": "dom",
            "timeout": 4000,
            "name": "get",
            "type": "parent",
            "event": false,
            "id": "log-https://www.overloop.io-271",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:57.244Z",
            "group": "log-https://www.overloop.io-268",
            "ended": true
        }
    },
    {
        "options": {
            "subject": {
                "0": {

                },
                "1": {

                },
                "length": 2
            },
            "name": "assert",
            "message": "expected **[ <header.Header.Header--top>, 1 more... ]** to be **visible**",
            "passed": true,
            "timeout": 0,
            "type": "child",
            "event": false,
            "id": "log-https://www.overloop.io-272",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:57.256Z",
            "group": "log-https://www.overloop.io-268",
            "commandLogId": "0-2",
            "ended": true
        }
    },
    {
        "options": {
            "message": ".Footer",
            "aliasType": "dom",
            "timeout": 4000,
            "name": "get",
            "type": "parent",
            "event": false,
            "id": "log-https://www.overloop.io-273",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:57.264Z",
            "group": "log-https://www.overloop.io-268",
            "ended": true
        }
    },
    {
        "options": {
            "subject": {
                "0": {

                },
                "length": 1
            },
            "name": "assert",
            "message": "expected **<footer.Footer>** to be **visible**",
            "passed": true,
            "timeout": 0,
            "type": "child",
            "event": false,
            "id": "log-https://www.overloop.io-274",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:57.275Z",
            "group": "log-https://www.overloop.io-268",
            "commandLogId": "0-2",
            "ended": true
        }
    },
    {
        "options": {
            "name": "When ",
            "message": "**I fill in contact form details**",
            "groupStart": true,
            "type": "parent",
            "timeout": 4000,
            "event": false,
            "id": "log-https://www.overloop.io-276",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:57.283Z",
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
            "id": "log-https://www.overloop.io-277",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:57.286Z",
            "group": "log-https://www.overloop.io-276",
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
            "id": "log-https://www.overloop.io-278",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:57.306Z",
            "group": "log-https://www.overloop.io-276",
            "coords": {
                "top": 3626,
                "left": 366.21875,
                "topCenter": 3647,
                "leftCenter": 505,
                "x": 505,
                "y": 3648
            },
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
            "id": "log-https://www.overloop.io-279",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:57.626Z",
            "group": "log-https://www.overloop.io-276",
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
            "id": "log-https://www.overloop.io-280",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:57.652Z",
            "group": "log-https://www.overloop.io-276",
            "coords": {
                "top": 3626,
                "left": 656.90625,
                "topCenter": 3647,
                "leftCenter": 796,
                "x": 796,
                "y": 3648
            },
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
            "id": "log-https://www.overloop.io-281",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:58.034Z",
            "group": "log-https://www.overloop.io-276",
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
            "id": "log-https://www.overloop.io-282",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:58.058Z",
            "group": "log-https://www.overloop.io-276",
            "coords": {
                "top": 3839,
                "left": 365.984375,
                "topCenter": 3860,
                "leftCenter": 650,
                "x": 650,
                "y": 3861
            },
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
            "id": "log-https://www.overloop.io-283",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:58.488Z",
            "group": "log-https://www.overloop.io-276",
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
            "id": "log-https://www.overloop.io-284",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:58.512Z",
            "group": "log-https://www.overloop.io-276",
            "coords": {
                "top": 4165,
                "left": 365.984375,
                "topCenter": 4185,
                "leftCenter": 424,
                "x": 424,
                "y": 4186
            },
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
            "id": "log-https://www.overloop.io-287",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:58.640Z",
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
            "id": "log-https://www.overloop.io-288",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:58.643Z",
            "group": "log-https://www.overloop.io-287",
            "numRetries": 20,
            "ended": true
        }
    },
    {
        "options": {
            "name": "assert",
            "message": "expected **[ <div.field-error>, 2 more... ]** to be **visible**",
            "passed": true,
            "timeout": 0,
            "type": "child",
            "event": false,
            "id": "log-https://www.overloop.io-289",
            "state": "passed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:59.161Z",
            "group": "log-https://www.overloop.io-287",
            "commandLogId": "0-2",
            "subject": {
                "0": {
                    "_yuid": "yui_3_17_2_1_1675951736836_570"
                },
                "1": {
                    "_yuid": "yui_3_17_2_1_1675951736836_569"
                },
                "2": {
                    "_yuid": "yui_3_17_2_1_1675951736836_567"
                },
                "length": 3
            },
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
            "id": "log-https://www.overloop.io-331",
            "state": "failed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:08:59.174Z",
            "group": "log-https://www.overloop.io-287",
            "ended": true,
            "err": {
                "message": "Timed out retrying after 4000ms: expected '<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>' to be 'disabled'",
                "name": "AssertionError",
                "stack": "AssertionError: Timed out retrying after 4000ms: expected '<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>' to be 'disabled'\n    at Context.eval (cypress/steps/overloop-steps.js:35:24)\n    at Registry.runStepDefininition (node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js:119:0)\n    at Object.fn (node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js:299:0)\n    at runStepWithLogGroup (node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js:11:0)\n    at Context.eval (node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js:296:0)",
                "parsedStack": [
                    {
                        "message": "AssertionError: Timed out retrying after 4000ms: expected '<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>' to be 'disabled'",
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
    },
    {
        "options": {
            "subject": {
                "0": {
                    "_yuid": "yui_3_17_2_1_1675951736836_551",
                    "__Cypress_state__": {
                        "start": 6,
                        "end": 6
                    }
                },
                "length": 1
            },
            "_error": {
                "name": "AssertionError",
                "message": "Timed out retrying after 4000ms: expected '<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>' to be 'disabled'",
                "isDefaultAssertionErr": false,
                "parsedStack": [
                    {
                        "message": "AssertionError: Timed out retrying after 4000ms: expected '<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>' to be 'disabled'",
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
                },
                "hasFailed": true,
                "stack": "AssertionError: Timed out retrying after 4000ms: expected '<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>' to be 'disabled'\n    at Context.eval (cypress/steps/overloop-steps.js:35:24)\n    at Registry.runStepDefininition (node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js:119:0)\n    at Object.fn (node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js:299:0)\n    at runStepWithLogGroup (node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js:11:0)\n    at Context.eval (node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js:296:0)"
            },
            "name": "assert",
            "message": "expected **<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>** to be **disabled**",
            "passed": false,
            "timeout": 0,
            "type": "child",
            "event": false,
            "id": "log-https://www.overloop.io-332",
            "state": "failed",
            "instrument": "command",
            "url": "https://www.overloop.io/",
            "wallClockStartedAt": "2023-02-09T14:09:03.195Z",
            "group": "log-https://www.overloop.io-287",
            "commandLogId": "0-2",
            "ended": true,
            "err": {
                "message": "Timed out retrying after 4000ms: expected '<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>' to be 'disabled'",
                "name": "AssertionError",
                "stack": "AssertionError: Timed out retrying after 4000ms: expected '<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>' to be 'disabled'\n    at Context.eval (cypress/steps/overloop-steps.js:35:24)\n    at Registry.runStepDefininition (node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js:119:0)\n    at Object.fn (node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js:299:0)\n    at runStepWithLogGroup (node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js:11:0)\n    at Context.eval (node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js:296:0)",
                "parsedStack": [
                    {
                        "message": "AssertionError: Timed out retrying after 4000ms: expected '<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>' to be 'disabled'",
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
];

export default steps.map((step) => {
    const wallClockStartedAt = new Date(Date.parse(step.options.wallClockStartedAt));
    return {
        ...step,
        options: {
            ...step.options,
            wallClockStartedAt
        }
    };
});
