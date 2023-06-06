/**
 * @generated SignedSource<<13a75ac6b9c2fab56a8a7cb782e58ad7>>
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

const node: ReaderFragment = {
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

(node as any).hash = "3a5c0a68f65fdc83adba5cf9a85526fb";

export default node;
