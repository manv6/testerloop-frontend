/**
* Lifted from https://github.com/overloop-io/overloop-testing-framework/blob/master/test-data/cypress/out.json
* Converts wallClockStartedAt into a date object in the map on export.
*/

const steps = [
    {
        'options': {
            'name': 'Given ',
            'message': '**I visit overloop\'s website**',
            'groupStart': true,
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-1',
            'state': 'pending',
            'instrument': 'command',
            'url': '',
            'wallClockStartedAt': '2023-02-01T15:42:27.946Z' 
        }
    },
    {
        'options': {
            'message': 'https://overloop.io/',
            'timeout': 60000,
            'name': 'visit',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-2',
            'state': 'pending',
            'instrument': 'command',
            'url': '',
            'wallClockStartedAt': '2023-02-01T15:42:27.978Z',
            'group': 'log-https://www.overloop.io-1'
        }
    },
    {
        'options': {
            'name': 'Given ',
            'message': '**I visit overloop\'s website**',
            'groupStart': true,
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-1',
            'state': 'passed',
            'instrument': 'command',
            'url': '',
            'wallClockStartedAt': '2023-02-01T15:42:27.946Z',
            'ended': true
        }
    },
    {
        'options': {
            'name': 'When ',
            'message': '**I navigate to home page**',
            'groupStart': true,
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-8',
            'state': 'pending',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:35.184Z'
        }
    },
    {
        'options': {
            'message': '.Header-nav-item',
            'aliasType': 'dom',
            'timeout': 4000,
            'name': 'get',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-9',
            'state': 'pending',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:35.199Z',
            'group': 'log-https://www.overloop.io-8'
        }
    },
    {
        'options': {
            'message': 'Home',
            'type': 'child',
            'timeout': 4000,
            'name': 'contains',
            'event': false,
            'id': 'log-https://www.overloop.io-10',
            'state': 'pending',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:35.257Z',
            'group': 'log-https://www.overloop.io-8'
        }
    },
    {
        'options': {
            'message': '',
            'timeout': 4000,
            'name': 'click',
            'type': 'child',
            'event': false,
            'id': 'log-https://www.overloop.io-11',
            'state': 'pending',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:35.286Z',
            'group': 'log-https://www.overloop.io-8'
        }
    },
    {
        'options': {
            'message': 'https://overloop.io/ -> 301: https://www.overloop.io/',
            'timeout': 60000,
            'name': 'visit',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-2',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:27.978Z',
            'group': 'log-https://www.overloop.io-1',
            'totalTime': 471,
            'ended': true
        }
    },
    {
        'options': {
            'name': 'When ',
            'message': '**I navigate to home page**',
            'groupStart': true,
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-8',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:35.184Z',
            'ended': true
        }
    },
    {
        'options': {
            'message': '.Header-nav-item',
            'aliasType': 'dom',
            'timeout': 4000,
            'name': 'get',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-9',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:35.199Z',
            'group': 'log-https://www.overloop.io-8',
            'ended': true
        }
    },
    {
        'options': {
            'message': 'Home',
            'type': 'child',
            'timeout': 4000,
            'name': 'contains',
            'event': false,
            'id': 'log-https://www.overloop.io-10',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:35.257Z',
            'group': 'log-https://www.overloop.io-8',
            'ended': true
        }
    },
    {
        'options': {
            'type': 'parent',
            'name': 'page load',
            'message': '--waiting for new page to load--',
            'event': true,
            'timeout': 60000,
            'id': 'log-https://www.overloop.io-12',
            'state': 'pending',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:35.388Z',
            'group': 'log-https://www.overloop.io-8'
        }
    },
    {
        'options': {
            'message': '',
            'timeout': 4000,
            'name': 'click',
            'type': 'child',
            'event': false,
            'id': 'log-https://www.overloop.io-11',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:35.286Z',
            'group': 'log-https://www.overloop.io-8',
            'coords': {
                'top': 45,
                'left': 533.96875,
                'topCenter': 61,
                'leftCenter': 560,
                'x': 560,
                'y': 62
            },
            'ended': true
        }
    },
    {
        'options': {
            'name': 'Then ',
            'message': '**I can see the content**',
            'groupStart': true,
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-18',
            'state': 'pending',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:37.437Z'
        }
    },
    {
        'options': {
            'message': '.Site-inner',
            'aliasType': 'dom',
            'timeout': 4000,
            'name': 'get',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-19',
            'state': 'pending',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:37.444Z',
            'group': 'log-https://www.overloop.io-18'
        }
    },
    {
        'options': {
            'subject': { '0': {}, 'length': 1 },
            'name': 'assert',
            'message': 'expected **<div#yui_3_17_2_1_1675266156696_79.Site-inner.Site-inner--index>** to be **visible**',
            'passed': true,
            'timeout': 0,
            'type': 'child',
            'event': false,
            'id': 'log-https://www.overloop.io-20',
            'state': 'pending',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:37.458Z',
            'group': 'log-https://www.overloop.io-18',
            'commandLogId': '0-2'
        }
    },
    {
        'options': {
            'message': '.Header',
            'aliasType': 'dom',
            'timeout': 4000,
            'name': 'get',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-21',
            'state': 'pending',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:37.480Z',
            'group': 'log-https://www.overloop.io-18'
        }
    },
    {
        'options': {
            'subject': { '0': {}, '1': {}, 'length': 2 },
            'name': 'assert',
            'message': 'expected **[ <header.Header.Header--top>, 1 more... ]** to be **visible**',
            'passed': true,
            'timeout': 0,
            'type': 'child',
            'event': false,
            'id': 'log-https://www.overloop.io-22',
            'state': 'pending',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:37.501Z',
            'group': 'log-https://www.overloop.io-18',
            'commandLogId': '0-2'
        }
    },
    {
        'options': {
            'message': '.Footer',
            'aliasType': 'dom',
            'timeout': 4000,
            'name': 'get',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-23',
            'state': 'pending',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:37.521Z',
            'group': 'log-https://www.overloop.io-18'
        }
    },
    {
        'options': {
            'subject': { '0': {}, 'length': 1 },
            'name': 'assert',
            'message': 'expected **<footer.Footer>** to be **visible**',
            'passed': true,
            'timeout': 0,
            'type': 'child',
            'event': false,
            'id': 'log-https://www.overloop.io-24',
            'state': 'pending',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:37.538Z',
            'group': 'log-https://www.overloop.io-18',
            'commandLogId': '0-2'
        }
    },
    {
        'options': {
            'end': true,
            'snapshot': true,
            'message': 'cyclope: **logs/snapshots/cmd-https://www.overloop.io-17**',
            'name': 'log',
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-26',
            'state': 'pending',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:37.557Z'
        }
    },
    {
        'options': {
            'type': 'parent',
            'name': 'page load',
            'message': '--page loaded--',
            'event': true,
            'timeout': 60000,
            'id': 'log-https://www.overloop.io-12',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:35.388Z',
            'group': 'log-https://www.overloop.io-8',
            'ended': true
        }
    },
    {
        'options': {
            'name': 'Then ',
            'message': '**I can see the content**',
            'groupStart': true,
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-18',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:37.437Z',
            'ended': true
        }
    },
    {
        'options': {
            'message': '.Site-inner',
            'aliasType': 'dom',
            'timeout': 4000,
            'name': 'get',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-19',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:37.444Z',
            'group': 'log-https://www.overloop.io-18',
            'ended': true
        }
    },
    {
        'options': {
            'subject': { '0': {}, 'length': 1 },
            'name': 'assert',
            'message': 'expected **<div#yui_3_17_2_1_1675266156696_79.Site-inner.Site-inner--index>** to be **visible**',
            'passed': true,
            'timeout': 0,
            'type': 'child',
            'event': false,
            'id': 'log-https://www.overloop.io-20',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:37.458Z',
            'group': 'log-https://www.overloop.io-18',
            'commandLogId': '0-2',
            'ended': true
        }
    },
    {
        'options': {
            'message': '.Header',
            'aliasType': 'dom',
            'timeout': 4000,
            'name': 'get',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-21',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:37.480Z',
            'group': 'log-https://www.overloop.io-18',
            'ended': true
        }
    },
    {
        'options': {
            'subject': { '0': {}, '1': {}, 'length': 2 },
            'name': 'assert',
            'message': 'expected **[ <header.Header.Header--top>, 1 more... ]** to be **visible**',
            'passed': true,
            'timeout': 0,
            'type': 'child',
            'event': false,
            'id': 'log-https://www.overloop.io-22',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:37.501Z',
            'group': 'log-https://www.overloop.io-18',
            'commandLogId': '0-2',
            'ended': true
        }
    },
    {
        'options': {
            'message': '.Footer',
            'aliasType': 'dom',
            'timeout': 4000,
            'name': 'get',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-23',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:37.521Z',
            'group': 'log-https://www.overloop.io-18',
            'ended': true
        }
    },
    {
        'options': {
            'subject': { '0': {}, 'length': 1 },
            'name': 'assert',
            'message': 'expected **<footer.Footer>** to be **visible**',
            'passed': true,
            'timeout': 0,
            'type': 'child',
            'event': false,
            'id': 'log-https://www.overloop.io-24',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:37.538Z',
            'group': 'log-https://www.overloop.io-18',
            'commandLogId': '0-2',
            'ended': true
        }
    },
    {
        'options': {
            'end': true,
            'snapshot': true,
            'message': 'cyclope: **logs/snapshots/cmd-https://www.overloop.io-17**',
            'name': 'log',
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-26',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:37.557Z',
            'ended': true
        }
    },
    {
        'options': {
            'end': true,
            'snapshot': true,
            'message': 'savePage took **2530** ms',
            'name': 'log',
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-27',
            'state': 'pending',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:37.688Z'
        }
    },
    {
        'options': {
            'message': 'cyclopePrint, savePage took 2530 ms',
            'timeout': 60000,
            'name': 'task',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-28',
            'state': 'pending',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:37.698Z'
        }
    },
    {
        'options': {
            'end': true,
            'snapshot': true,
            'message': 'cyclope: **logs/snapshots/cmd-https://www.overloop.io-37**',
            'name': 'log',
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-29',
            'state': 'pending',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:37.727Z'
        }
    },
    {
        'options': {
            'end': true,
            'snapshot': true,
            'message': 'savePage took **2530** ms',
            'name': 'log',
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-27',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:37.688Z',
            'ended': true
        }
    },
    {
        'options': {
            'message': 'cyclopePrint, savePage took 2530 ms',
            'timeout': 60000,
            'name': 'task',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-28',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:37.698Z',
            'ended': true
        }
    },
    {
        'options': {
            'end': true,
            'snapshot': true,
            'message': 'cyclope: **logs/snapshots/cmd-https://www.overloop.io-37**',
            'name': 'log',
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-29',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:37.727Z',
            'ended': true
        }
    },
    {
        'options': {
            'end': true,
            'snapshot': true,
            'message': 'savePage took **2550** ms',
            'name': 'log',
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-30',
            'state': 'pending',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:37.788Z'
        }
    },
    {
        'options': {
            'message': 'cyclopePrint, savePage took 2550 ms',
            'timeout': 60000,
            'name': 'task',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-31',
            'state': 'pending',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:37.794Z'
        }
    },
    {
        'options': {
            'end': true,
            'snapshot': true,
            'message': 'cyclope: **logs/snapshots/cmd-https://www.overloop.io-39**',
            'name': 'log',
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-32',
            'state': 'pending',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:37.808Z'
        }
    },
    {
        'options': {
            'end': true,
            'snapshot': true,
            'message': 'savePage took **2550** ms',
            'name': 'log',
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-30',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:37.788Z',
            'ended': true
        }
    },
    {
        'options': {
            'message': 'cyclopePrint, savePage took 2550 ms',
            'timeout': 60000,
            'name': 'task',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-31',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:37.794Z',
            'ended': true
        }
    },
    {
        'options': {
            'end': true,
            'snapshot': true,
            'message': 'cyclope: **logs/snapshots/cmd-https://www.overloop.io-39**',
            'name': 'log',
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-32',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:37.808Z',
            'ended': true
        }
    },
    {
        'options': {
            'end': true,
            'snapshot': true,
            'message': 'savePage took **2410** ms',
            'name': 'log',
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-33',
            'state': 'pending',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:37.867Z'
        }
    },
    {
        'options': {
            'message': 'cyclopePrint, savePage took 2410 ms',
            'timeout': 60000,
            'name': 'task',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-34',
            'state': 'pending',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:37.871Z'
        }
    },
    {
        'options': {
            'end': true,
            'snapshot': true,
            'message': 'cyclope: **logs/snapshots/cmd-https://www.overloop.io-67**',
            'name': 'log',
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-35',
            'state': 'pending',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:37.883Z'
        }
    },
    {
        'options': {
            'end': true,
            'snapshot': true,
            'message': 'savePage took **2410** ms',
            'name': 'log',
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-33',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:37.867Z',
            'ended': true
        }
    },
    {
        'options': {
            'message': 'cyclopePrint, savePage took 2410 ms',
            'timeout': 60000,
            'name': 'task',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-34',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:37.871Z',
            'ended': true
        }
    },
    {
        'options': {
            'end': true,
            'snapshot': true,
            'message': 'cyclope: **logs/snapshots/cmd-https://www.overloop.io-67**',
            'name': 'log',
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-35',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:37.883Z',
            'ended': true
        }
    },
    {
        'options': {
            'end': true,
            'snapshot': true,
            'message': 'savePage took **462** ms',
            'name': 'log',
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-36',
            'state': 'pending',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:37.933Z'
        }
    },
    {
        'options': {
            'message': 'cyclopePrint, savePage took 462 ms',
            'timeout': 60000,
            'name': 'task',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-37',
            'state': 'pending',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:37.939Z'
        }
    },
    {
        'options': {
            'end': true,
            'snapshot': true,
            'message': 'cyclope: **logs/snapshots/cmd-https://www.overloop.io-70**',
            'name': 'log',
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-38',
            'state': 'pending',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:37.956Z'
        }
    },
    {
        'options': {
            'end': true,
            'snapshot': true,
            'message': 'savePage took **462** ms',
            'name': 'log',
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-36',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:37.933Z',
            'ended': true
        }
    },
    {
        'options': {
            'message': 'cyclopePrint, savePage took 462 ms',
            'timeout': 60000,
            'name': 'task',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-37',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:37.939Z',
            'ended': true
        }
    },
    {
        'options': {
            'end': true,
            'snapshot': true,
            'message': 'cyclope: **logs/snapshots/cmd-https://www.overloop.io-70**',
            'name': 'log',
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-38',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:37.956Z',
            'ended': true
        }
    },
    {
        'options': {
            'end': true,
            'snapshot': true,
            'message': 'savePage took **492** ms',
            'name': 'log',
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-39',
            'state': 'pending',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:38.006Z'
        }
    },
    {
        'options': {
            'message': 'cyclopePrint, savePage took 492 ms',
            'timeout': 60000,
            'name': 'task',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-40',
            'state': 'pending',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:38.009Z'
        }
    },
    {
        'options': {
            'end': true,
            'snapshot': true,
            'message': 'cyclope: **logs/snapshots/cmd-https://www.overloop.io-73**',
            'name': 'log',
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-41',
            'state': 'pending',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:38.020Z'
        }
    },
    {
        'options': {
            'end': true,
            'snapshot': true,
            'message': 'savePage took **492** ms',
            'name': 'log',
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-39',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:38.006Z',
            'ended': true
        }
    },
    {
        'options': {
            'message': 'cyclopePrint, savePage took 492 ms',
            'timeout': 60000,
            'name': 'task',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-40',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:38.009Z',
            'ended': true
        }
    },
    {
        'options': {
            'end': true,
            'snapshot': true,
            'message': 'cyclope: **logs/snapshots/cmd-https://www.overloop.io-73**',
            'name': 'log',
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-41',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:38.020Z',
            'ended': true
        }
    },
    {
        'options': {
            'end': true,
            'snapshot': true,
            'message': 'savePage took **516** ms',
            'name': 'log',
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-42',
            'state': 'pending',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:38.063Z'
        }
    },
    {
        'options': {
            'message': 'cyclopePrint, savePage took 516 ms',
            'timeout': 60000,
            'name': 'task',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-43',
            'state': 'pending',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:38.066Z'
        }
    },
    {
        'options': {
            'end': true,
            'snapshot': true,
            'message': 'savePage took **516** ms',
            'name': 'log',
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-42',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:38.063Z',
            'ended': true
        }
    },
    {
        'options': {
            'message': 'cyclopePrint, savePage took 516 ms',
            'timeout': 60000,
            'name': 'task',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-43',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:38.066Z',
            'ended': true
        }
    },
    {
        'options': {
            'message': 'saveSnapshotMetaData, {timestamp: 1675266155156, snapshot: cmd-https://www.overloop.io-17}, {timestamp: 1675266155236, snapshot: cmd-https://www.overloop.io-37}, {timestamp: 1675266155456, snapshot: cmd-https://www.overloop.io-39}, {timestamp: 1675266157470, snapshot: cmd-https://www.overloop.io-67}, {timestamp: 1675266157513, snapshot: cmd-https://www.overloop.io-70}, {timestamp: 1675266157546, snapshot: cmd-https://www.overloop.io-73}',
            'timeout': 60000,
            'name': 'task',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-44',
            'state': 'pending',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:38.096Z'
        }
    },
    {
        'options': {
            'message': 'saveCypressCommands, {options: Object{15}}, {options: Object{15}}, {options: Object{16}}, {options: Object{15}}, {options: Object{15}}, {options: Object{15}}, {options: Object{15}}, {options: Object{17}}, {options: Object{16}}, {options: Object{17}}, {options: Object{16}}, {options: Object{15}}, {options: Object{17}}, {options: Object{15}}, {options: Object{15}}, {options: Object{20}}, {options: Object{15}}, {options: Object{20}}, {options: Object{15}}, {options: Object{20}}, {options: Object{16}}, {options: Object{16}}, {options: Object{16}}, {options: Object{17}}, {options: Object{21}}, {options: Object{17}}, {options: Object{21}}, {options: Object{17}}, {options: Object{21}}, {options: Object{17}}, {options: Object{16}}, {options: Object{14}}, {options: Object{16}}, {options: Object{17}}, {options: Object{15}}, {options: Object{17}}, {options: Object{16}}, {options: Object{14}}, {options: Object{16}}, {options: Object{17}}, {options: Object{15}}, {options: Object{17}}, {options: Object{16}}, {options: Object{14}}, {options: Object{16}}, {options: Object{17}}, {options: Object{15}}, {options: Object{17}}, {options: Object{16}}, {options: Object{14}}, {options: Object{16}}, {options: Object{17}}, {options: Object{15}}, {options: Object{17}}, {options: Object{16}}, {options: Object{14}}, {options: Object{16}}, {options: Object{17}}, {options: Object{15}}, {options: Object{17}}, {options: Object{16}}, {options: Object{14}}, {options: Object{17}}, {options: Object{15}}, {options: Object{14}}',
            'timeout': 60000,
            'name': 'task',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-45',
            'state': 'pending',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-02-01T15:42:38.111Z'
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
