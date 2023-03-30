/**
 * @generated SignedSource<<0bb2de560c81361844a021a424832ce3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NetworkPanelFragment$data = {
  readonly id: string;
  readonly searchedNetworkEvents: {
    readonly edges: ReadonlyArray<{
      readonly __typename: "TestExecutionEventEdge";
      readonly node: {
        readonly __typename: "HttpNetworkEvent";
        readonly at: any;
        readonly id: string;
        readonly until: any;
        readonly " $fragmentSpreads": FragmentRefs<"NetworkEventDetailPanelFragment" | "NetworkSliceFragment">;
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
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "resourceType"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "urlSearch"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./NetworkPanelFragmentRefetchQuery.graphql'),
      "identifierField": "id"
    }
  },
  "name": "NetworkPanelFragment",
  "selections": [
    (v0/*: any*/),
    {
      "alias": "searchedNetworkEvents",
      "args": [
        {
          "fields": [
            {
              "fields": [
                {
                  "kind": "Variable",
                  "name": "resourceType",
                  "variableName": "resourceType"
                },
                {
                  "kind": "Variable",
                  "name": "urlSearch",
                  "variableName": "urlSearch"
                }
              ],
              "kind": "ObjectValue",
              "name": "networkFilter"
            },
            {
              "kind": "Literal",
              "name": "type",
              "value": "NETWORK"
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
                      "name": "at",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "until",
                      "storageKey": null
                    },
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "NetworkSliceFragment"
                    },
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "NetworkEventDetailPanelFragment"
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
      "storageKey": null
    }
  ],
  "type": "TestExecution",
  "abstractKey": null
};
})();

(node as any).hash = "f9bdb634d0af0d8626253b453eafd012";

export default node;
