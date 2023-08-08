/**
 * @generated SignedSource<<a943e63c18d6670afbe409b350912be9>>
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
    readonly cursor: any;
    readonly node: {
      readonly at: any;
      readonly title: string;
    } | null;
    readonly " $fragmentSpreads": FragmentRefs<"TestExecutionListRowFragment">;
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
          "kind": "ScalarField",
          "name": "cursor",
          "storageKey": null
        },
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
              "name": "at",
              "storageKey": null
            }
          ],
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
  "type": "TestExecutionConnection",
  "abstractKey": null
};

(node as any).hash = "3b2f3bd12b1c2f025c2da1423dbef156";

export default node;
