/**
 * @generated SignedSource<<6a926f9706dd1f3f68eba1e833712d81>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ResponseTabFragment$data = {
  readonly response: {
    readonly body: {
      readonly data: string;
      readonly mimeType: string;
      readonly size: number;
    };
    readonly headers: {
      readonly values: ReadonlyArray<{
        readonly key: string;
        readonly value: string;
      }>;
    };
    readonly status: number;
    readonly transferSize: number;
  };
  readonly " $fragmentType": "ResponseTabFragment";
};
export type ResponseTabFragment$key = {
  readonly " $data"?: ResponseTabFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ResponseTabFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ResponseTabFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "HttpNetworkResponse",
      "kind": "LinkedField",
      "name": "response",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "status",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "transferSize",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "HttpResponseBody",
          "kind": "LinkedField",
          "name": "body",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "mimeType",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "data",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "size",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "HttpHeaders",
          "kind": "LinkedField",
          "name": "headers",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": [
                {
                  "kind": "Literal",
                  "name": "order",
                  "value": {
                    "by": "ALPHABETICAL",
                    "direction": "ASCENDING"
                  }
                }
              ],
              "concreteType": "KeyValuePair",
              "kind": "LinkedField",
              "name": "values",
              "plural": true,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "value",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "key",
                  "storageKey": null
                }
              ],
              "storageKey": "values(order:{\"by\":\"ALPHABETICAL\",\"direction\":\"ASCENDING\"})"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "HttpNetworkEvent",
  "abstractKey": null
};

(node as any).hash = "42a96eb69be56ff8b6ec3b17994d3f3d";

export default node;
