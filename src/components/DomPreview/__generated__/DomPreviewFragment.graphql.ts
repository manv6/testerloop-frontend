/**
 * @generated SignedSource<<4110f2e66441b10fc3eabc00e2259c5e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DomPreviewFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"DomPreviewRendererFragment">;
  readonly " $fragmentType": "DomPreviewFragment";
};
export type DomPreviewFragment$key = {
  readonly " $data"?: DomPreviewFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DomPreviewFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DomPreviewFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "DomPreviewRendererFragment"
    }
  ],
  "type": "TestExecution",
  "abstractKey": null
};

(node as any).hash = "3f653d8a33da74a625a804a5690547f3";

export default node;
