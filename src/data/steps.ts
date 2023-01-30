/**
* Lifted from https://github.com/overloop-io/overloop-testing-framework/blob/master/test-data/cypress/out.json
* Converts wallClockStartedAt into a date object in the map on export.
*/

const steps = [
    {
        'timestamp': 1674735492776,
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
            'wallClockStartedAt': '2023-01-26T12:18:12.750Z',
            'ended': true
        }
    },
    {
        'timestamp': 1674735496366,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-3',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/census/RecordHit',
            'wallClockStartedAt': '2023-01-26T12:18:15.605Z',
            'group': 'log-https://www.overloop.io-1',
            'method': 'POST',
            'ended': true
        }
    },
    {
        'timestamp': 1674735496556,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-6',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/1/performance/settings',
            'wallClockStartedAt': '2023-01-26T12:18:15.782Z',
            'group': 'log-https://www.overloop.io-1',
            'method': 'GET',
            'ended': true
        }
    },
    {
        'timestamp': 1674735496725,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-5',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/census/button-render',
            'wallClockStartedAt': '2023-01-26T12:18:15.644Z',
            'group': 'log-https://www.overloop.io-1',
            'method': 'POST',
            'ended': true
        }
    },
    {
        'timestamp': 1674735496739,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-4',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/census/form-render',
            'wallClockStartedAt': '2023-01-26T12:18:15.622Z',
            'group': 'log-https://www.overloop.io-1',
            'method': 'POST',
            'ended': true
        }
    },
    {
        'timestamp': 1674735497063,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-3',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/census/RecordHit',
            'wallClockStartedAt': '2023-01-26T12:18:15.605Z',
            'group': 'log-https://www.overloop.io-1',
            'method': 'POST',
            'ended': true
        }
    },
    {
        'timestamp': 1674735497135,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-6',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/1/performance/settings',
            'wallClockStartedAt': '2023-01-26T12:18:15.782Z',
            'group': 'log-https://www.overloop.io-1',
            'method': 'GET',
            'ended': true
        }
    },
    {
        'timestamp': 1674735497178,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-5',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/census/button-render',
            'wallClockStartedAt': '2023-01-26T12:18:15.644Z',
            'group': 'log-https://www.overloop.io-1',
            'method': 'POST',
            'ended': true
        }
    },
    {
        'timestamp': 1674735497206,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-4',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/census/form-render',
            'wallClockStartedAt': '2023-01-26T12:18:15.622Z',
            'group': 'log-https://www.overloop.io-1',
            'method': 'POST',
            'ended': true
        }
    },
    {
        'timestamp': 1674735497283,
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
            'wallClockStartedAt': '2023-01-26T12:18:12.762Z',
            'group': 'log-https://www.overloop.io-1',
            'totalTime': 264,
            'ended': true
        }
    },
    {
        'timestamp': 1674735497425,
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
            'wallClockStartedAt': '2023-01-26T12:18:17.285Z',
            'ended': true
        }
    },
    {
        'timestamp': 1674735497427,
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
            'wallClockStartedAt': '2023-01-26T12:18:17.296Z',
            'group': 'log-https://www.overloop.io-8',
            'ended': true
        }
    },
    {
        'timestamp': 1674735497428,
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
            'wallClockStartedAt': '2023-01-26T12:18:17.361Z',
            'group': 'log-https://www.overloop.io-8',
            'ended': true
        }
    },
    {
        'timestamp': 1674735497563,
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
            'wallClockStartedAt': '2023-01-26T12:18:17.384Z',
            'group': 'log-https://www.overloop.io-8',
            'coords': {
                'top': 45,
                'left': 533.03125,
                'topCenter': 61,
                'leftCenter': 559,
                'x': 559,
                'y': 62
            },
            'ended': true
        }
    },
    {
        'timestamp': 1674735498743,
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
            'wallClockStartedAt': '2023-01-26T12:18:17.477Z',
            'group': 'log-https://www.overloop.io-8',
            'ended': true
        }
    },
    {
        'timestamp': 1674735498956,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-14',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/census/form-render',
            'wallClockStartedAt': '2023-01-26T12:18:18.329Z',
            'group': 'log-https://www.overloop.io-8',
            'method': 'POST',
            'ended': true
        }
    },
    {
        'timestamp': 1674735498957,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-15',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/census/button-render',
            'wallClockStartedAt': '2023-01-26T12:18:18.359Z',
            'group': 'log-https://www.overloop.io-8',
            'method': 'POST',
            'ended': true
        }
    },
    {
        'timestamp': 1674735498975,
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
            'wallClockStartedAt': '2023-01-26T12:18:18.775Z',
            'ended': true
        }
    },
    {
        'timestamp': 1674735498976,
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
            'wallClockStartedAt': '2023-01-26T12:18:18.780Z',
            'group': 'log-https://www.overloop.io-18',
            'ended': true
        }
    },
    {
        'timestamp': 1674735498984,
        'options': {
            'subject': {
                '0': {},
                'length': 1
            },
            'name': 'assert',
            'message': 'expected **<div#yui_3_17_2_1_1674735497935_79.Site-inner.Site-inner--index>** to be **visible**',
            'passed': true,
            'timeout': 0,
            'type': 'child',
            'event': false,
            'id': 'log-https://www.overloop.io-20',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:18.792Z',
            'group': 'log-https://www.overloop.io-18',
            'commandLogId': '0-2',
            'ended': true
        }
    },
    {
        'timestamp': 1674735498986,
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
            'wallClockStartedAt': '2023-01-26T12:18:18.806Z',
            'group': 'log-https://www.overloop.io-18',
            'ended': true
        }
    },
    {
        'timestamp': 1674735498999,
        'options': {
            'subject': {
                '0': {},
                '1': {},
                'length': 2
            },
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
            'wallClockStartedAt': '2023-01-26T12:18:18.825Z',
            'group': 'log-https://www.overloop.io-18',
            'commandLogId': '0-2',
            'ended': true
        }
    },
    {
        'timestamp': 1674735499016,
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
            'wallClockStartedAt': '2023-01-26T12:18:18.839Z',
            'group': 'log-https://www.overloop.io-18',
            'ended': true
        }
    },
    {
        'timestamp': 1674735499018,
        'options': {
            'subject': {
                '0': {},
                'length': 1
            },
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
            'wallClockStartedAt': '2023-01-26T12:18:18.859Z',
            'group': 'log-https://www.overloop.io-18',
            'commandLogId': '0-2',
            'ended': true
        }
    },
    {
        'timestamp': 1674735499019,
        'options': {
            'end': true,
            'snapshot': true,
            'message': 'cyclope: **logs/snapshots/cmd-https://www.overloop.io-19**',
            'name': 'log',
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-26',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:18.872Z',
            'ended': true
        }
    },
    {
        'timestamp': 1674735499116,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-13',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/census/RecordHit',
            'wallClockStartedAt': '2023-01-26T12:18:18.323Z',
            'group': 'log-https://www.overloop.io-8',
            'method': 'POST',
            'ended': true
        }
    },
    {
        'timestamp': 1674735499117,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-14',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/census/form-render',
            'wallClockStartedAt': '2023-01-26T12:18:18.329Z',
            'group': 'log-https://www.overloop.io-8',
            'method': 'POST',
            'ended': true
        }
    },
    {
        'timestamp': 1674735499117,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-15',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/census/button-render',
            'wallClockStartedAt': '2023-01-26T12:18:18.359Z',
            'group': 'log-https://www.overloop.io-8',
            'method': 'POST',
            'ended': true
        }
    },
    {
        'timestamp': 1674735499119,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-16',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/1/performance/settings',
            'wallClockStartedAt': '2023-01-26T12:18:18.402Z',
            'group': 'log-https://www.overloop.io-8',
            'method': 'GET',
            'ended': true
        }
    },
    {
        'timestamp': 1674735499138,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-13',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/census/RecordHit',
            'wallClockStartedAt': '2023-01-26T12:18:18.323Z',
            'group': 'log-https://www.overloop.io-8',
            'method': 'POST',
            'ended': true
        }
    },
    {
        'timestamp': 1674735499139,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-16',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/1/performance/settings',
            'wallClockStartedAt': '2023-01-26T12:18:18.402Z',
            'group': 'log-https://www.overloop.io-8',
            'method': 'GET',
            'ended': true
        }
    },
    {
        'timestamp': 1674735499206,
        'options': {
            'end': true,
            'snapshot': true,
            'message': 'savePage took **1908** ms',
            'name': 'log',
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-27',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:19.146Z',
            'ended': true
        }
    },
    {
        'timestamp': 1674735499207,
        'options': {
            'message': 'cyclopePrint, savePage took 1908 ms',
            'timeout': 60000,
            'name': 'task',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-28',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:19.163Z',
            'ended': true
        }
    },
    {
        'timestamp': 1674735499219,
        'options': {
            'end': true,
            'snapshot': true,
            'message': 'cyclope: **logs/snapshots/cmd-https://www.overloop.io-41**',
            'name': 'log',
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-29',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:19.200Z',
            'ended': true
        }
    },
    {
        'timestamp': 1674735499338,
        'options': {
            'end': true,
            'snapshot': true,
            'message': 'savePage took **1951** ms',
            'name': 'log',
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-30',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:19.297Z',
            'ended': true
        }
    },
    {
        'timestamp': 1674735499357,
        'options': {
            'message': 'cyclopePrint, savePage took 1951 ms',
            'timeout': 60000,
            'name': 'task',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-31',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:19.300Z',
            'ended': true
        }
    },
    {
        'timestamp': 1674735499358,
        'options': {
            'end': true,
            'snapshot': true,
            'message': 'cyclope: **logs/snapshots/cmd-https://www.overloop.io-43**',
            'name': 'log',
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-32',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:19.344Z',
            'ended': true
        }
    },
    {
        'timestamp': 1674735499458,
        'options': {
            'end': true,
            'snapshot': true,
            'message': 'savePage took **1871** ms',
            'name': 'log',
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-33',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:19.426Z',
            'ended': true
        }
    },
    {
        'timestamp': 1674735499485,
        'options': {
            'message': 'cyclopePrint, savePage took 1871 ms',
            'timeout': 60000,
            'name': 'task',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-34',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:19.428Z',
            'ended': true
        }
    },
    {
        'timestamp': 1674735499485,
        'options': {
            'end': true,
            'snapshot': true,
            'message': 'cyclope: **logs/snapshots/cmd-https://www.overloop.io-73**',
            'name': 'log',
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-35',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:19.459Z',
            'ended': true
        }
    },
    {
        'timestamp': 1674735499604,
        'options': {
            'end': true,
            'snapshot': true,
            'message': 'savePage took **750** ms',
            'name': 'log',
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-36',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:19.555Z',
            'ended': true
        }
    },
    {
        'timestamp': 1674735499604,
        'options': {
            'message': 'cyclopePrint, savePage took 750 ms',
            'timeout': 60000,
            'name': 'task',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-37',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:19.557Z',
            'ended': true
        }
    },
    {
        'timestamp': 1674735499621,
        'options': {
            'end': true,
            'snapshot': true,
            'message': 'cyclope: **logs/snapshots/cmd-https://www.overloop.io-76**',
            'name': 'log',
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-38',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:19.599Z',
            'ended': true
        }
    },
    {
        'timestamp': 1674735499718,
        'options': {
            'end': true,
            'snapshot': true,
            'message': 'savePage took **854** ms',
            'name': 'log',
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-39',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:19.685Z',
            'ended': true
        }
    },
    {
        'timestamp': 1674735499719,
        'options': {
            'message': 'cyclopePrint, savePage took 854 ms',
            'timeout': 60000,
            'name': 'task',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-40',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:19.697Z',
            'ended': true
        }
    },
    {
        'timestamp': 1674735499737,
        'options': {
            'end': true,
            'snapshot': true,
            'message': 'cyclope: **logs/snapshots/cmd-https://www.overloop.io-79**',
            'name': 'log',
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-41',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:19.707Z',
            'ended': true
        }
    },
    {
        'timestamp': 1674735499837,
        'options': {
            'end': true,
            'snapshot': true,
            'message': 'savePage took **940** ms',
            'name': 'log',
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-42',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:19.803Z',
            'ended': true
        }
    },
    {
        'timestamp': 1674735499838,
        'options': {
            'message': 'cyclopePrint, savePage took 940 ms',
            'timeout': 60000,
            'name': 'task',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-43',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:19.806Z',
            'ended': true
        }
    },
    {
        'timestamp': 1674735499960,
        'options': {
            'name': 'Given ',
            'message': '**I visit overloop\'s website**',
            'groupStart': true,
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-44',
            'state': 'passed',
            'instrument': 'command',
            'url': '',
            'wallClockStartedAt': '2023-01-26T12:18:19.949Z',
            'ended': true
        }
    },
    {
        'timestamp': 1674735501576,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-47',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/census/form-render',
            'wallClockStartedAt': '2023-01-26T12:18:20.900Z',
            'group': 'log-https://www.overloop.io-44',
            'ended': true,
            'method': 'POST'
        }
    },
    {
        'timestamp': 1674735501588,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-46',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/census/RecordHit',
            'wallClockStartedAt': '2023-01-26T12:18:20.898Z',
            'group': 'log-https://www.overloop.io-44',
            'method': 'POST',
            'ended': true
        }
    },
    {
        'timestamp': 1674735501589,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-48',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/census/button-render',
            'wallClockStartedAt': '2023-01-26T12:18:20.904Z',
            'group': 'log-https://www.overloop.io-44',
            'method': 'POST',
            'ended': true
        }
    },
    {
        'timestamp': 1674735501590,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-49',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/1/performance/settings',
            'wallClockStartedAt': '2023-01-26T12:18:20.940Z',
            'group': 'log-https://www.overloop.io-44',
            'method': 'GET',
            'ended': true
        }
    },
    {
        'timestamp': 1674735501601,
        'options': {
            'message': 'https://overloop.io/ -> 301: https://www.overloop.io/',
            'timeout': 60000,
            'name': 'visit',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-45',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:19.956Z',
            'group': 'log-https://www.overloop.io-44',
            'totalTime': 455,
            'ended': true
        }
    },
    {
        'timestamp': 1674735501725,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-47',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/census/form-render',
            'wallClockStartedAt': '2023-01-26T12:18:20.900Z',
            'group': 'log-https://www.overloop.io-44',
            'ended': true,
            'method': 'POST'
        }
    },
    {
        'timestamp': 1674735501735,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-48',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/census/button-render',
            'wallClockStartedAt': '2023-01-26T12:18:20.904Z',
            'group': 'log-https://www.overloop.io-44',
            'method': 'POST',
            'ended': true
        }
    },
    {
        'timestamp': 1674735501736,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-49',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/1/performance/settings',
            'wallClockStartedAt': '2023-01-26T12:18:20.940Z',
            'group': 'log-https://www.overloop.io-44',
            'method': 'GET',
            'ended': true
        }
    },
    {
        'timestamp': 1674735501737,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-46',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/census/RecordHit',
            'wallClockStartedAt': '2023-01-26T12:18:20.898Z',
            'group': 'log-https://www.overloop.io-44',
            'method': 'POST',
            'ended': true
        }
    },
    {
        'timestamp': 1674735501738,
        'options': {
            'name': 'When ',
            'message': '**I navigate to contact page**',
            'groupStart': true,
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-51',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:21.619Z',
            'ended': true
        }
    },
    {
        'timestamp': 1674735501739,
        'options': {
            'message': '.Header-nav-item',
            'aliasType': 'dom',
            'timeout': 4000,
            'name': 'get',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-52',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:21.623Z',
            'group': 'log-https://www.overloop.io-51',
            'ended': true
        }
    },
    {
        'timestamp': 1674735501739,
        'options': {
            'message': 'Contact',
            'type': 'child',
            'timeout': 4000,
            'name': 'contains',
            'event': false,
            'id': 'log-https://www.overloop.io-53',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:21.660Z',
            'group': 'log-https://www.overloop.io-51',
            'ended': true
        }
    },
    {
        'timestamp': 1674735501857,
        'options': {
            'message': '',
            'timeout': 4000,
            'name': 'click',
            'type': 'child',
            'event': false,
            'id': 'log-https://www.overloop.io-54',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:21.674Z',
            'group': 'log-https://www.overloop.io-51',
            'coords': {
                'top': 42,
                'left': 827.796875,
                'topCenter': 61,
                'leftCenter': 881,
                'x': 881,
                'y': 62
            },
            'ended': true
        }
    },
    {
        'timestamp': 1674735502040,
        'options': {
            'name': 'new url',
            'message': 'https://www.overloop.io/contact-us',
            'event': true,
            'type': 'parent',
            'end': true,
            'snapshot': true,
            'timeout': 4000,
            'id': 'log-https://www.overloop.io-56',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/contact-us',
            'wallClockStartedAt': '2023-01-26T12:18:21.957Z',
            'group': 'log-https://www.overloop.io-51',
            'ended': true
        }
    },
    {
        'timestamp': 1674735502764,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-58',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/census/form-render',
            'wallClockStartedAt': '2023-01-26T12:18:22.536Z',
            'group': 'log-https://www.overloop.io-51',
            'method': 'POST',
            'ended': true
        }
    },
    {
        'timestamp': 1674735502781,
        'options': {
            'type': 'parent',
            'name': 'page load',
            'message': '--page loaded--',
            'event': true,
            'timeout': 60000,
            'id': 'log-https://www.overloop.io-55',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:21.779Z',
            'group': 'log-https://www.overloop.io-51',
            'ended': true
        }
    },
    {
        'timestamp': 1674735502884,
        'options': {
            'name': 'And ',
            'message': '**I fill in contact form details**',
            'groupStart': true,
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-61',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/contact-us',
            'wallClockStartedAt': '2023-01-26T12:18:22.796Z',
            'ended': true
        }
    },
    {
        'timestamp': 1674735502885,
        'options': {
            'message': 'input[name="fname"]',
            'aliasType': 'dom',
            'timeout': 4000,
            'name': 'get',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-62',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/contact-us',
            'wallClockStartedAt': '2023-01-26T12:18:22.801Z',
            'group': 'log-https://www.overloop.io-61',
            'ended': true
        }
    },
    {
        'timestamp': 1674735502958,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-57',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/census/RecordHit',
            'wallClockStartedAt': '2023-01-26T12:18:22.528Z',
            'group': 'log-https://www.overloop.io-51',
            'method': 'POST',
            'ended': true
        }
    },
    {
        'timestamp': 1674735502959,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-58',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/census/form-render',
            'wallClockStartedAt': '2023-01-26T12:18:22.536Z',
            'group': 'log-https://www.overloop.io-51',
            'method': 'POST',
            'ended': true
        }
    },
    {
        'timestamp': 1674735502959,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-59',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/1/performance/settings',
            'wallClockStartedAt': '2023-01-26T12:18:22.597Z',
            'group': 'log-https://www.overloop.io-51',
            'method': 'GET',
            'ended': true
        }
    },
    {
        'timestamp': 1674735502977,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-57',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/census/RecordHit',
            'wallClockStartedAt': '2023-01-26T12:18:22.528Z',
            'group': 'log-https://www.overloop.io-51',
            'method': 'POST',
            'ended': true
        }
    },
    {
        'timestamp': 1674735503238,
        'options': {
            'message': 'testName',
            'timeout': 4000,
            'name': 'type',
            'type': 'child',
            'event': false,
            'id': 'log-https://www.overloop.io-63',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/contact-us',
            'wallClockStartedAt': '2023-01-26T12:18:22.820Z',
            'group': 'log-https://www.overloop.io-61',
            'coords': {
                'top': 251,
                'left': 517.171875,
                'topCenter': 273,
                'leftCenter': 619,
                'x': 619,
                'y': 273
            },
            'ended': true
        }
    },
    {
        'timestamp': 1674735503239,
        'options': {
            'message': 'input[name="lname"]',
            'aliasType': 'dom',
            'timeout': 4000,
            'name': 'get',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-64',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/contact-us',
            'wallClockStartedAt': '2023-01-26T12:18:23.151Z',
            'group': 'log-https://www.overloop.io-61',
            'ended': true
        }
    },
    {
        'timestamp': 1674735503603,
        'options': {
            'message': 'testLastName',
            'timeout': 4000,
            'name': 'type',
            'type': 'child',
            'event': false,
            'id': 'log-https://www.overloop.io-65',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/contact-us',
            'wallClockStartedAt': '2023-01-26T12:18:23.166Z',
            'group': 'log-https://www.overloop.io-61',
            'coords': {
                'top': 251,
                'left': 730.84375,
                'topCenter': 273,
                'leftCenter': 833,
                'x': 833,
                'y': 273
            },
            'ended': true
        }
    },
    {
        'timestamp': 1674735503604,
        'options': {
            'message': 'input[name="email"]',
            'aliasType': 'dom',
            'timeout': 4000,
            'name': 'get',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-66',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/contact-us',
            'wallClockStartedAt': '2023-01-26T12:18:23.551Z',
            'group': 'log-https://www.overloop.io-61',
            'ended': true
        }
    },
    {
        'timestamp': 1674735503976,
        'options': {
            'message': 'email@gmail.com',
            'timeout': 4000,
            'name': 'type',
            'type': 'child',
            'event': false,
            'id': 'log-https://www.overloop.io-67',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/contact-us',
            'wallClockStartedAt': '2023-01-26T12:18:23.565Z',
            'group': 'log-https://www.overloop.io-61',
            'coords': {
                'top': 466,
                'left': 517,
                'topCenter': 488,
                'leftCenter': 726,
                'x': 726,
                'y': 488
            },
            'ended': true
        }
    },
    {
        'timestamp': 1674735503977,
        'options': {
            'message': 'Submit',
            'type': 'parent',
            'timeout': 4000,
            'name': 'contains',
            'event': false,
            'id': 'log-https://www.overloop.io-68',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/contact-us',
            'wallClockStartedAt': '2023-01-26T12:18:23.921Z',
            'group': 'log-https://www.overloop.io-61',
            'ended': true
        }
    },
    {
        'timestamp': 1674735504098,
        'options': {
            'message': '',
            'timeout': 4000,
            'name': 'click',
            'type': 'child',
            'event': false,
            'id': 'log-https://www.overloop.io-69',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/contact-us',
            'wallClockStartedAt': '2023-01-26T12:18:23.937Z',
            'group': 'log-https://www.overloop.io-61',
            'coords': {
                'top': 794,
                'left': 517,
                'topCenter': 814,
                'leftCenter': 576,
                'x': 576,
                'y': 815
            },
            'ended': true
        }
    },
    {
        'timestamp': 1674735504118,
        'options': {
            'name': 'Then ',
            'message': '**Validation error for missing fields occurs**',
            'groupStart': true,
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-72',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/contact-us',
            'wallClockStartedAt': '2023-01-26T12:18:24.073Z',
            'ended': true
        }
    },
    {
        'timestamp': 1674735504267,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-70',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/form/FormSubmissionKey',
            'wallClockStartedAt': '2023-01-26T12:18:24.003Z',
            'group': 'log-https://www.overloop.io-61',
            'method': 'POST',
            'ended': true
        }
    },
    {
        'timestamp': 1674735504601,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-86',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/form/SaveFormSubmission',
            'wallClockStartedAt': '2023-01-26T12:18:24.230Z',
            'group': 'log-https://www.overloop.io-72',
            'method': 'POST',
            'ended': true
        }
    },
    {
        'timestamp': 1674735504604,
        'options': {
            'message': '.field-error',
            'aliasType': 'dom',
            'timeout': 4000,
            'name': 'get',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-73',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/contact-us',
            'wallClockStartedAt': '2023-01-26T12:18:24.077Z',
            'group': 'log-https://www.overloop.io-72',
            'numRetries': 19,
            'ended': true
        }
    },
    {
        'timestamp': 1674735504616,
        'options': {
            'name': 'assert',
            'message': 'expected **[ <div.field-error>, 3 more... ]** to be **visible**',
            'passed': true,
            'timeout': 0,
            'type': 'child',
            'event': false,
            'id': 'log-https://www.overloop.io-74',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/contact-us',
            'wallClockStartedAt': '2023-01-26T12:18:24.543Z',
            'group': 'log-https://www.overloop.io-72',
            'commandLogId': '0-2',
            'subject': {
                '0': {
                    '_yuid': 'yui_3_17_2_1_1674735502212_111'
                },
                '1': {
                    '_yuid': 'yui_3_17_2_1_1674735502212_110'
                },
                '2': {
                    '_yuid': 'yui_3_17_2_1_1674735502212_108'
                },
                '3': {
                    '_yuid': 'yui_3_17_2_1_1674735502212_106'
                },
                'length': 4
            },
            'ended': true
        }
    },
    {
        'timestamp': 1674735508605,
        'options': {
            'message': 'Submit',
            'type': 'parent',
            'timeout': 4000,
            'name': 'contains',
            'event': false,
            'id': 'log-https://www.overloop.io-114',
            'state': 'failed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/contact-us',
            'wallClockStartedAt': '2023-01-26T12:18:24.568Z',
            'group': 'log-https://www.overloop.io-72',
            'ended': true,
            'err': {
                'message': 'Timed out retrying after 4000ms: expected \'<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>\' to be \'disabled\'',
                'name': 'AssertionError',
                'stack': 'AssertionError: Timed out retrying after 4000ms: expected \'<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>\' to be \'disabled\'\n    at Context.eval (cypress/steps/overloop-steps.js:35:24)\n    at Registry.runStepDefininition (../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js:119:0)\n    at Object.fn (../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js:299:0)\n    at runStepWithLogGroup (../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js:11:0)\n    at Context.eval (../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js:296:0)',
                'parsedStack': [
                    {
                        'message': 'AssertionError: Timed out retrying after 4000ms: expected \'<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>\' to be \'disabled\'',
                        'whitespace': ''
                    },
                    {
                        'function': 'Context.eval',
                        'fileUrl': 'https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature',
                        'originalFile': 'cypress/steps/overloop-steps.js',
                        'relativeFile': 'cypress/steps/overloop-steps.js',
                        'absoluteFile': '/tmp/cypress/cypress/steps/overloop-steps.js',
                        'line': 35,
                        'column': 24,
                        'whitespace': '    '
                    },
                    {
                        'function': 'Registry.runStepDefininition',
                        'fileUrl': 'https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature',
                        'originalFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js',
                        'relativeFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js',
                        'absoluteFile': '/var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js',
                        'line': 119,
                        'column': 0,
                        'whitespace': '    '
                    },
                    {
                        'function': 'Object.fn',
                        'fileUrl': 'https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature',
                        'originalFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js',
                        'relativeFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js',
                        'absoluteFile': '/var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js',
                        'line': 299,
                        'column': 0,
                        'whitespace': '    '
                    },
                    {
                        'function': 'runStepWithLogGroup',
                        'fileUrl': 'https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature',
                        'originalFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js',
                        'relativeFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js',
                        'absoluteFile': '/var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js',
                        'line': 11,
                        'column': 0,
                        'whitespace': '    '
                    },
                    {
                        'function': 'Context.eval',
                        'fileUrl': 'https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature',
                        'originalFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js',
                        'relativeFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js',
                        'absoluteFile': '/var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js',
                        'line': 296,
                        'column': 0,
                        'whitespace': '    '
                    }
                ],
                'codeFrame': {
                    'line': 35,
                    'column': 25,
                    'originalFile': 'cypress/steps/overloop-steps.js',
                    'relativeFile': 'cypress/steps/overloop-steps.js',
                    'absoluteFile': '/tmp/cypress/cypress/steps/overloop-steps.js',
                    'frame': '  33 | Then(/Validation error for missing fields occurs/, () => {\n  34 |   cy.get(".field-error").should("be.visible");\n> 35 |   cy.contains("Submit").should("be.disabled");\n     |                         ^\n  36 | });\n  37 | \n  38 | Then(/I can see the content/, () => {',
                    'language': 'js'
                }
            }
        }
    },
    {
        'timestamp': 1674735508606,
        'options': {
            'subject': {
                '0': {
                    '_yuid': 'yui_3_17_2_1_1674735502212_90',
                    '__Cypress_state__': {
                        'start': 6,
                        'end': 6
                    }
                },
                'length': 1
            },
            '_error': {
                'name': 'AssertionError',
                'message': 'Timed out retrying after 4000ms: expected \'<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>\' to be \'disabled\'',
                'isDefaultAssertionErr': false,
                'parsedStack': [
                    {
                        'message': 'AssertionError: Timed out retrying after 4000ms: expected \'<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>\' to be \'disabled\'',
                        'whitespace': ''
                    },
                    {
                        'function': 'Context.eval',
                        'fileUrl': 'https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature',
                        'originalFile': 'cypress/steps/overloop-steps.js',
                        'relativeFile': 'cypress/steps/overloop-steps.js',
                        'absoluteFile': '/tmp/cypress/cypress/steps/overloop-steps.js',
                        'line': 35,
                        'column': 24,
                        'whitespace': '    '
                    },
                    {
                        'function': 'Registry.runStepDefininition',
                        'fileUrl': 'https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature',
                        'originalFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js',
                        'relativeFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js',
                        'absoluteFile': '/var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js',
                        'line': 119,
                        'column': 0,
                        'whitespace': '    '
                    },
                    {
                        'function': 'Object.fn',
                        'fileUrl': 'https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature',
                        'originalFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js',
                        'relativeFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js',
                        'absoluteFile': '/var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js',
                        'line': 299,
                        'column': 0,
                        'whitespace': '    '
                    },
                    {
                        'function': 'runStepWithLogGroup',
                        'fileUrl': 'https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature',
                        'originalFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js',
                        'relativeFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js',
                        'absoluteFile': '/var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js',
                        'line': 11,
                        'column': 0,
                        'whitespace': '    '
                    },
                    {
                        'function': 'Context.eval',
                        'fileUrl': 'https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature',
                        'originalFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js',
                        'relativeFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js',
                        'absoluteFile': '/var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js',
                        'line': 296,
                        'column': 0,
                        'whitespace': '    '
                    }
                ],
                'codeFrame': {
                    'line': 35,
                    'column': 25,
                    'originalFile': 'cypress/steps/overloop-steps.js',
                    'relativeFile': 'cypress/steps/overloop-steps.js',
                    'absoluteFile': '/tmp/cypress/cypress/steps/overloop-steps.js',
                    'frame': '  33 | Then(/Validation error for missing fields occurs/, () => {\n  34 |   cy.get(".field-error").should("be.visible");\n> 35 |   cy.contains("Submit").should("be.disabled");\n     |                         ^\n  36 | });\n  37 | \n  38 | Then(/I can see the content/, () => {',
                    'language': 'js'
                },
                'hasFailed': true,
                'stack': 'AssertionError: Timed out retrying after 4000ms: expected \'<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>\' to be \'disabled\'\n    at Context.eval (cypress/steps/overloop-steps.js:35:24)\n    at Registry.runStepDefininition (../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js:119:0)\n    at Object.fn (../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js:299:0)\n    at runStepWithLogGroup (../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js:11:0)\n    at Context.eval (../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js:296:0)'
            },
            'name': 'assert',
            'message': 'expected **<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>** to be **disabled**',
            'passed': false,
            'timeout': 0,
            'type': 'child',
            'event': false,
            'id': 'log-https://www.overloop.io-115',
            'state': 'failed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/contact-us',
            'wallClockStartedAt': '2023-01-26T12:18:28.580Z',
            'group': 'log-https://www.overloop.io-72',
            'commandLogId': '0-2',
            'ended': true,
            'err': {
                'message': 'Timed out retrying after 4000ms: expected \'<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>\' to be \'disabled\'',
                'name': 'AssertionError',
                'stack': 'AssertionError: Timed out retrying after 4000ms: expected \'<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>\' to be \'disabled\'\n    at Context.eval (cypress/steps/overloop-steps.js:35:24)\n    at Registry.runStepDefininition (../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js:119:0)\n    at Object.fn (../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js:299:0)\n    at runStepWithLogGroup (../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js:11:0)\n    at Context.eval (../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js:296:0)',
                'parsedStack': [
                    {
                        'message': 'AssertionError: Timed out retrying after 4000ms: expected \'<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>\' to be \'disabled\'',
                        'whitespace': ''
                    },
                    {
                        'function': 'Context.eval',
                        'fileUrl': 'https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature',
                        'originalFile': 'cypress/steps/overloop-steps.js',
                        'relativeFile': 'cypress/steps/overloop-steps.js',
                        'absoluteFile': '/tmp/cypress/cypress/steps/overloop-steps.js',
                        'line': 35,
                        'column': 24,
                        'whitespace': '    '
                    },
                    {
                        'function': 'Registry.runStepDefininition',
                        'fileUrl': 'https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature',
                        'originalFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js',
                        'relativeFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js',
                        'absoluteFile': '/var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js',
                        'line': 119,
                        'column': 0,
                        'whitespace': '    '
                    },
                    {
                        'function': 'Object.fn',
                        'fileUrl': 'https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature',
                        'originalFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js',
                        'relativeFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js',
                        'absoluteFile': '/var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js',
                        'line': 299,
                        'column': 0,
                        'whitespace': '    '
                    },
                    {
                        'function': 'runStepWithLogGroup',
                        'fileUrl': 'https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature',
                        'originalFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js',
                        'relativeFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js',
                        'absoluteFile': '/var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js',
                        'line': 11,
                        'column': 0,
                        'whitespace': '    '
                    },
                    {
                        'function': 'Context.eval',
                        'fileUrl': 'https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature',
                        'originalFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js',
                        'relativeFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js',
                        'absoluteFile': '/var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js',
                        'line': 296,
                        'column': 0,
                        'whitespace': '    '
                    }
                ],
                'codeFrame': {
                    'line': 35,
                    'column': 25,
                    'originalFile': 'cypress/steps/overloop-steps.js',
                    'relativeFile': 'cypress/steps/overloop-steps.js',
                    'absoluteFile': '/tmp/cypress/cypress/steps/overloop-steps.js',
                    'frame': '  33 | Then(/Validation error for missing fields occurs/, () => {\n  34 |   cy.get(".field-error").should("be.visible");\n> 35 |   cy.contains("Submit").should("be.disabled");\n     |                         ^\n  36 | });\n  37 | \n  38 | Then(/I can see the content/, () => {',
                    'language': 'js'
                }
            }
        }
    },
    {
        'timestamp': 1674735509005,
        'options': {
            'name': 'Given ',
            'message': '**I visit overloop\'s website**',
            'groupStart': true,
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-274',
            'state': 'passed',
            'instrument': 'command',
            'url': '',
            'wallClockStartedAt': '2023-01-26T12:18:28.977Z',
            'ended': true
        }
    },
    {
        'timestamp': 1674735509996,
        'options': {
            'message': 'https://overloop.io/ -> 301: https://www.overloop.io/',
            'timeout': 60000,
            'name': 'visit',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-275',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:28.988Z',
            'group': 'log-https://www.overloop.io-274',
            'totalTime': 188,
            'ended': true
        }
    },
    {
        'timestamp': 1674735510103,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-276',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/census/RecordHit',
            'wallClockStartedAt': '2023-01-26T12:18:29.642Z',
            'group': 'log-https://www.overloop.io-274',
            'method': 'POST',
            'ended': true
        }
    },
    {
        'timestamp': 1674735510125,
        'options': {
            'name': 'When ',
            'message': '**I navigate to home page**',
            'groupStart': true,
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-281',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:30.004Z',
            'ended': true
        }
    },
    {
        'timestamp': 1674735510125,
        'options': {
            'message': '.Header-nav-item',
            'aliasType': 'dom',
            'timeout': 4000,
            'name': 'get',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-282',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:30.007Z',
            'group': 'log-https://www.overloop.io-281',
            'ended': true
        }
    },
    {
        'timestamp': 1674735510125,
        'options': {
            'message': 'Home',
            'type': 'child',
            'timeout': 4000,
            'name': 'contains',
            'event': false,
            'id': 'log-https://www.overloop.io-283',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:30.024Z',
            'group': 'log-https://www.overloop.io-281',
            'ended': true
        }
    },
    {
        'timestamp': 1674735510181,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-278',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/census/button-render',
            'wallClockStartedAt': '2023-01-26T12:18:29.655Z',
            'group': 'log-https://www.overloop.io-274',
            'method': 'POST',
            'ended': true
        }
    },
    {
        'timestamp': 1674735510185,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-277',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/census/form-render',
            'wallClockStartedAt': '2023-01-26T12:18:29.651Z',
            'group': 'log-https://www.overloop.io-274',
            'method': 'POST',
            'ended': true
        }
    },
    {
        'timestamp': 1674735510185,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-276',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/census/RecordHit',
            'wallClockStartedAt': '2023-01-26T12:18:29.642Z',
            'group': 'log-https://www.overloop.io-274',
            'method': 'POST',
            'ended': true
        }
    },
    {
        'timestamp': 1674735510200,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-278',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/census/button-render',
            'wallClockStartedAt': '2023-01-26T12:18:29.655Z',
            'group': 'log-https://www.overloop.io-274',
            'method': 'POST',
            'ended': true
        }
    },
    {
        'timestamp': 1674735510200,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-279',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/1/performance/settings',
            'wallClockStartedAt': '2023-01-26T12:18:29.700Z',
            'group': 'log-https://www.overloop.io-274',
            'method': 'GET',
            'ended': true
        }
    },
    {
        'timestamp': 1674735510200,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-277',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/census/form-render',
            'wallClockStartedAt': '2023-01-26T12:18:29.651Z',
            'group': 'log-https://www.overloop.io-274',
            'method': 'POST',
            'ended': true
        }
    },
    {
        'timestamp': 1674735510229,
        'options': {
            'message': '',
            'timeout': 4000,
            'name': 'click',
            'type': 'child',
            'event': false,
            'id': 'log-https://www.overloop.io-284',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:30.060Z',
            'group': 'log-https://www.overloop.io-281',
            'coords': {
                'top': 45,
                'left': 533.03125,
                'topCenter': 61,
                'leftCenter': 559,
                'x': 559,
                'y': 62
            },
            'ended': true
        }
    },
    {
        'timestamp': 1674735511020,
        'options': {
            'type': 'parent',
            'name': 'page load',
            'message': '--page loaded--',
            'event': true,
            'timeout': 60000,
            'id': 'log-https://www.overloop.io-285',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:30.167Z',
            'group': 'log-https://www.overloop.io-281',
            'ended': true
        }
    },
    {
        'timestamp': 1674735511190,
        'options': {
            'name': 'And ',
            'message': '**I can see the content**',
            'groupStart': true,
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-291',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:31.021Z',
            'ended': true
        }
    },
    {
        'timestamp': 1674735511190,
        'options': {
            'message': '.Site-inner',
            'aliasType': 'dom',
            'timeout': 4000,
            'name': 'get',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-292',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:31.023Z',
            'group': 'log-https://www.overloop.io-291',
            'ended': true
        }
    },
    {
        'timestamp': 1674735511247,
        'options': {
            'subject': {
                '0': {
                    'sizzle1674735491712': {
                        'undefined': {
                            'parentNode': [
                                888,
                                1715,
                                true
                            ]
                        }
                    }
                },
                'length': 1
            },
            'name': 'assert',
            'message': 'expected **<div#yui_3_17_2_1_1674735510401_79.Site-inner.Site-inner--index>** to be **visible**',
            'passed': true,
            'timeout': 0,
            'type': 'child',
            'event': false,
            'id': 'log-https://www.overloop.io-293',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:31.038Z',
            'group': 'log-https://www.overloop.io-291',
            'commandLogId': '0-2',
            'ended': true
        }
    },
    {
        'timestamp': 1674735511248,
        'options': {
            'message': '.Header',
            'aliasType': 'dom',
            'timeout': 4000,
            'name': 'get',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-294',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:31.064Z',
            'group': 'log-https://www.overloop.io-291',
            'ended': true
        }
    },
    {
        'timestamp': 1674735511248,
        'options': {
            'subject': {
                '0': {},
                '1': {},
                'length': 2
            },
            'name': 'assert',
            'message': 'expected **[ <header.Header.Header--top>, 1 more... ]** to be **visible**',
            'passed': true,
            'timeout': 0,
            'type': 'child',
            'event': false,
            'id': 'log-https://www.overloop.io-295',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:31.089Z',
            'group': 'log-https://www.overloop.io-291',
            'commandLogId': '0-2',
            'ended': true
        }
    },
    {
        'timestamp': 1674735511249,
        'options': {
            'message': '.Footer',
            'aliasType': 'dom',
            'timeout': 4000,
            'name': 'get',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-296',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:31.105Z',
            'group': 'log-https://www.overloop.io-291',
            'ended': true
        }
    },
    {
        'timestamp': 1674735511253,
        'options': {
            'subject': {
                '0': {},
                'length': 1
            },
            'name': 'assert',
            'message': 'expected **<footer.Footer>** to be **visible**',
            'passed': true,
            'timeout': 0,
            'type': 'child',
            'event': false,
            'id': 'log-https://www.overloop.io-297',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:31.124Z',
            'group': 'log-https://www.overloop.io-291',
            'commandLogId': '0-2',
            'ended': true
        }
    },
    {
        'timestamp': 1674735511258,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-287',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/census/form-render',
            'wallClockStartedAt': '2023-01-26T12:18:30.737Z',
            'group': 'log-https://www.overloop.io-281',
            'method': 'POST',
            'ended': true
        }
    },
    {
        'timestamp': 1674735511259,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-289',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/1/performance/settings',
            'wallClockStartedAt': '2023-01-26T12:18:30.785Z',
            'group': 'log-https://www.overloop.io-281',
            'method': 'GET',
            'ended': true
        }
    },
    {
        'timestamp': 1674735511261,
        'options': {
            'name': 'When ',
            'message': '**I fill in contact form details**',
            'groupStart': true,
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-299',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:31.196Z',
            'ended': true
        }
    },
    {
        'timestamp': 1674735511261,
        'options': {
            'message': 'input[name="fname"]',
            'aliasType': 'dom',
            'timeout': 4000,
            'name': 'get',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-300',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:31.198Z',
            'group': 'log-https://www.overloop.io-299',
            'ended': true
        }
    },
    {
        'timestamp': 1674735511339,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-287',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/census/form-render',
            'wallClockStartedAt': '2023-01-26T12:18:30.737Z',
            'group': 'log-https://www.overloop.io-281',
            'method': 'POST',
            'ended': true
        }
    },
    {
        'timestamp': 1674735511340,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-289',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/1/performance/settings',
            'wallClockStartedAt': '2023-01-26T12:18:30.785Z',
            'group': 'log-https://www.overloop.io-281',
            'method': 'GET',
            'ended': true
        }
    },
    {
        'timestamp': 1674735511340,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-288',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/census/button-render',
            'wallClockStartedAt': '2023-01-26T12:18:30.740Z',
            'group': 'log-https://www.overloop.io-281',
            'method': 'POST',
            'ended': true
        }
    },
    {
        'timestamp': 1674735511340,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-286',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/census/RecordHit',
            'wallClockStartedAt': '2023-01-26T12:18:30.727Z',
            'group': 'log-https://www.overloop.io-281',
            'method': 'POST',
            'ended': true
        }
    },
    {
        'timestamp': 1674735511617,
        'options': {
            'message': 'testName',
            'timeout': 4000,
            'name': 'type',
            'type': 'child',
            'event': false,
            'id': 'log-https://www.overloop.io-301',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:31.213Z',
            'group': 'log-https://www.overloop.io-299',
            'coords': {
                'top': 3626,
                'left': 366.21875,
                'topCenter': 3648,
                'leftCenter': 505,
                'x': 505,
                'y': 3648
            },
            'ended': true
        }
    },
    {
        'timestamp': 1674735511617,
        'options': {
            'message': 'input[name="lname"]',
            'aliasType': 'dom',
            'timeout': 4000,
            'name': 'get',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-302',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:31.547Z',
            'group': 'log-https://www.overloop.io-299',
            'ended': true
        }
    },
    {
        'timestamp': 1674735512000,
        'options': {
            'message': 'testLastName',
            'timeout': 4000,
            'name': 'type',
            'type': 'child',
            'event': false,
            'id': 'log-https://www.overloop.io-303',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:31.567Z',
            'group': 'log-https://www.overloop.io-299',
            'coords': {
                'top': 3626,
                'left': 656.90625,
                'topCenter': 3648,
                'leftCenter': 796,
                'x': 796,
                'y': 3648
            },
            'ended': true
        }
    },
    {
        'timestamp': 1674735512000,
        'options': {
            'message': 'input[name="email"]',
            'aliasType': 'dom',
            'timeout': 4000,
            'name': 'get',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-304',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:31.919Z',
            'group': 'log-https://www.overloop.io-299',
            'ended': true
        }
    },
    {
        'timestamp': 1674735512406,
        'options': {
            'message': 'email@gmail.com',
            'timeout': 4000,
            'name': 'type',
            'type': 'child',
            'event': false,
            'id': 'log-https://www.overloop.io-305',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:31.938Z',
            'group': 'log-https://www.overloop.io-299',
            'coords': {
                'top': 3841,
                'left': 365.984375,
                'topCenter': 3863,
                'leftCenter': 650,
                'x': 650,
                'y': 3863
            },
            'ended': true
        }
    },
    {
        'timestamp': 1674735512415,
        'options': {
            'message': 'Submit',
            'type': 'parent',
            'timeout': 4000,
            'name': 'contains',
            'event': false,
            'id': 'log-https://www.overloop.io-306',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:32.331Z',
            'group': 'log-https://www.overloop.io-299',
            'ended': true
        }
    },
    {
        'timestamp': 1674735512506,
        'options': {
            'message': '',
            'timeout': 4000,
            'name': 'click',
            'type': 'child',
            'event': false,
            'id': 'log-https://www.overloop.io-307',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:32.355Z',
            'group': 'log-https://www.overloop.io-299',
            'coords': {
                'top': 4169,
                'left': 365.984375,
                'topCenter': 4189,
                'leftCenter': 424,
                'x': 424,
                'y': 4190
            },
            'ended': true
        }
    },
    {
        'timestamp': 1674735512530,
        'options': {
            'name': 'Then ',
            'message': '**Validation error for missing fields occurs**',
            'groupStart': true,
            'type': 'parent',
            'timeout': 4000,
            'event': false,
            'id': 'log-https://www.overloop.io-310',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:32.508Z',
            'ended': true
        }
    },
    {
        'timestamp': 1674735512703,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-308',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/form/FormSubmissionKey',
            'wallClockStartedAt': '2023-01-26T12:18:32.445Z',
            'group': 'log-https://www.overloop.io-299',
            'method': 'POST',
            'ended': true
        }
    },
    {
        'timestamp': 1674735512967,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-328',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/form/SaveFormSubmission',
            'wallClockStartedAt': '2023-01-26T12:18:32.681Z',
            'group': 'log-https://www.overloop.io-310',
            'method': 'POST',
            'ended': true
        }
    },
    {
        'timestamp': 1674735513068,
        'options': {
            'message': '.field-error',
            'aliasType': 'dom',
            'timeout': 4000,
            'name': 'get',
            'type': 'parent',
            'event': false,
            'id': 'log-https://www.overloop.io-311',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:32.509Z',
            'group': 'log-https://www.overloop.io-310',
            'numRetries': 21,
            'ended': true
        }
    },
    {
        'timestamp': 1674735513069,
        'options': {
            'name': 'assert',
            'message': 'expected **[ <div.field-error>, 2 more... ]** to be **visible**',
            'passed': true,
            'timeout': 0,
            'type': 'child',
            'event': false,
            'id': 'log-https://www.overloop.io-312',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:32.981Z',
            'group': 'log-https://www.overloop.io-310',
            'commandLogId': '0-2',
            'subject': {
                '0': {
                    '_yuid': 'yui_3_17_2_1_1674735510401_570'
                },
                '1': {
                    '_yuid': 'yui_3_17_2_1_1674735510401_569'
                },
                '2': {
                    '_yuid': 'yui_3_17_2_1_1674735510401_567'
                },
                'length': 3
            },
            'ended': true
        }
    },
    {
        'timestamp': 1674735513069,
        'options': {
            'message': '',
            'name': 'request',
            'displayName': 'xhr',
            'type': 'parent',
            'event': true,
            'timeout': 0,
            'id': 'log-https://www.overloop.io-328',
            'state': 'passed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/api/form/SaveFormSubmission',
            'wallClockStartedAt': '2023-01-26T12:18:32.681Z',
            'group': 'log-https://www.overloop.io-310',
            'method': 'POST',
            'ended': true
        }
    },
    {
        'timestamp': 1674735517087,
        'options': {
            'message': 'Submit',
            'type': 'parent',
            'timeout': 4000,
            'name': 'contains',
            'event': false,
            'id': 'log-https://www.overloop.io-356',
            'state': 'failed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:33.006Z',
            'group': 'log-https://www.overloop.io-310',
            'ended': true,
            'err': {
                'message': 'Timed out retrying after 4000ms: expected \'<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>\' to be \'disabled\'',
                'name': 'AssertionError',
                'stack': 'AssertionError: Timed out retrying after 4000ms: expected \'<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>\' to be \'disabled\'\n    at Context.eval (cypress/steps/overloop-steps.js:35:24)\n    at Registry.runStepDefininition (../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js:119:0)\n    at Object.fn (../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js:299:0)\n    at runStepWithLogGroup (../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js:11:0)\n    at Context.eval (../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js:296:0)',
                'parsedStack': [
                    {
                        'message': 'AssertionError: Timed out retrying after 4000ms: expected \'<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>\' to be \'disabled\'',
                        'whitespace': ''
                    },
                    {
                        'function': 'Context.eval',
                        'fileUrl': 'https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature',
                        'originalFile': 'cypress/steps/overloop-steps.js',
                        'relativeFile': 'cypress/steps/overloop-steps.js',
                        'absoluteFile': '/tmp/cypress/cypress/steps/overloop-steps.js',
                        'line': 35,
                        'column': 24,
                        'whitespace': '    '
                    },
                    {
                        'function': 'Registry.runStepDefininition',
                        'fileUrl': 'https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature',
                        'originalFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js',
                        'relativeFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js',
                        'absoluteFile': '/var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js',
                        'line': 119,
                        'column': 0,
                        'whitespace': '    '
                    },
                    {
                        'function': 'Object.fn',
                        'fileUrl': 'https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature',
                        'originalFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js',
                        'relativeFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js',
                        'absoluteFile': '/var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js',
                        'line': 299,
                        'column': 0,
                        'whitespace': '    '
                    },
                    {
                        'function': 'runStepWithLogGroup',
                        'fileUrl': 'https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature',
                        'originalFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js',
                        'relativeFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js',
                        'absoluteFile': '/var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js',
                        'line': 11,
                        'column': 0,
                        'whitespace': '    '
                    },
                    {
                        'function': 'Context.eval',
                        'fileUrl': 'https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature',
                        'originalFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js',
                        'relativeFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js',
                        'absoluteFile': '/var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js',
                        'line': 296,
                        'column': 0,
                        'whitespace': '    '
                    }
                ],
                'codeFrame': {
                    'line': 35,
                    'column': 25,
                    'originalFile': 'cypress/steps/overloop-steps.js',
                    'relativeFile': 'cypress/steps/overloop-steps.js',
                    'absoluteFile': '/tmp/cypress/cypress/steps/overloop-steps.js',
                    'frame': '  33 | Then(/Validation error for missing fields occurs/, () => {\n  34 |   cy.get(".field-error").should("be.visible");\n> 35 |   cy.contains("Submit").should("be.disabled");\n     |                         ^\n  36 | });\n  37 | \n  38 | Then(/I can see the content/, () => {',
                    'language': 'js'
                }
            }
        }
    },
    {
        'timestamp': 1674735517088,
        'options': {
            'subject': {
                '0': {
                    '_yuid': 'yui_3_17_2_1_1674735510401_551',
                    '__Cypress_state__': {
                        'start': 6,
                        'end': 6
                    }
                },
                'length': 1
            },
            '_error': {
                'name': 'AssertionError',
                'message': 'Timed out retrying after 4000ms: expected \'<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>\' to be \'disabled\'',
                'isDefaultAssertionErr': false,
                'parsedStack': [
                    {
                        'message': 'AssertionError: Timed out retrying after 4000ms: expected \'<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>\' to be \'disabled\'',
                        'whitespace': ''
                    },
                    {
                        'function': 'Context.eval',
                        'fileUrl': 'https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature',
                        'originalFile': 'cypress/steps/overloop-steps.js',
                        'relativeFile': 'cypress/steps/overloop-steps.js',
                        'absoluteFile': '/tmp/cypress/cypress/steps/overloop-steps.js',
                        'line': 35,
                        'column': 24,
                        'whitespace': '    '
                    },
                    {
                        'function': 'Registry.runStepDefininition',
                        'fileUrl': 'https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature',
                        'originalFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js',
                        'relativeFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js',
                        'absoluteFile': '/var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js',
                        'line': 119,
                        'column': 0,
                        'whitespace': '    '
                    },
                    {
                        'function': 'Object.fn',
                        'fileUrl': 'https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature',
                        'originalFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js',
                        'relativeFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js',
                        'absoluteFile': '/var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js',
                        'line': 299,
                        'column': 0,
                        'whitespace': '    '
                    },
                    {
                        'function': 'runStepWithLogGroup',
                        'fileUrl': 'https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature',
                        'originalFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js',
                        'relativeFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js',
                        'absoluteFile': '/var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js',
                        'line': 11,
                        'column': 0,
                        'whitespace': '    '
                    },
                    {
                        'function': 'Context.eval',
                        'fileUrl': 'https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature',
                        'originalFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js',
                        'relativeFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js',
                        'absoluteFile': '/var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js',
                        'line': 296,
                        'column': 0,
                        'whitespace': '    '
                    }
                ],
                'codeFrame': {
                    'line': 35,
                    'column': 25,
                    'originalFile': 'cypress/steps/overloop-steps.js',
                    'relativeFile': 'cypress/steps/overloop-steps.js',
                    'absoluteFile': '/tmp/cypress/cypress/steps/overloop-steps.js',
                    'frame': '  33 | Then(/Validation error for missing fields occurs/, () => {\n  34 |   cy.get(".field-error").should("be.visible");\n> 35 |   cy.contains("Submit").should("be.disabled");\n     |                         ^\n  36 | });\n  37 | \n  38 | Then(/I can see the content/, () => {',
                    'language': 'js'
                },
                'hasFailed': true,
                'stack': 'AssertionError: Timed out retrying after 4000ms: expected \'<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>\' to be \'disabled\'\n    at Context.eval (cypress/steps/overloop-steps.js:35:24)\n    at Registry.runStepDefininition (../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js:119:0)\n    at Object.fn (../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js:299:0)\n    at runStepWithLogGroup (../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js:11:0)\n    at Context.eval (../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js:296:0)'
            },
            'name': 'assert',
            'message': 'expected **<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>** to be **disabled**',
            'passed': false,
            'timeout': 0,
            'type': 'child',
            'event': false,
            'id': 'log-https://www.overloop.io-357',
            'state': 'failed',
            'instrument': 'command',
            'url': 'https://www.overloop.io/',
            'wallClockStartedAt': '2023-01-26T12:18:37.060Z',
            'group': 'log-https://www.overloop.io-310',
            'commandLogId': '0-2',
            'ended': true,
            'err': {
                'message': 'Timed out retrying after 4000ms: expected \'<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>\' to be \'disabled\'',
                'name': 'AssertionError',
                'stack': 'AssertionError: Timed out retrying after 4000ms: expected \'<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>\' to be \'disabled\'\n    at Context.eval (cypress/steps/overloop-steps.js:35:24)\n    at Registry.runStepDefininition (../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js:119:0)\n    at Object.fn (../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js:299:0)\n    at runStepWithLogGroup (../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js:11:0)\n    at Context.eval (../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js:296:0)',
                'parsedStack': [
                    {
                        'message': 'AssertionError: Timed out retrying after 4000ms: expected \'<input.button.sqs-system-button.sqs-editable-button.sqs-button-element--primary>\' to be \'disabled\'',
                        'whitespace': ''
                    },
                    {
                        'function': 'Context.eval',
                        'fileUrl': 'https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature',
                        'originalFile': 'cypress/steps/overloop-steps.js',
                        'relativeFile': 'cypress/steps/overloop-steps.js',
                        'absoluteFile': '/tmp/cypress/cypress/steps/overloop-steps.js',
                        'line': 35,
                        'column': 24,
                        'whitespace': '    '
                    },
                    {
                        'function': 'Registry.runStepDefininition',
                        'fileUrl': 'https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature',
                        'originalFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js',
                        'relativeFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js',
                        'absoluteFile': '/var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/registry.js',
                        'line': 119,
                        'column': 0,
                        'whitespace': '    '
                    },
                    {
                        'function': 'Object.fn',
                        'fileUrl': 'https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature',
                        'originalFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js',
                        'relativeFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js',
                        'absoluteFile': '/var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js',
                        'line': 299,
                        'column': 0,
                        'whitespace': '    '
                    },
                    {
                        'function': 'runStepWithLogGroup',
                        'fileUrl': 'https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature',
                        'originalFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js',
                        'relativeFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js',
                        'absoluteFile': '/var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/cypress.js',
                        'line': 11,
                        'column': 0,
                        'whitespace': '    '
                    },
                    {
                        'function': 'Context.eval',
                        'fileUrl': 'https://www.overloop.io/__cypress/tests?p=cypress/e2e/overloop.feature',
                        'originalFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js',
                        'relativeFile': '../../var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js',
                        'absoluteFile': '/var/task/node_modules/@badeball/cypress-cucumber-preprocessor/lib/create-tests.js',
                        'line': 296,
                        'column': 0,
                        'whitespace': '    '
                    }
                ],
                'codeFrame': {
                    'line': 35,
                    'column': 25,
                    'originalFile': 'cypress/steps/overloop-steps.js',
                    'relativeFile': 'cypress/steps/overloop-steps.js',
                    'absoluteFile': '/tmp/cypress/cypress/steps/overloop-steps.js',
                    'frame': '  33 | Then(/Validation error for missing fields occurs/, () => {\n  34 |   cy.get(".field-error").should("be.visible");\n> 35 |   cy.contains("Submit").should("be.disabled");\n     |                         ^\n  36 | });\n  37 | \n  38 | Then(/I can see the content/, () => {',
                    'language': 'js'
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
