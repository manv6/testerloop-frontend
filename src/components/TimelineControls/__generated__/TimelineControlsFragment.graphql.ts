/**
 * @generated SignedSource<<ba63a43fb1a72005fe75707ead8acfd2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TimelineControlsFragment$data = {
  readonly id: string;
  readonly timelineControlNetworkEvents: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly __typename: "HttpNetworkEvent";
        readonly id: string;
        readonly response: {
          readonly status: number;
        };
        readonly time: {
          readonly at: any;
          readonly until: any;
        };
      } | {
        // This will never be '%other', but we need some
        // value in case none of the concrete values match.
        readonly __typename: "%other";
      };
    }>;
  };
  readonly " $fragmentType": "TimelineControlsFragment";
};
export type TimelineControlsFragment$key = {
  readonly " $data"?: TimelineControlsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TimelineControlsFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TimelineControlsFragment",
  "selections": [
    (v0/*: any*/),
    {
      "alias": "timelineControlNetworkEvents",
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
            {
              "alias": null,
              "args": null,
              "concreteType": null,
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "kind": "InlineFragment",
                  "selections": [
                    (v0/*: any*/),
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

(node as any).hash = "b56b3f8fda4698a84404c02f4780f5c1";

export default node;
