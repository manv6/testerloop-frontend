/**
 * @generated SignedSource<<a39b1ee1aa6540bc6bc3c8f713c3cdaa>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HttpNetworkEventResourceType = "DOCUMENT" | "FONT" | "IMAGE" | "OTHER" | "SCRIPT" | "STYLESHEET" | "XHR" | "%future added value";
export type NetworkPanelFragmentRefetchQuery$variables = {
  id: string;
  resourceType?: ReadonlyArray<HttpNetworkEventResourceType> | null;
  urlSearch?: string | null;
};
export type NetworkPanelFragmentRefetchQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"NetworkPanelFragment">;
  } | null;
};
export type NetworkPanelFragmentRefetchQuery = {
  response: NetworkPanelFragmentRefetchQuery$data;
  variables: NetworkPanelFragmentRefetchQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "resourceType"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "urlSearch"
},
v3 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v4 = [
  {
    "kind": "Variable",
    "name": "resourceType",
    "variableName": "resourceType"
  },
  {
    "kind": "Variable",
    "name": "urlSearch",
    "variableName": "urlSearch"
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "mimeType",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "data",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v10 = [
  (v9/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "key",
    "storageKey": null
  }
],
v11 = {
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
      "selections": (v10/*: any*/),
      "storageKey": "values(order:{\"by\":\"ALPHABETICAL\",\"direction\":\"ASCENDING\"})"
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "NetworkPanelFragmentRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": (v4/*: any*/),
            "kind": "FragmentSpread",
            "name": "NetworkPanelFragment"
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
    "argumentDefinitions": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "NetworkPanelFragmentRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": "searchedNetworkEvents",
                "args": [
                  {
                    "fields": [
                      {
                        "fields": (v4/*: any*/),
                        "kind": "ObjectValue",
                        "name": "networkFilter"
                      },
                      {
                        "kind": "Literal",
                        "name": "type",
                        "value": "NETWORK"
                      }
                    ],
                    "kind": "ObjectValue",
                    "name": "filter"
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
                      (v5/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v5/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v6/*: any*/),
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
                                "kind": "ScalarField",
                                "name": "resourceType",
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
                                      (v7/*: any*/),
                                      (v8/*: any*/)
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
                                    "selections": (v10/*: any*/),
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
                                      (v9/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  (v11/*: any*/)
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
                                      (v7/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "size",
                                        "storageKey": null
                                      },
                                      (v8/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  (v11/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "type": "HttpNetworkEvent",
                            "abstractKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "TestExecution",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "955d88670ded26b6bb43460838fe4e64",
    "id": null,
    "metadata": {},
    "name": "NetworkPanelFragmentRefetchQuery",
    "operationKind": "query",
    "text": "query NetworkPanelFragmentRefetchQuery(\n  $resourceType: [HttpNetworkEventResourceType!] = null\n  $urlSearch: String = null\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...NetworkPanelFragment_3ybCIS\n    id\n  }\n}\n\nfragment NetworkEventDetailPanelFragment on HttpNetworkEvent {\n  __typename\n  id\n  resourceType\n  at\n  until\n  initiator {\n    origin\n    lineNumber\n  }\n  request {\n    method\n    body {\n      data\n      mimeType\n    }\n    cookies {\n      name\n      value\n    }\n    headers {\n      values(order: {by: ALPHABETICAL, direction: ASCENDING}) {\n        value\n        key\n      }\n    }\n    queryString {\n      value\n      key\n    }\n    url {\n      url\n    }\n  }\n  response {\n    status\n    transferSize\n    body {\n      mimeType\n      data\n      size\n    }\n    headers {\n      values(order: {by: ALPHABETICAL, direction: ASCENDING}) {\n        value\n        key\n      }\n    }\n  }\n}\n\nfragment NetworkPanelFragment_3ybCIS on TestExecution {\n  id\n  searchedNetworkEvents: events(filter: {type: NETWORK, networkFilter: {urlSearch: $urlSearch, resourceType: $resourceType}}) {\n    edges {\n      __typename\n      node {\n        __typename\n        ... on HttpNetworkEvent {\n          __typename\n          id\n          at\n          until\n          ...RequestSliceFragment\n          ...NetworkEventDetailPanelFragment\n        }\n      }\n    }\n  }\n}\n\nfragment RequestSliceFragment on HttpNetworkEvent {\n  __typename\n  id\n  resourceType\n  at\n  until\n  initiator {\n    origin\n    lineNumber\n  }\n  request {\n    method\n    body {\n      mimeType\n    }\n    queryString {\n      value\n      key\n    }\n    url {\n      url\n    }\n  }\n  response {\n    status\n    transferSize\n    body {\n      mimeType\n      size\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "cb5428c4bdf45d48a04c845b76bc6a12";

export default node;
