/**
 * @generated SignedSource<<61b7f192442e52fb919dd6c840e986d7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RunEnvironmentDetailsFragment$data = {
  readonly testCodeRevision: {
    readonly " $fragmentSpreads": FragmentRefs<"TestRunAuthorFragment" | "TestRunBranchFragment">;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"TestCountFragment" | "TestRunDateTimeFragment">;
  readonly " $fragmentType": "RunEnvironmentDetailsFragment";
};
export type RunEnvironmentDetailsFragment$key = {
  readonly " $data"?: RunEnvironmentDetailsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"RunEnvironmentDetailsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RunEnvironmentDetailsFragment",
  "selections": [
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
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "testCodeRevision",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "TestRunBranchFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "TestRunAuthorFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "TestRun",
  "abstractKey": null
};

(node as any).hash = "ec76b978abfd0c181c885364763cdc2e";

export default node;
