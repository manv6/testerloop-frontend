/**
 * @generated SignedSource<<eaf0a89023573c3533664f1e265899d3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NetworkPanelFragment$data = {
  readonly test: boolean;
  readonly " $fragmentType": "NetworkPanelFragment";
};
export type NetworkPanelFragment$key = {
  readonly " $data"?: NetworkPanelFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"NetworkPanelFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NetworkPanelFragment",
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

(node as any).hash = "1ce4dcd691c5f448adbe4ab46f7ba294";

export default node;
