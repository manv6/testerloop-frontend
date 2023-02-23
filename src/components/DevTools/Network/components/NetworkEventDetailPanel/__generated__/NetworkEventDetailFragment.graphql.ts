/**
 * @generated SignedSource<<6c69e92f5694a99fb7f5e5c4f76cfa13>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NetworkEventDetailFragment$data = {
  readonly id: string;
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
    readonly queryString: ReadonlyArray<{
      readonly key: string;
      readonly value: string;
    }>;
    readonly url: {
      readonly url: string;
    };
  };
  readonly response: {
    readonly body: {
      readonly data: string;
      readonly mimeType: string;
    };
    readonly headers: {
      readonly values: ReadonlyArray<{
        readonly key: string;
        readonly value: string;
      }>;
    };
  };
  readonly " $fragmentType": "NetworkEventDetailFragment";
};
export type NetworkEventDetailFragment$key = {
  readonly " $data"?: NetworkEventDetailFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"NetworkEventDetailFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "data",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "mimeType",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v3 = [
  (v2/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "key",
    "storageKey": null
  }
],
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "HttpHeaders",
  "kind": "LinkedField",
  "name": "headers",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "KeyValuePair",
      "kind": "LinkedField",
      "name": "values",
      "plural": true,
      "selections": (v3/*: any*/),
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NetworkEventDetailFragment",
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
      "concreteType": "HttpNetworkRequest",
      "kind": "LinkedField",
      "name": "request",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "HttpRequestBody",
          "kind": "LinkedField",
          "name": "body",
          "plural": false,
          "selections": [
            (v0/*: any*/),
            (v1/*: any*/)
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
            (v2/*: any*/)
          ],
          "storageKey": null
        },
        (v4/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "KeyValuePair",
          "kind": "LinkedField",
          "name": "queryString",
          "plural": true,
          "selections": (v3/*: any*/),
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
    },
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
          "concreteType": "HttpResponseBody",
          "kind": "LinkedField",
          "name": "body",
          "plural": false,
          "selections": [
            (v1/*: any*/),
            (v0/*: any*/)
          ],
          "storageKey": null
        },
        (v4/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "HttpNetworkEvent",
  "abstractKey": null
};
})();

(node as any).hash = "ff51d664e666f4109f9b47058336abaa";

export default node;
