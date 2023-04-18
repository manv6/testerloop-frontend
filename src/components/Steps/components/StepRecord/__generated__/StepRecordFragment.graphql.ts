/**
 * @generated SignedSource<<cf792581393dcb1ef41977941f1250f2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type GherkinStepKeyword = "AND" | "BUT" | "GIVEN" | "THEN" | "WHEN" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type StepRecordFragment$data = {
  readonly __typename: "StepEvent";
  readonly at: any;
  readonly commandChains: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly at: any;
        readonly commands: {
          readonly edges: ReadonlyArray<{
            readonly node: {
              readonly at: any;
              readonly " $fragmentSpreads": FragmentRefs<"ActionRecordFragment">;
            };
          }>;
        };
        readonly until: any;
      };
    }>;
    readonly totalCount: number;
  };
  readonly definition: {
    readonly description: string;
    readonly keyword: GherkinStepKeyword;
  };
  readonly hasFailed: boolean;
  readonly id: string;
  readonly until: any;
  readonly " $fragmentType": "StepRecordFragment";
};
export type StepRecordFragment$key = {
  readonly " $data"?: StepRecordFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"StepRecordFragment">;
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
  "name": "until",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StepRecordFragment",
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
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "StepDefinition",
      "kind": "LinkedField",
      "name": "definition",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "description",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "keyword",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasFailed",
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
                (v0/*: any*/),
                (v1/*: any*/),
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
                            {
                              "args": null,
                              "kind": "FragmentSpread",
                              "name": "ActionRecordFragment"
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
};
})();

(node as any).hash = "7bc1b4807b815c57750c24d2602b5f68";

export default node;
