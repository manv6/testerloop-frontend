/**
 * @generated SignedSource<<7ace5cdc94a5af770cc3113a345581cb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
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
  "argumentDefinitions": [
    {
      "defaultValue": false,
      "kind": "LocalArgument",
      "name": "open"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./LogEntryRefetchQuery.graphql'),
      "identifierField": "id"
    }
  },
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
          "condition": "open",
          "kind": "Condition",
          "passingValue": true,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "StackTraceFragment"
            }
          ]
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ConsoleLogEvent",
  "abstractKey": null
};

(node as any).hash = "47d4a72b873e687da69ad68ed82890f7";

export default node;
