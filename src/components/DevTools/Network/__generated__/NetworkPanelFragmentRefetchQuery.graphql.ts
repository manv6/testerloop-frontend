/**
 * @generated SignedSource<<4cc4dfee73caf74a357aa97de5b9825a>>
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
v9 = [
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
v10 = {
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
      "selections": (v9/*: any*/),
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
                                    "selections": (v9/*: any*/),
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
                                  (v10/*: any*/)
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
                                  (v10/*: any*/)
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
    "cacheID": "fb4ffbec20eaf6a2b464e90e3fed7d47",
    "id": null,
    "metadata": {},
    "name": "NetworkPanelFragmentRefetchQuery",
    "operationKind": "query",
    "text": "query NetworkPanelFragmentRefetchQuery(\n  $resourceType: [HttpNetworkEventResourceType!] = null\n  $urlSearch: String = null\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...NetworkPanelFragment_3ybCIS\n    id\n  }\n}\n\nfragment NetworkEventDetailPanelFragment on HttpNetworkEvent {\n  __typename\n  id\n  resourceType\n  at\n  until\n  initiator {\n    origin\n    lineNumber\n  }\n  ...RequestTabFragment\n  ...ResponseTabFragment\n}\n\nfragment NetworkPanelFragment_3ybCIS on TestExecution {\n  id\n  searchedNetworkEvents: events(filter: {type: NETWORK, networkFilter: {urlSearch: $urlSearch, resourceType: $resourceType}}) {\n    edges {\n      __typename\n      node {\n        __typename\n        ... on HttpNetworkEvent {\n          __typename\n          id\n          at\n          until\n          ...NetworkSliceFragment\n          ...NetworkEventDetailPanelFragment\n        }\n      }\n    }\n  }\n}\n\nfragment NetworkSliceFragment on HttpNetworkEvent {\n  __typename\n  id\n  resourceType\n  at\n  until\n  initiator {\n    origin\n    lineNumber\n  }\n  request {\n    method\n    body {\n      mimeType\n    }\n    queryString {\n      value\n      key\n    }\n    url {\n      url\n    }\n  }\n  response {\n    status\n    transferSize\n    body {\n      mimeType\n      size\n    }\n  }\n}\n\nfragment QueryParamsFragment on HttpNetworkRequest {\n  queryString {\n    value\n    key\n  }\n}\n\nfragment RequestDataFragment on HttpNetworkRequest {\n  body {\n    data\n    mimeType\n  }\n}\n\nfragment RequestHeadersFragment on HttpNetworkRequest {\n  headers {\n    values(order: {by: ALPHABETICAL, direction: ASCENDING}) {\n      value\n      key\n    }\n  }\n}\n\nfragment RequestTabFragment on HttpNetworkEvent {\n  request {\n    ...RequestHeadersFragment\n    ...RequestDataFragment\n    ...QueryParamsFragment\n    ...RequestToUrlFragment\n  }\n}\n\nfragment RequestToUrlFragment on HttpNetworkRequest {\n  url {\n    url\n  }\n}\n\nfragment ResponseDataFragment on HttpNetworkResponse {\n  body {\n    mimeType\n    data\n    size\n  }\n}\n\nfragment ResponseHeadersFragment on HttpNetworkResponse {\n  headers {\n    values(order: {by: ALPHABETICAL, direction: ASCENDING}) {\n      value\n      key\n    }\n  }\n}\n\nfragment ResponseTabFragment on HttpNetworkEvent {\n  response {\n    ...ResponseDataFragment\n    ...ResponseHeadersFragment\n  }\n}\n"
  }
};
})();

(node as any).hash = "f9bdb634d0af0d8626253b453eafd012";

export default node;
