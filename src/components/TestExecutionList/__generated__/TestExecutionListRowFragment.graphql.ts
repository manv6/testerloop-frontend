/**
 * @generated SignedSource<<9cf7022a06c7cc328f464fbf2900a579>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TestExecutionListRowFragment$data = {
  readonly node: {
    readonly at: any;
    readonly failedCommands: {
      readonly totalCount: number;
    };
    readonly id: string;
    readonly title: string;
    readonly until: any;
  } | null;
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
      "concreteType": "TestExecution",
      "kind": "LinkedField",
      "name": "node",
      "plural": false,
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
      "storageKey": null
    }
  ],
  "type": "TestExecutionEdge",
  "abstractKey": null
};

(node as any).hash = "30eb03fd158e99b8c46164a317f91cfe";

export default node;
