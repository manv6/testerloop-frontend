/**
 * @generated SignedSource<<f1b3ba77eba52dc72914b17019765591>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NetworkEventDetailPanelFragment$data = {
  readonly __typename: "HttpNetworkEvent";
  readonly at: any;
  readonly id: string;
  readonly initiator: {
    readonly lineNumber: number | null;
    readonly origin: string | null;
  };
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
  readonly resourceType: string | null;
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
  readonly until: any;
  readonly " $fragmentType": "NetworkEventDetailPanelFragment";
};
export type NetworkEventDetailPanelFragment$key = {
  readonly " $data"?: NetworkEventDetailPanelFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"NetworkEventDetailPanelFragment">;
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
      "selections": (v3/*: any*/),
      "storageKey": "values(order:{\"by\":\"ALPHABETICAL\",\"direction\":\"ASCENDING\"})"
    }
  ],
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NetworkEventDetailPanelFragment",
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
            (v1/*: any*/),
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

(node as any).hash = "7ca4d4988c8b3a6509e94358d1602c08";

export default node;
