/**
 * @generated SignedSource<<8b76c60005afffb06b4e31ad9683babb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DomPreviewFragment$data = {
  readonly id: string;
  readonly snapshots: {
    readonly edges: ReadonlyArray<{
      readonly __typename: "TestExecutionEventEdge";
      readonly node: {
        readonly at?: any;
        readonly commandChains?: {
          readonly edges: ReadonlyArray<{
            readonly node: {
              readonly commands: {
                readonly edges: ReadonlyArray<{
                  readonly node: {
                    readonly nextSnapshot: {
                      readonly dom: string;
                    };
                    readonly previousSnapshot: {
                      readonly dom: string;
                    };
                  };
                }>;
              };
            };
          }>;
          readonly totalCount: number;
        };
      };
    }>;
  };
  readonly " $fragmentType": "DomPreviewFragment";
};
export type DomPreviewFragment$key = {
  readonly " $data"?: DomPreviewFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DomPreviewFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "dom",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DomPreviewFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": "snapshots",
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
              "kind": "ScalarField",
              "name": "__typename",
              "storageKey": null
            },
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
                      "concreteType": "CommandChainEventConnection",
                      "kind": "LinkedField",
                      "name": "commandChains",
                      "plural": false,
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "totalCount",
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "CommandChainEventEdge",
                          "kind": "LinkedField",
                          "name": "edges",
                          "plural": true,
                          "selections": [
                            {
                              "alias": null,
                              "args": null,
                              "concreteType": "CommandChainEvent",
                              "kind": "LinkedField",
                              "name": "node",
                              "plural": false,
                              "selections": [
                                {
                                  "alias": null,
                                  "args": null,
                                  "concreteType": "CommandEventConnection",
                                  "kind": "LinkedField",
                                  "name": "commands",
                                  "plural": false,
                                  "selections": [
                                    {
                                      "alias": null,
                                      "args": null,
                                      "concreteType": "CommandEventEdge",
                                      "kind": "LinkedField",
                                      "name": "edges",
                                      "plural": true,
                                      "selections": [
                                        {
                                          "alias": null,
                                          "args": null,
                                          "concreteType": "CommandEvent",
                                          "kind": "LinkedField",
                                          "name": "node",
                                          "plural": false,
                                          "selections": [
                                            {
                                              "alias": null,
                                              "args": null,
                                              "concreteType": "TestExecutionSnapshot",
                                              "kind": "LinkedField",
                                              "name": "previousSnapshot",
                                              "plural": false,
                                              "selections": (v0/*: any*/),
                                              "storageKey": null
                                            },
                                            {
                                              "alias": null,
                                              "args": null,
                                              "concreteType": "TestExecutionSnapshot",
                                              "kind": "LinkedField",
                                              "name": "nextSnapshot",
                                              "plural": false,
                                              "selections": (v0/*: any*/),
                                              "storageKey": null
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
                              "storageKey": null
                            }
                          ],
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
  ],
  "type": "TestExecution",
  "abstractKey": null
};
})();

(node as any).hash = "6efb1f2418daa511d4b185a50eeca6a1";

export default node;
