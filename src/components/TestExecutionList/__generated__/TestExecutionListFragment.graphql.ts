/**
 * @generated SignedSource<<2d87131c34f96d4da760c729887fcecd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TestExecutionListFragment$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly id: string;
      readonly " $fragmentSpreads": FragmentRefs<"TestExecutionListRowFragment">;
    };
  }>;
  readonly " $fragmentType": "TestExecutionListFragment";
};
export type TestExecutionListFragment$key = {
  readonly " $data"?: TestExecutionListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TestExecutionListFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TestExecutionListFragment",
  "selections": [
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
              "name": "id",
              "storageKey": null
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "TestExecutionListRowFragment"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "TestExecutionConnection",
  "abstractKey": null
};

(node as any).hash = "864cba3d464fa5169abc8f82861be37c";

export default node;
