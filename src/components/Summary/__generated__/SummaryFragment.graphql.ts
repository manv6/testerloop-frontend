/**
 * @generated SignedSource<<62a858e394419a8239dc6225f5bf3f11>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SummaryFragment$data = {
  readonly id: string;
  readonly " $fragmentSpreads": FragmentRefs<"ConsoleErrorCountFragment" | "EnvironmentDetailsFragment" | "NetworkErrorCountFragment">;
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
      "name": "id",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ConsoleErrorCountFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "NetworkErrorCountFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "EnvironmentDetailsFragment"
    }
  ],
  "type": "TestExecution",
  "abstractKey": null
};

(node as any).hash = "83b55df1a65368cff92500e5ce0b2f62";

export default node;
