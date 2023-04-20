/**
 * @generated SignedSource<<6d48faffec219797a8506a07febf343a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FrameworkErrorFragment$data = {
  readonly frameworkError: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly error?: {
          readonly message: string;
          readonly stackTrace: string;
          readonly type: string;
          readonly url: string;
          readonly urlText: string;
        } | null;
        readonly id?: string;
      };
    }>;
  };
  readonly " $fragmentType": "FrameworkErrorFragment";
};
export type FrameworkErrorFragment$key = {
  readonly " $data"?: FrameworkErrorFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"FrameworkErrorFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FrameworkErrorFragment",
  "selections": [
    {
      "alias": "frameworkError",
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
          "concreteType": "TestExecutionEventEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": null,
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "kind": "InlineFragment",
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
                      "concreteType": "CommandEventError",
                      "kind": "LinkedField",
                      "name": "error",
                      "plural": false,
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "type",
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
                          "name": "stackTrace",
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "url",
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "urlText",
                          "storageKey": null
                        }
                      ],
                      "storageKey": null
                    }
                  ],
                  "type": "CommandEvent",
                  "abstractKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "events(filter:{\"commandFilter\":{\"status\":\"FAILED\"},\"type\":\"COMMAND\"})"
    }
  ],
  "type": "TestExecution",
  "abstractKey": null
};

(node as any).hash = "3ae8f92b0af4781422522ca3944788dc";

export default node;
