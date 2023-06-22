/**
 * @generated SignedSource<<88299185201c9084f734a6ed0b365993>>
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
      readonly at: any;
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
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "at",
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

(node as any).hash = "99d712617d474b075668790cb45d3080";

export default node;
