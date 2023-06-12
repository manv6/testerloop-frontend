/**
 * @generated SignedSource<<35e0df5b4747ce8e7e3aae13bf51480c>>
 * @relayHash dc237b051a16fe520e99023449247b24
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 572dbdc6bddc617d3e5aa4315be2d417d004c2a1d22c461559f494dd34f79387

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NetworkEventDetailPanelQuery$variables = {
  httpNetworkEventId: string;
};
export type NetworkEventDetailPanelQuery$data = {
  readonly httpNetworkEvent: {
    readonly __typename: "HttpNetworkEvent";
    readonly at: any;
    readonly id: string;
    readonly initiator: {
      readonly lineNumber: number | null;
      readonly origin: string | null;
    };
    readonly resourceType: string | null;
    readonly until: any;
    readonly " $fragmentSpreads": FragmentRefs<"RequestTabFragment" | "ResponseTabFragment">;
  } | null;
};
export type NetworkEventDetailPanelQuery = {
  response: NetworkEventDetailPanelQuery$data;
  variables: NetworkEventDetailPanelQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "httpNetworkEventId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "httpNetworkEventId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "resourceType",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "at",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "until",
  "storageKey": null
},
v7 = {
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
v8 = [
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
v9 = {
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
      "selections": (v8/*: any*/),
      "storageKey": "values(order:{\"by\":\"ALPHABETICAL\",\"direction\":\"ASCENDING\"})"
    }
  ],
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "data",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "mimeType",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "NetworkEventDetailPanelQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "HttpNetworkEvent",
        "kind": "LinkedField",
        "name": "httpNetworkEvent",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RequestTabFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ResponseTabFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NetworkEventDetailPanelQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "HttpNetworkEvent",
        "kind": "LinkedField",
        "name": "httpNetworkEvent",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "HttpNetworkRequest",
            "kind": "LinkedField",
            "name": "request",
            "plural": false,
            "selections": [
              (v9/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "HttpRequestBody",
                "kind": "LinkedField",
                "name": "body",
                "plural": false,
                "selections": [
                  (v10/*: any*/),
                  (v11/*: any*/)
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
                "selections": (v8/*: any*/),
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
                  (v11/*: any*/),
                  (v10/*: any*/),
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
              (v9/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "572dbdc6bddc617d3e5aa4315be2d417d004c2a1d22c461559f494dd34f79387",
    "metadata": {},
    "name": "NetworkEventDetailPanelQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "ceab602e3bb55da9f35c422f9d0125d3";

export default node;
