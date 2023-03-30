/**
 * @generated SignedSource<<ce151725db5d30216233d1b95761625d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NetworkSliceFragment$data = {
  readonly __typename: "HttpNetworkEvent";
  readonly at: any;
  readonly id: string;
  readonly initiator: {
    readonly lineNumber: number | null;
    readonly origin: string | null;
  };
  readonly request: {
    readonly body: {
      readonly mimeType: string;
    } | null;
    readonly method: string;
    readonly queryString: ReadonlyArray<{
      readonly key: string;
      readonly value: string;
    }>;
    readonly url: {
      readonly url: string;
    };
  };
  readonly resourceType: string | null;
  readonly response: {
    readonly body: {
      readonly mimeType: string;
      readonly size: number;
    };
    readonly status: number;
    readonly transferSize: number;
  };
  readonly until: any;
  readonly " $fragmentType": "NetworkSliceFragment";
};
export type NetworkSliceFragment$key = {
  readonly " $data"?: NetworkSliceFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"NetworkSliceFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "mimeType",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NetworkSliceFragment",
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
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "resourceType",
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
      "name": "until",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "HttpNetworkEventInitiator",
      "kind": "LinkedField",
      "name": "initiator",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "origin",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "lineNumber",
          "storageKey": null
        }
      ],
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
            (v0/*: any*/)
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
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "size",
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

(node as any).hash = "6191ad17fd9cd60ddcc1b50733db0a05";

export default node;
