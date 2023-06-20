/**
 * @generated SignedSource<<f13f7619c59211ee60a2a9aaed1dd147>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TestCountFragment$data = {
  readonly executions: {
    readonly totalCount: number;
  };
  readonly " $fragmentType": "TestCountFragment";
};
export type TestCountFragment$key = {
  readonly " $data"?: TestCountFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TestCountFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TestCountFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "TestExecutionConnection",
      "kind": "LinkedField",
      "name": "executions",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalCount",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "TestRun",
  "abstractKey": null
};

(node as any).hash = "75980784793b134ce17e0197a2bbec84";

export default node;
