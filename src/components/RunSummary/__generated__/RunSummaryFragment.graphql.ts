/**
 * @generated SignedSource<<0edcec684f7e1ff508bb3f68cbe3b167>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RunSummaryFragment$data = {
  readonly executions: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly at: any;
        readonly events: {
          readonly totalCount: number;
        };
      };
    }>;
    readonly totalCount: number;
  };
  readonly id: string;
  readonly " $fragmentSpreads": FragmentRefs<"RunEnvironmentDetailsFragment" | "TestCountFragment" | "TestRunDateTimeFragment" | "TestRunTitleFragment">;
  readonly " $fragmentType": "RunSummaryFragment";
};
export type RunSummaryFragment$key = {
  readonly " $data"?: RunSummaryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"RunSummaryFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RunSummaryFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "TestRunTitleFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "TestCountFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "TestRunDateTimeFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RunEnvironmentDetailsFragment"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "TestExecutionConnection",
      "kind": "LinkedField",
      "name": "executions",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "TestExecutionEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "TestExecution",
              "kind": "LinkedField",
              "name": "node",
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
                    (v0/*: any*/)
                  ],
                  "storageKey": "events(filter:{\"commandFilter\":{\"status\":\"FAILED\"},\"type\":\"COMMAND\"})"
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
  "type": "TestRun",
  "abstractKey": null
};
})();

(node as any).hash = "a75d16e1c95f5616d231481741410878";

export default node;
