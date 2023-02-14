/**
 * @generated SignedSource<<e448b07e462eba3263c18a2c6ac88577>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TimelineControlsFragment$data = {
  readonly test: boolean;
  readonly " $fragmentType": "TimelineControlsFragment";
};
export type TimelineControlsFragment$key = {
  readonly " $data"?: TimelineControlsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TimelineControlsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TimelineControlsFragment",
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

(node as any).hash = "52c02c8a3c8194839152ab407148deba";

export default node;
