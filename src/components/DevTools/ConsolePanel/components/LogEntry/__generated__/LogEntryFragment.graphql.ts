/**
 * @generated SignedSource<<fadda4c759b99413bd0a44ef058380a6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type ConsoleLogLevel = "ERROR" | "INFO" | "LOG" | "WARN" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type LogEntryFragment$data = {
  readonly at: any;
  readonly logLevel: ConsoleLogLevel;
  readonly message: string;
  readonly " $fragmentType": "LogEntryFragment";
};
export type LogEntryFragment$key = {
  readonly " $data"?: LogEntryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"LogEntryFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LogEntryFragment",
  "selections": [
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
      "name": "message",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "logLevel",
      "storageKey": null
    }
  ],
  "type": "ConsoleLogEvent",
  "abstractKey": null
};

(node as any).hash = "3593e562b9809a843fbc4c6d49d83418";

export default node;
