/**
 * @generated SignedSource<<c879a0c1a07131c8e94a7b50a93a488b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TestRunListFragment$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly id: string;
      readonly " $fragmentSpreads": FragmentRefs<"TestRunListRowFragment">;
    };
  }>;
  readonly " $fragmentType": "TestRunListFragment";
};
export type TestRunListFragment$key = {
  readonly " $data"?: TestRunListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TestRunListFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TestRunListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "TestRunEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "TestRun",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
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
              "name": "TestRunListRowFragment"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "TestRunConnection",
  "abstractKey": null
};

(node as any).hash = "5ac8b77955bf2b2058d08c5b7b489987";

export default node;
