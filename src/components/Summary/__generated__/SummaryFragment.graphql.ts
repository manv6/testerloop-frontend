/**
 * @generated SignedSource<<7cefd356215738651fb547eabf25133b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SummaryFragment$data = {
  readonly commandWithError: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly error?: {
          readonly type: string;
        } | null;
        readonly id?: string;
      };
    }>;
  };
  readonly id: string;
  readonly testRun: {
    readonly title: string;
  };
  readonly " $fragmentSpreads": FragmentRefs<"ConsoleErrorCountFragment" | "EnvironmentDetailsFragment" | "NetworkErrorCountFragment">;
  readonly " $fragmentType": "SummaryFragment";
};
export type SummaryFragment$key = {
  readonly " $data"?: SummaryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SummaryFragment">;
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
  "name": "SummaryFragment",
  "selections": [
    (v0/*: any*/),
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ConsoleErrorCountFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "NetworkErrorCountFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "EnvironmentDetailsFragment"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "TestRun",
      "kind": "LinkedField",
      "name": "testRun",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "title",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": "commandWithError",
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
                    (v0/*: any*/),
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "CommandEventError",
                      "kind": "LinkedField",
                      "name": "error",
                      "plural": false,
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "type",
                          "storageKey": null
                        }
                      ],
                      "storageKey": null
                    }
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
  ],
  "type": "TestExecution",
  "abstractKey": null
};
})();

(node as any).hash = "468703a885973bd8751c09a156584475";

export default node;
