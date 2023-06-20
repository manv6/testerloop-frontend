/**
 * @generated SignedSource<<9a84453095f3e8beb0fc2c4eec276bea>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TestRunAuthorFragment$data = {
  readonly author: {
    readonly name: string;
  };
  readonly " $fragmentType": "TestRunAuthorFragment";
};
export type TestRunAuthorFragment$key = {
  readonly " $data"?: TestRunAuthorFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TestRunAuthorFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TestRunAuthorFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "author",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "GitRevision",
  "abstractKey": "__isGitRevision"
};

(node as any).hash = "e9b514fcfde4d1ce8e028a2aa1a7fd83";

export default node;
