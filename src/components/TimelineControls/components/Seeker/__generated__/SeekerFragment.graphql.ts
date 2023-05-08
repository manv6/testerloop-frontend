/**
 * @generated SignedSource<<dd4851f43497f7de50ba6e08edf2eacf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
export type CommandEventStatus = "FAILED" | "SUCCESS" | "%future added value";
export type GherkinStepKeyword = "AFTER" | "AND" | "BEFORE" | "BUT" | "GIVEN" | "STEP" | "THEN" | "WHEN" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type SeekerFragment$data = {
  readonly id: string;
  readonly screenshots: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly at?: any;
        readonly url?: {
          readonly url: any;
        };
      };
    }>;
  };
  readonly seekerCypressErrors?: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly __typename: "CommandEvent";
        readonly at: any;
        readonly description: string;
        readonly id: string;
        readonly name: string;
        readonly status: CommandEventStatus;
      } | {
        // This will never be '%other', but we need some
        // value in case none of the concrete values match.
        readonly __typename: "%other";
      };
    }>;
  };
  readonly seekerNetworkErrors?: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly __typename: "HttpNetworkEvent";
        readonly at: any;
        readonly id: string;
        readonly request: {
          readonly method: string;
          readonly url: {
            readonly url: string;
          };
        };
        readonly response: {
          readonly status: number;
        };
        readonly until: any;
      } | {
        // This will never be '%other', but we need some
        // value in case none of the concrete values match.
        readonly __typename: "%other";
      };
    }>;
  };
  readonly seekerNetworkSuccesses?: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly __typename: "HttpNetworkEvent";
        readonly at: any;
        readonly id: string;
        readonly request: {
          readonly method: string;
          readonly url: {
            readonly url: string;
          };
        };
        readonly response: {
          readonly status: number;
        };
        readonly until: any;
      } | {
        // This will never be '%other', but we need some
        // value in case none of the concrete values match.
        readonly __typename: "%other";
      };
    }>;
  };
  readonly seekerSteps?: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly __typename: "StepEvent";
        readonly at: any;
        readonly definition: {
          readonly description: string;
          readonly keyword: GherkinStepKeyword;
        };
        readonly id: string;
        readonly status: CommandEventStatus;
      } | {
        // This will never be '%other', but we need some
        // value in case none of the concrete values match.
        readonly __typename: "%other";
      };
    }>;
  };
  readonly " $fragmentType": "SeekerFragment";
};
export type SeekerFragment$key = {
  readonly " $data"?: SeekerFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SeekerFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "at",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "url",
    "storageKey": null
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v6 = [
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
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v0/*: any*/),
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
                    "selections": (v1/*: any*/),
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
                  (v4/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "type": "HttpNetworkEvent",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": true,
      "kind": "LocalArgument",
      "name": "cypressError"
    },
    {
      "defaultValue": true,
      "kind": "LocalArgument",
      "name": "networkError"
    },
    {
      "defaultValue": false,
      "kind": "LocalArgument",
      "name": "networkSuccess"
    },
    {
      "defaultValue": true,
      "kind": "LocalArgument",
      "name": "step"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./SeekerFragmentRefetchQuery.graphql'),
      "identifierField": "id"
    }
  },
  "name": "SeekerFragment",
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
                {
                  "kind": "InlineFragment",
                  "selections": [
                    (v0/*: any*/),
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "SignedURL",
                      "kind": "LinkedField",
                      "name": "url",
                      "plural": false,
                      "selections": (v1/*: any*/),
                      "storageKey": null
                    }
                  ],
                  "type": "TestExecutionScreenshot",
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
                    {
                      "kind": "InlineFragment",
                      "selections": [
                        (v2/*: any*/),
                        (v3/*: any*/),
                        (v0/*: any*/),
                        (v4/*: any*/),
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "name",
                          "storageKey": null
                        },
                        (v5/*: any*/)
                      ],
                      "type": "CommandEvent",
                      "abstractKey": null
                    }
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
          "selections": (v6/*: any*/),
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
          "selections": (v6/*: any*/),
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
                    {
                      "kind": "InlineFragment",
                      "selections": [
                        (v2/*: any*/),
                        (v3/*: any*/),
                        (v0/*: any*/),
                        (v4/*: any*/),
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "StepDefinition",
                          "kind": "LinkedField",
                          "name": "definition",
                          "plural": false,
                          "selections": [
                            (v5/*: any*/),
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
                    }
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
    },
    (v3/*: any*/)
  ],
  "type": "TestExecution",
  "abstractKey": null
};
})();

(node as any).hash = "27944685bb4da6a1ac41af7f7bd0f26c";

export default node;
