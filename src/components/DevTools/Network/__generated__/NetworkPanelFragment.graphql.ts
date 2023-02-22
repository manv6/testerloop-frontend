/**
 * @generated SignedSource<<7e099e3478f8e67f0541e94adc99dd5c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NetworkPanelFragment$data = {
  readonly id: string;
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
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "TestExecution",
  "abstractKey": null
};

(node as any).hash = "8cd6dbc1797f9f27989558405ee2ab65";

export default node;
