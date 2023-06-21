/**
 * @generated SignedSource<<17ee183be9363d0e86c6f7d3a7b744c3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RunSummaryFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"RunEnvironmentDetailsFragment" | "RunStatusFragment" | "TestCountFragment" | "TestRunDateTimeFragment" | "TestRunTitleFragment">;
  readonly " $fragmentType": "RunSummaryFragment";
};
export type RunSummaryFragment$key = {
  readonly " $data"?: RunSummaryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"RunSummaryFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RunSummaryFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "TestRunTitleFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "TestCountFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "TestRunDateTimeFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RunEnvironmentDetailsFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RunStatusFragment"
    }
  ],
  "type": "TestRun",
  "abstractKey": null
};

(node as any).hash = "9de3f86070e7f193140c6e150dfe464b";

export default node;
