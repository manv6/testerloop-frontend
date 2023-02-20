/**
 * @generated SignedSource<<7ef4ed143459aa8ef8f84ed1159e5308>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppQuery$variables = {
  testExecutionId: string;
};
export type AppQuery$data = {
  readonly testExecution: {
    readonly " $fragmentSpreads": FragmentRefs<"ConsolePanelFragment" | "NetworkPanelFragment" | "StepsFragment" | "SummaryFragment" | "TimelineControlsFragment">;
  } | null;
};
export type AppQuery = {
  response: AppQuery$data;
  variables: AppQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "testExecutionId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "testExecutionId"
  }
],
v2 = {
  "kind": "Literal",
  "name": "type",
  "value": [
    "CONSOLE"
  ]
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v4 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "totalCount",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "TestExecution",
        "kind": "LinkedField",
        "name": "testExecution",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ConsolePanelFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TimelineControlsFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "NetworkPanelFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SummaryFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "StepsFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "TestExecution",
        "kind": "LinkedField",
        "name": "testExecution",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": [
              (v2/*: any*/)
            ],
            "concreteType": "TestExecutionEventConnection",
            "kind": "LinkedField",
            "name": "events",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "TestExecutionEventEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "at",
                        "storageKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "message",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "logLevel",
                            "storageKey": null
                          }
                        ],
                        "type": "ConsoleLogEvent",
                        "abstractKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "events(type:[\"CONSOLE\"])"
          },
          {
            "alias": "warnings",
            "args": [
              {
                "kind": "Literal",
                "name": "logLevel",
                "value": [
                  "WARN"
                ]
              },
              (v2/*: any*/)
            ],
            "concreteType": "TestExecutionEventConnection",
            "kind": "LinkedField",
            "name": "events",
            "plural": false,
            "selections": (v4/*: any*/),
            "storageKey": "events(logLevel:[\"WARN\"],type:[\"CONSOLE\"])"
          },
          {
            "alias": "errors",
            "args": [
              {
                "kind": "Literal",
                "name": "logLevel",
                "value": [
                  "ERROR"
                ]
              },
              (v2/*: any*/)
            ],
            "concreteType": "TestExecutionEventConnection",
            "kind": "LinkedField",
            "name": "events",
            "plural": false,
            "selections": (v4/*: any*/),
            "storageKey": "events(logLevel:[\"ERROR\"],type:[\"CONSOLE\"])"
          },
          {
            "alias": "logs",
            "args": [
              {
                "kind": "Literal",
                "name": "logLevel",
                "value": [
                  "LOG"
                ]
              },
              (v2/*: any*/)
            ],
            "concreteType": "TestExecutionEventConnection",
            "kind": "LinkedField",
            "name": "events",
            "plural": false,
            "selections": (v4/*: any*/),
            "storageKey": "events(logLevel:[\"LOG\"],type:[\"CONSOLE\"])"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5650d686a59b20329015ca661f9dd6dc",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery(\n  $testExecutionId: ID!\n) {\n  testExecution(id: $testExecutionId) {\n    ...ConsolePanelFragment\n    ...TimelineControlsFragment\n    ...NetworkPanelFragment\n    ...SummaryFragment\n    ...StepsFragment\n    id\n  }\n}\n\nfragment ConsolePanelFragment on TestExecution {\n  id\n  events(type: [CONSOLE]) {\n    edges {\n      __typename\n      node {\n        __typename\n        at\n        ...LogEntryFragment\n      }\n    }\n  }\n  warnings: events(type: [CONSOLE], logLevel: [WARN]) {\n    totalCount\n  }\n  errors: events(type: [CONSOLE], logLevel: [ERROR]) {\n    totalCount\n  }\n  logs: events(type: [CONSOLE], logLevel: [LOG]) {\n    totalCount\n  }\n}\n\nfragment LogEntryFragment on ConsoleLogEvent {\n  at\n  message\n  logLevel\n}\n\nfragment NetworkPanelFragment on TestExecution {\n  id\n}\n\nfragment StepsFragment on TestExecution {\n  id\n}\n\nfragment SummaryFragment on TestExecution {\n  id\n  events(type: [CONSOLE]) {\n    edges {\n      __typename\n      node {\n        __typename\n        at\n        ... on ConsoleLogEvent {\n          at\n          message\n          logLevel\n        }\n      }\n    }\n  }\n}\n\nfragment TimelineControlsFragment on TestExecution {\n  id\n}\n"
  }
};
})();

(node as any).hash = "779e4173599ca7d1a15c7e35dff6015a";

export default node;
