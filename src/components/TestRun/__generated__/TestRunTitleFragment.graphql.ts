/**
 * @generated SignedSource<<5376421f58f75e35b21b055e001b0d2d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TestRunTitleFragment$data = {
  readonly id: string;
  readonly " $fragmentType": "TestRunTitleFragment";
};
export type TestRunTitleFragment$key = {
  readonly " $data"?: TestRunTitleFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TestRunTitleFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TestRunTitleFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "TestRun",
  "abstractKey": null
};

(node as any).hash = "26db14308aaf7f25b44f03d04b2aa0a3";

export default node;
