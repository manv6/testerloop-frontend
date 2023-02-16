/**
 * @generated SignedSource<<22e2efe7886f11f5fcae3c8ba00afafd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type ConsoleLogLevel = "ERROR" | "INFO" | "LOG" | "WARN" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type ConsolePanelFragment$data = {
  readonly events: {
    readonly edges: ReadonlyArray<{
      readonly __typename: "TestExecutionEventEdge";
      readonly node: {
        readonly at: any;
        readonly logLevel?: ConsoleLogLevel;
        readonly message?: string;
      };
    }>;
  };
  readonly id: string;
  readonly " $fragmentType": "ConsolePanelFragment";
};
export type ConsolePanelFragment$key = {
  readonly " $data"?: ConsolePanelFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ConsolePanelFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ConsolePanelFragment",
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
      "args": [
        {
          "kind": "Literal",
          "name": "type",
          "value": "CONSOLE"
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
          "concreteType": "TestExecutionEventEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "__typename",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": null,
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "at",
                  "storageKey": null
                },
                {
                  "kind": "InlineFragment",
                  "selections": [
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
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "events(type:\"CONSOLE\")"
    }
  ],
  "type": "TestExecution",
  "abstractKey": null
};

(node as any).hash = "134a3cd89fb0ac57b51fa55cef3a1b0c";

export default node;
