/**
 * @generated SignedSource<<aa3f78fb7fb9e2537402550b05c12c93>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DomPreviewRendererFragment$data = {
  readonly domPreviewEvents: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly at: any;
        readonly nextSnapshot?: {
          readonly dom: string;
        } | null;
        readonly previousSnapshot?: {
          readonly dom: string;
        } | null;
        readonly " $fragmentSpreads": FragmentRefs<"SnapshotEventRendererFragment">;
      };
    }>;
  };
  readonly " $fragmentType": "DomPreviewRendererFragment";
};
export type DomPreviewRendererFragment$key = {
  readonly " $data"?: DomPreviewRendererFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DomPreviewRendererFragment">;
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
  "name": "DomPreviewRendererFragment",
  "selections": [
    {
      "alias": "domPreviewEvents",
      "args": [
        {
          "kind": "Literal",
          "name": "filter",
          "value": {
            "type": [
              "COMMAND",
              "STEP"
            ]
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
                  "name": "at",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "SnapshotEventRendererFragment"
                },
                {
                  "kind": "InlineFragment",
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
                  "type": "SnapshotEvent",
                  "abstractKey": "__isSnapshotEvent"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "events(filter:{\"type\":[\"COMMAND\",\"STEP\"]})"
    }
  ],
  "type": "TestExecution",
  "abstractKey": null
};
})();

(node as any).hash = "b422f7c964e95dd68e6dd470429d9c2e";

export default node;
