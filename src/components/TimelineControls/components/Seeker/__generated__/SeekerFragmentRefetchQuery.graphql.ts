/**
 * @generated SignedSource<<56e79b16466f27d9da42ac2cff69475a>>
 * @relayHash 673546ab90aab8fee4c05bb8f577dc65
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 57ebafe99b7ffe7c9c51bece5dd5ca641e9f5be2423efa5f599cd4690ba14c5a

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SeekerFragmentRefetchQuery$variables = {
  cypressError?: boolean | null;
  id: string;
  networkError?: boolean | null;
  networkSuccess?: boolean | null;
  step?: boolean | null;
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
  "defaultValue": true,
  "kind": "LocalArgument",
  "name": "cypressError"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v2 = {
  "defaultValue": true,
  "kind": "LocalArgument",
  "name": "networkError"
},
v3 = {
  "defaultValue": false,
  "kind": "LocalArgument",
  "name": "networkSuccess"
},
v4 = {
  "defaultValue": true,
  "kind": "LocalArgument",
  "name": "step"
},
v5 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "at",
  "storageKey": null
},
v9 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "url",
    "storageKey": null
  }
],
v10 = [
  (v7/*: any*/)
],
v11 = {
  "kind": "InlineFragment",
  "selections": (v10/*: any*/),
  "type": "Node",
  "abstractKey": "__isNode"
},
v12 = {
  "kind": "InlineFragment",
  "selections": (v10/*: any*/),
  "type": "HttpNetworkEvent",
  "abstractKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v15 = [
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
          (v6/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v7/*: any*/),
              (v8/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "until",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "HttpNetworkRequest",
                "kind": "LinkedField",
                "name": "request",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "method",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "HttpNetworkRequestUrl",
                    "kind": "LinkedField",
                    "name": "url",
                    "plural": false,
                    "selections": (v9/*: any*/),
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "HttpNetworkResponse",
                "kind": "LinkedField",
                "name": "response",
                "plural": false,
                "selections": [
                  (v13/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "type": "HttpNetworkEvent",
            "abstractKey": null
          },
          (v11/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SeekerFragmentRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": [
              {
                "kind": "Variable",
                "name": "cypressError",
                "variableName": "cypressError"
              },
              {
                "kind": "Variable",
                "name": "networkError",
                "variableName": "networkError"
              },
              {
                "kind": "Variable",
                "name": "networkSuccess",
                "variableName": "networkSuccess"
              },
              {
                "kind": "Variable",
                "name": "step",
                "variableName": "step"
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
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "SeekerFragmentRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v6/*: any*/),
          (v7/*: any*/),
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
                          (v6/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v8/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "SignedURL",
                                "kind": "LinkedField",
                                "name": "url",
                                "plural": false,
                                "selections": (v9/*: any*/),
                                "storageKey": null
                              }
                            ],
                            "type": "TestExecutionScreenshot",
                            "abstractKey": null
                          },
                          (v11/*: any*/),
                          (v12/*: any*/)
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
                "condition": "cypressError",
                "kind": "Condition",
                "passingValue": true,
                "selections": [
                  {
                    "alias": "seekerCypressErrors",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "filter",
                        "value": {
                          "commandFilter": {
                            "status": "FAILED"
                          },
                          "type": "COMMAND"
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
                              (v6/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v7/*: any*/),
                                  (v8/*: any*/),
                                  (v13/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "name",
                                    "storageKey": null
                                  },
                                  (v14/*: any*/)
                                ],
                                "type": "CommandEvent",
                                "abstractKey": null
                              },
                              (v11/*: any*/),
                              (v12/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "events(filter:{\"commandFilter\":{\"status\":\"FAILED\"},\"type\":\"COMMAND\"})"
                  }
                ]
              },
              {
                "condition": "networkError",
                "kind": "Condition",
                "passingValue": true,
                "selections": [
                  {
                    "alias": "seekerNetworkErrors",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "filter",
                        "value": {
                          "networkFilter": {
                            "status": {
                              "gte": 400
                            }
                          },
                          "type": "NETWORK"
                        }
                      }
                    ],
                    "concreteType": "TestExecutionEventConnection",
                    "kind": "LinkedField",
                    "name": "events",
                    "plural": false,
                    "selections": (v15/*: any*/),
                    "storageKey": "events(filter:{\"networkFilter\":{\"status\":{\"gte\":400}},\"type\":\"NETWORK\"})"
                  }
                ]
              },
              {
                "condition": "networkSuccess",
                "kind": "Condition",
                "passingValue": true,
                "selections": [
                  {
                    "alias": "seekerNetworkSuccesses",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "filter",
                        "value": {
                          "networkFilter": {
                            "status": {
                              "gte": 200,
                              "lte": 299
                            }
                          },
                          "type": "NETWORK"
                        }
                      }
                    ],
                    "concreteType": "TestExecutionEventConnection",
                    "kind": "LinkedField",
                    "name": "events",
                    "plural": false,
                    "selections": (v15/*: any*/),
                    "storageKey": "events(filter:{\"networkFilter\":{\"status\":{\"gte\":200,\"lte\":299}},\"type\":\"NETWORK\"})"
                  }
                ]
              },
              {
                "condition": "step",
                "kind": "Condition",
                "passingValue": true,
                "selections": [
                  {
                    "alias": "seekerSteps",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "filter",
                        "value": {
                          "type": "STEP"
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
                              (v6/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v7/*: any*/),
                                  (v8/*: any*/),
                                  (v13/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "StepDefinition",
                                    "kind": "LinkedField",
                                    "name": "definition",
                                    "plural": false,
                                    "selections": [
                                      (v14/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "keyword",
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "type": "StepEvent",
                                "abstractKey": null
                              },
                              (v11/*: any*/),
                              (v12/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "events(filter:{\"type\":\"STEP\"})"
                  }
                ]
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
    "id": "57ebafe99b7ffe7c9c51bece5dd5ca641e9f5be2423efa5f599cd4690ba14c5a",
    "metadata": {},
    "name": "SeekerFragmentRefetchQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "27944685bb4da6a1ac41af7f7bd0f26c";

export default node;
