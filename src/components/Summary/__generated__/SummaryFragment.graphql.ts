/**
 * @generated SignedSource<<f43338b173349ee70f2a4f02be6871b5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SummaryFragment$data = {
  readonly test: boolean;
  readonly " $fragmentType": "SummaryFragment";
};
export type SummaryFragment$key = {
  readonly " $data"?: SummaryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SummaryFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SummaryFragment",
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

(node as any).hash = "7c93a9676176063e729ddf3fc0e00af6";

export default node;
