/**
 * @generated SignedSource<<3e5758884fdb61ac5680b121124a1cf9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TestRunBranchFragment$data = {
  readonly branch: {
    readonly name: string;
    readonly url: any;
  } | null;
  readonly " $fragmentType": "TestRunBranchFragment";
};
export type TestRunBranchFragment$key = {
  readonly " $data"?: TestRunBranchFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TestRunBranchFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TestRunBranchFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "GitHubBranch",
      "kind": "LinkedField",
      "name": "branch",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "url",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "GitHubRevision",
  "abstractKey": null
};

(node as any).hash = "18153568d5f02ce670a338b43d05d1f2";

export default node;
