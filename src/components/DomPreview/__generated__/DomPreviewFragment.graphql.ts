/**
 * @generated SignedSource<<4d1a27f5e7524ae1ac6518931cc0a395>>
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
                    readonly at: any;
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
        };
        readonly nextSnapshot?: {
          readonly dom: string;
        };
        readonly previousSnapshot?: {
          readonly dom: string;
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
    "name": "dom",
    "storageKey": null
  }
],
v2 = {
  "alias": null,
  "args": null,
  "concreteType": "TestExecutionSnapshot",
  "kind": "LinkedField",
  "name": "previousSnapshot",
  "plural": false,
  "selections": (v1/*: any*/),
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "TestExecutionSnapshot",
  "kind": "LinkedField",
  "name": "nextSnapshot",
  "plural": false,
  "selections": (v1/*: any*/),
  "storageKey": null
};
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
                    (v0/*: any*/),
                    (v2/*: any*/),
                    (v3/*: any*/),
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
                                            (v0/*: any*/),
                                            (v2/*: any*/),
                                            (v3/*: any*/)
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

(node as any).hash = "9bc3ed1064a5d56f6a630d80f20e5ced";

export default node;
