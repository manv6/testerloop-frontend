/**
 * @generated SignedSource<<4092af561d70a4cad0bfcbc7f7cfdb26>>
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
  readonly id: string;
  readonly logLevel: ConsoleLogLevel;
  readonly message: string;
  readonly stackTrace: {
    readonly " $fragmentSpreads": FragmentRefs<"StackTraceFragment">;
  };
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
      "name": "message",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "logLevel",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "StackTrace",
      "kind": "LinkedField",
      "name": "stackTrace",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "StackTraceFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ConsoleLogEvent",
  "abstractKey": null
};

(node as any).hash = "b077dd76b97da9749b5308cd3f507974";

export default node;
