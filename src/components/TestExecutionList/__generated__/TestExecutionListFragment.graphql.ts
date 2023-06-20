/**
 * @generated SignedSource<<15871f9c0e8a720c0a95d67f267e1899>>
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
      readonly title: string;
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
              "name": "title",
              "storageKey": null
            },
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

(node as any).hash = "77b0fcae746e59c8118ded05135860a4";

export default node;
