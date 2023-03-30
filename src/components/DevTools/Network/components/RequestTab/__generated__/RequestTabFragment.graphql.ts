/**
 * @generated SignedSource<<a3264286816bbc1c29d8471c3bd08d15>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RequestTabFragment$data = {
  readonly request: {
    readonly body: {
      readonly data: string;
      readonly mimeType: string;
    } | null;
    readonly cookies: ReadonlyArray<{
      readonly name: string;
      readonly value: string;
    } | null>;
    readonly headers: {
      readonly values: ReadonlyArray<{
        readonly key: string;
        readonly value: string;
      }>;
    };
    readonly method: string;
    readonly queryString: ReadonlyArray<{
      readonly key: string;
      readonly value: string;
    }>;
    readonly url: {
      readonly url: string;
    };
  };
  readonly " $fragmentType": "RequestTabFragment";
};
export type RequestTabFragment$key = {
  readonly " $data"?: RequestTabFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"RequestTabFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v1 = [
  (v0/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "key",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RequestTabFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "HttpNetworkRequest",
      "kind": "LinkedField",
      "name": "request",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "method",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "HttpRequestBody",
          "kind": "LinkedField",
          "name": "body",
          "plural": false,
          "selections": [
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
              "name": "mimeType",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Cookie",
          "kind": "LinkedField",
          "name": "cookies",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "name",
              "storageKey": null
            },
            (v0/*: any*/)
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
              "selections": (v1/*: any*/),
              "storageKey": "values(order:{\"by\":\"ALPHABETICAL\",\"direction\":\"ASCENDING\"})"
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "KeyValuePair",
          "kind": "LinkedField",
          "name": "queryString",
          "plural": true,
          "selections": (v1/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "HttpNetworkRequestUrl",
          "kind": "LinkedField",
          "name": "url",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "url",
              "storageKey": null
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
})();

(node as any).hash = "0e7f9757769632bef3e4ef7b9c6019e0";

export default node;
