/**
 * @generated SignedSource<<e82cebfa43222f11aec5c53fe6c417b9>>
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
      "kind": "Defer",
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "DomPreviewRendererFragment"
        }
      ]
    }
  ],
  "type": "TestExecution",
  "abstractKey": null
};

(node as any).hash = "1932fb05a77ccf3ee0eaf84e44e76192";

export default node;
