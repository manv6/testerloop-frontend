/**
 * @generated SignedSource<<3aac57b1354c664a6dd38c146341d1af>>
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

(node as any).hash = "0595dad469c6390188cba51253789d1e";

export default node;
