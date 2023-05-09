/**
 * @generated SignedSource<<c313ec6d208cd41f926b1f43df057188>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TestRunListRowFragment$data = {
  readonly executions: {
    readonly totalCount: number;
  };
  readonly id: string;
  readonly " $fragmentType": "TestRunListRowFragment";
};
export type TestRunListRowFragment$key = {
  readonly " $data"?: TestRunListRowFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TestRunListRowFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TestRunListRowFragment",
  "selections": [
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
      "concreteType": "TestExecutionConnection",
      "kind": "LinkedField",
      "name": "executions",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalCount",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "TestRun",
  "abstractKey": null
};

(node as any).hash = "329e61b74c69038f5f1fb67610a200af";

export default node;
