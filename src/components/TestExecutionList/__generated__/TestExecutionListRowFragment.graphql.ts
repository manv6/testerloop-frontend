/**
 * @generated SignedSource<<df2e86611c231524d7540b9ca47753ba>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TestExecutionListRowFragment$data = {
  readonly at: any;
  readonly failedCommands: {
    readonly totalCount: number;
  };
  readonly id: string;
  readonly title: string;
  readonly until: any;
  readonly " $fragmentType": "TestExecutionListRowFragment";
};
export type TestExecutionListRowFragment$key = {
  readonly " $data"?: TestExecutionListRowFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TestExecutionListRowFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TestExecutionListRowFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "at",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "until",
      "storageKey": null
    },
    {
      "alias": "failedCommands",
      "args": [
        {
          "kind": "Literal",
          "name": "filter",
          "value": {
            "commandFilter": {
              "status": "FAILED"
            },
            "type": "COMMAND"
          }
        }
      ],
      "concreteType": "TestExecutionEventConnection",
      "kind": "LinkedField",
      "name": "events",
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
      "storageKey": "events(filter:{\"commandFilter\":{\"status\":\"FAILED\"},\"type\":\"COMMAND\"})"
    }
  ],
  "type": "TestExecution",
  "abstractKey": null
};

(node as any).hash = "861f206f6f79489f5f6a2fbc7125fa7a";

export default node;
