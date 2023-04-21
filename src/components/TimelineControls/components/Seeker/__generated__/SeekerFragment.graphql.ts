/**
 * @generated SignedSource<<5150d8dc0adb708a3251c59acadcc681>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
export type CommandEventStatus = "FAILED" | "SUCCESS" | "%future added value";
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
        readonly status: CommandEventStatus;
      } | {
        readonly __typename: "HttpNetworkEvent";
        readonly at: any;
        readonly id: string;
        readonly until: any;
      } | {
        readonly __typename: "StepEvent";
        readonly at: any;
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
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = [
  (v1/*: any*/),
  (v0/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "status",
    "storageKey": null
  }
];
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
                    (v1/*: any*/),
                    (v2/*: any*/),
                    (v0/*: any*/),
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
                  "selections": (v3/*: any*/),
                  "type": "CommandEvent",
                  "abstractKey": null
                },
                {
                  "kind": "InlineFragment",
                  "selections": (v3/*: any*/),
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
    (v2/*: any*/)
  ],
  "type": "TestExecution",
  "abstractKey": null
};
})();

(node as any).hash = "1ca91c8a624e1875d05c30dfc066dc4e";

export default node;
