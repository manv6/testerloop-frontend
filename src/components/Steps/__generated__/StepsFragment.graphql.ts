/**
 * @generated SignedSource<<1dc3bbea9ad13ac85663f4be177a2201>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type StepsFragment$data = {
  readonly test: boolean;
  readonly " $fragmentType": "StepsFragment";
};
export type StepsFragment$key = {
  readonly " $data"?: StepsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"StepsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StepsFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "test",
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "43b364cba7c6da8a1c08508c77defe13";

export default node;
