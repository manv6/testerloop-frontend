/**
 * @generated SignedSource<<8c51f4ba264687991866ef04a9a9df49>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TimelineControlsFragment$data = {
  readonly id: string;
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
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "TestExecution",
  "abstractKey": null
};

(node as any).hash = "2c43c11708a7725ff47c9d7d89b5f642";

export default node;
