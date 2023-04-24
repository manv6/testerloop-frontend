/**
 * @generated SignedSource<<9aa3d5701e233b9f4bc16a87a7409ce1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
export type CommandEventStatus = "FAILED" | "SUCCESS" | "%future added value";
export type GherkinStepKeyword = "AND" | "BUT" | "GIVEN" | "THEN" | "WHEN" | "%future added value";
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
  readonly seekerEvents: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly __typename: "CommandEvent";
        readonly at: any;
        readonly description: string;
        readonly id: string;
        readonly name: string;
        readonly status: CommandEventStatus;
      } | {
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
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": [
        "FAILED"
      ],
      "kind": "LocalArgument",
      "name": "commandStatus"
    },
    {
      "defaultValue": [
        "STEP",
        "NETWORK",
        "COMMAND"
      ],
      "kind": "LocalArgument",
      "name": "eventTypes"
    },
    {
      "defaultValue": {
        "gte": 400
      },
      "kind": "LocalArgument",
      "name": "networkStatus"
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
                },
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
                },
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
      "storageKey": null
    },
    (v3/*: any*/)
  ],
  "type": "TestExecution",
  "abstractKey": null
};
})();

(node as any).hash = "4bbd3d8c798bda8c4a3963f2385e43c3";

export default node;
