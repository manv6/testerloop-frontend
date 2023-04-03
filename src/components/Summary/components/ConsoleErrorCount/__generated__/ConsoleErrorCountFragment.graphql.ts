/**
 * @generated SignedSource<<5f7e60c89acf512b2457e6b66ec52c9c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ConsoleErrorCountFragment$data = {
  readonly summaryConsoleErrors: {
    readonly totalCount: number;
  };
  readonly " $fragmentType": "ConsoleErrorCountFragment";
};
export type ConsoleErrorCountFragment$key = {
  readonly " $data"?: ConsoleErrorCountFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ConsoleErrorCountFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ConsoleErrorCountFragment",
  "selections": [
    {
      "alias": "summaryConsoleErrors",
      "args": [
        {
          "kind": "Literal",
          "name": "filter",
          "value": {
            "consoleFilter": {
              "logLevel": "ERROR"
            },
            "type": "CONSOLE"
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
      "storageKey": "events(filter:{\"consoleFilter\":{\"logLevel\":\"ERROR\"},\"type\":\"CONSOLE\"})"
    }
  ],
  "type": "TestExecution",
  "abstractKey": null
};

(node as any).hash = "e2f2a9809ef770426c2edc562c7947d1";

export default node;
