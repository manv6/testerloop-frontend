/**
 * @generated SignedSource<<730f399aef2146053fba3848a9979360>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RequestHeadersFragment$data = {
  readonly headers: {
    readonly values: ReadonlyArray<{
      readonly key: string;
      readonly value: string;
    }>;
  };
  readonly " $fragmentType": "RequestHeadersFragment";
};
export type RequestHeadersFragment$key = {
  readonly " $data"?: RequestHeadersFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"RequestHeadersFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RequestHeadersFragment",
  "selections": [
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
  "type": "HttpNetworkRequest",
  "abstractKey": null
};

(node as any).hash = "c9cbdda6f69686d7300b0cde6d2a1637";

export default node;
