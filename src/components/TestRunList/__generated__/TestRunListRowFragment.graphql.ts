/**
 * @generated SignedSource<<7cb42e100ba2ed4f2a027b4cdf57bd64>>
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
  readonly " $fragmentSpreads": FragmentRefs<"TestRunTitleFragment">;
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "TestRunTitleFragment"
    }
  ],
  "type": "TestRun",
  "abstractKey": null
};

(node as any).hash = "44f7e75ef37b841a86f711702f91c096";

export default node;
