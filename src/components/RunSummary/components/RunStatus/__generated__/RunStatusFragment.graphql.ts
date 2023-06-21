/**
 * @generated SignedSource<<e71758176bd774e1bdcfe3ac144e57f9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RunStatusFragment$data = {
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
  readonly " $fragmentType": "RunStatusFragment";
};
export type RunStatusFragment$key = {
  readonly " $data"?: RunStatusFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"RunStatusFragment">;
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
  "name": "RunStatusFragment",
  "selections": [
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

(node as any).hash = "5da6bf4ad376a0bf81aa9b3ec0549808";

export default node;
