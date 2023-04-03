/**
 * @generated SignedSource<<db6e2cfeab81b63c97b4a4e7fb319b18>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ResponseHeadersFragment$data = {
  readonly headers: {
    readonly values: ReadonlyArray<{
      readonly key: string;
      readonly value: string;
    }>;
  };
  readonly " $fragmentType": "ResponseHeadersFragment";
};
export type ResponseHeadersFragment$key = {
  readonly " $data"?: ResponseHeadersFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ResponseHeadersFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ResponseHeadersFragment",
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
  "type": "HttpNetworkResponse",
  "abstractKey": null
};

(node as any).hash = "f3fae8c5de96ae8638917b255f6bbf3f";

export default node;
