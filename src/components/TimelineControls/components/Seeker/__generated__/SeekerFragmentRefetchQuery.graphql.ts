/**
 * @generated SignedSource<<9664ba78d854d666bd89c9128e4fab4d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommandEventStatus = "FAILED" | "SUCCESS" | "%future added value";
export type TestExecutionEventType = "COMMAND" | "CONSOLE" | "NETWORK" | "SCREENSHOT" | "STEP" | "TEST_PART" | "%future added value";
export type NetworkEventResponseStatusFilterInput = {
  gte?: number | null;
  lte?: number | null;
};
export type SeekerFragmentRefetchQuery$variables = {
  commandStatus?: ReadonlyArray<CommandEventStatus> | null;
  eventTypes?: ReadonlyArray<TestExecutionEventType> | null;
  id: string;
  networkStatus?: NetworkEventResponseStatusFilterInput | null;
};
export type SeekerFragmentRefetchQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"SeekerFragment">;
  } | null;
};
export type SeekerFragmentRefetchQuery = {
  response: SeekerFragmentRefetchQuery$data;
  variables: SeekerFragmentRefetchQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": [
    "FAILED"
  ],
  "kind": "LocalArgument",
  "name": "commandStatus"
},
v1 = {
  "defaultValue": [
    "STEP",
    "NETWORK",
    "COMMAND"
  ],
  "kind": "LocalArgument",
  "name": "eventTypes"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v3 = {
  "defaultValue": {
    "gte": 400
  },
  "kind": "LocalArgument",
  "name": "networkStatus"
},
v4 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "at",
  "storageKey": null
},
v8 = [
  (v6/*: any*/)
],
v9 = {
  "kind": "InlineFragment",
  "selections": (v8/*: any*/),
  "type": "Node",
  "abstractKey": "__isNode"
},
v10 = [
  (v7/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "status",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SeekerFragmentRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": [
              {
                "kind": "Variable",
                "name": "commandStatus",
                "variableName": "commandStatus"
              },
              {
                "kind": "Variable",
                "name": "eventTypes",
                "variableName": "eventTypes"
              },
              {
                "kind": "Variable",
                "name": "networkStatus",
                "variableName": "networkStatus"
              }
            ],
            "kind": "FragmentSpread",
            "name": "SeekerFragment"
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v3/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "SeekerFragmentRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": "screenshots",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "filter",
                    "value": {
                      "type": "SCREENSHOT"
                    }
                  }
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
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v5/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v7/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "SignedURL",
                                "kind": "LinkedField",
                                "name": "url",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "url",
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "type": "TestExecutionScreenshot",
                            "abstractKey": null
                          },
                          (v9/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": (v8/*: any*/),
                            "type": "HttpNetworkEvent",
                            "abstractKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "events(filter:{\"type\":\"SCREENSHOT\"})"
              },
              {
                "alias": "seekerEvents",
                "args": [
                  {
                    "fields": [
                      {
                        "fields": [
                          {
                            "kind": "Variable",
                            "name": "status",
                            "variableName": "commandStatus"
                          }
                        ],
                        "kind": "ObjectValue",
                        "name": "commandFilter"
                      },
                      {
                        "fields": [
                          {
                            "kind": "Variable",
                            "name": "status",
                            "variableName": "networkStatus"
                          }
                        ],
                        "kind": "ObjectValue",
                        "name": "networkFilter"
                      },
                      {
                        "kind": "Variable",
                        "name": "type",
                        "variableName": "eventTypes"
                      }
                    ],
                    "kind": "ObjectValue",
                    "name": "filter"
                  }
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
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v5/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v6/*: any*/),
                              (v7/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "until",
                                "storageKey": null
                              }
                            ],
                            "type": "HttpNetworkEvent",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": (v10/*: any*/),
                            "type": "CommandEvent",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": (v10/*: any*/),
                            "type": "StepEvent",
                            "abstractKey": null
                          },
                          (v9/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "TestExecution",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e3d2d15ca01b85732652576612695a1b",
    "id": null,
    "metadata": {},
    "name": "SeekerFragmentRefetchQuery",
    "operationKind": "query",
    "text": "query SeekerFragmentRefetchQuery(\n  $commandStatus: [CommandEventStatus!] = [FAILED]\n  $eventTypes: [TestExecutionEventType!] = [STEP, NETWORK, COMMAND]\n  $networkStatus: NetworkEventResponseStatusFilterInput = {gte: 400}\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...SeekerFragment_2Gy8Fp\n    id\n  }\n}\n\nfragment SeekerFragment_2Gy8Fp on TestExecution {\n  screenshots: events(filter: {type: SCREENSHOT}) {\n    edges {\n      node {\n        __typename\n        ... on TestExecutionScreenshot {\n          at\n          url {\n            url\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n        ... on HttpNetworkEvent {\n          id\n        }\n      }\n    }\n  }\n  seekerEvents: events(filter: {type: $eventTypes, networkFilter: {status: $networkStatus}, commandFilter: {status: $commandStatus}}) {\n    edges {\n      node {\n        __typename\n        ... on HttpNetworkEvent {\n          __typename\n          id\n          at\n          until\n        }\n        ... on CommandEvent {\n          at\n          status\n        }\n        ... on StepEvent {\n          at\n          status\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n  id\n}\n"
  }
};
})();

(node as any).hash = "ad13361b19999713ad3f2a0ac5fb41b7";

export default node;
