/**
 * @generated SignedSource<<86cea8db289b31996215c0acfdd19faa>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type StepsFragment$data = {
  readonly id: string;
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
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "TestExecution",
  "abstractKey": null
};

(node as any).hash = "8b13132f1e8fab050afd4fa7bfaa3f60";

export default node;
