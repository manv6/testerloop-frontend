/**
 * @generated SignedSource<<e24273b831f7fa846f5dc9640d3754a1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NetworkPanelFragment$data = {
  readonly id: string;
  readonly searchedNetworkEvents: {
    readonly edges: ReadonlyArray<{
      readonly __typename: "TestExecutionEventEdge";
      readonly node: {
        readonly __typename: "HttpNetworkEvent";
        readonly id: string;
        readonly request: {
          readonly method: string;
          readonly url: {
            readonly url: string;
          };
        };
        readonly resourceType: string | null;
        readonly response: {
          readonly status: number;
        };
        readonly time: {
          readonly at: any;
          readonly until: any;
        };
        readonly " $fragmentSpreads": FragmentRefs<"NetworkEventDetailFragment" | "RequestSliceFragment">;
      } | {
        // This will never be '%other', but we need some
        // value in case none of the concrete values match.
        readonly __typename: "%other";
      };
    }>;
  };
  readonly " $fragmentType": "NetworkPanelFragment";
};
export type NetworkPanelFragment$key = {
  readonly " $data"?: NetworkPanelFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"NetworkPanelFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NetworkPanelFragment",
  "selections": [
    (v0/*: any*/),
    {
      "alias": "searchedNetworkEvents",
      "args": [
        {
          "kind": "Literal",
          "name": "filter",
          "value": {
            "type": "NETWORK"
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
            (v1/*: any*/),
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
                    (v0/*: any*/),
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "resourceType",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "NetworkEventTime",
                      "kind": "LinkedField",
                      "name": "time",
                      "plural": false,
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "at",
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "until",
                          "storageKey": null
                        }
                      ],
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
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "status",
                          "storageKey": null
                        }
                      ],
                      "storageKey": null
                    },
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "RequestSliceFragment"
                    },
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "NetworkEventDetailFragment"
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
      ],
      "storageKey": "events(filter:{\"type\":\"NETWORK\"})"
    }
  ],
  "type": "TestExecution",
  "abstractKey": null
};
})();

(node as any).hash = "548c5e5c5a5d10ca9e22805fa43319c2";

export default node;
