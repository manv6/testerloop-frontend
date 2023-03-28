/**
 * @generated SignedSource<<40b0e74df45f0558adce069894113dff>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppQuery$variables = {
  testExecutionId: string;
};
export type AppQuery$data = {
  readonly testExecution: {
    readonly " $fragmentSpreads": FragmentRefs<"ConsolePanelFragment" | "NetworkPanelFragment" | "SeekerFragment" | "StepsFragment" | "SummaryFragment">;
  } | null;
};
export type AppQuery = {
  response: AppQuery$data;
  variables: AppQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "testExecutionId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "testExecutionId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "kind": "Literal",
  "name": "logSearch",
  "value": null
},
v4 = {
  "kind": "Literal",
  "name": "type",
  "value": "CONSOLE"
},
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
  "name": "at",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "message",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "logLevel",
  "storageKey": null
},
v9 = {
  "kind": "InlineFragment",
  "selections": [
    (v2/*: any*/)
  ],
  "type": "HttpNetworkEvent",
  "abstractKey": null
},
v10 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "totalCount",
    "storageKey": null
  }
],
v11 = [
  {
    "kind": "Literal",
    "name": "filter",
    "value": {
      "type": "NETWORK"
    }
  }
],
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "concreteType": "HttpNetworkResponse",
  "kind": "LinkedField",
  "name": "response",
  "plural": false,
  "selections": [
    (v12/*: any*/)
  ],
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "method",
  "storageKey": null
},
v15 = {
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
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "until",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "data",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "mimeType",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v20 = [
  (v19/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "key",
    "storageKey": null
  }
],
v21 = {
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
      "selections": (v20/*: any*/),
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "TestExecution",
        "kind": "LinkedField",
        "name": "testExecution",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ConsolePanelFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SeekerFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "NetworkPanelFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SummaryFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "StepsFragment"
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
    "name": "AppQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "TestExecution",
        "kind": "LinkedField",
        "name": "testExecution",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": "searchedEvents",
            "args": [
              {
                "fields": [
                  {
                    "fields": [
                      {
                        "kind": "Literal",
                        "name": "logLevel",
                        "value": null
                      },
                      (v3/*: any*/)
                    ],
                    "kind": "ObjectValue",
                    "name": "consoleFilter"
                  },
                  (v4/*: any*/)
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
                          (v7/*: any*/),
                          (v8/*: any*/)
                        ],
                        "type": "ConsoleLogEvent",
                        "abstractKey": null
                      },
                      (v9/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "events(filter:{\"consoleFilter\":{\"logLevel\":null,\"logSearch\":null},\"type\":\"CONSOLE\"})"
          },
          {
            "alias": "warnings",
            "args": [
              {
                "fields": [
                  {
                    "fields": [
                      {
                        "kind": "Literal",
                        "name": "logLevel",
                        "value": "WARN"
                      },
                      (v3/*: any*/)
                    ],
                    "kind": "ObjectValue",
                    "name": "consoleFilter"
                  },
                  (v4/*: any*/)
                ],
                "kind": "ObjectValue",
                "name": "filter"
              }
            ],
            "concreteType": "TestExecutionEventConnection",
            "kind": "LinkedField",
            "name": "events",
            "plural": false,
            "selections": (v10/*: any*/),
            "storageKey": "events(filter:{\"consoleFilter\":{\"logLevel\":\"WARN\",\"logSearch\":null},\"type\":\"CONSOLE\"})"
          },
          {
            "alias": "errors",
            "args": [
              {
                "fields": [
                  {
                    "fields": [
                      {
                        "kind": "Literal",
                        "name": "logLevel",
                        "value": "ERROR"
                      },
                      (v3/*: any*/)
                    ],
                    "kind": "ObjectValue",
                    "name": "consoleFilter"
                  },
                  (v4/*: any*/)
                ],
                "kind": "ObjectValue",
                "name": "filter"
              }
            ],
            "concreteType": "TestExecutionEventConnection",
            "kind": "LinkedField",
            "name": "events",
            "plural": false,
            "selections": (v10/*: any*/),
            "storageKey": "events(filter:{\"consoleFilter\":{\"logLevel\":\"ERROR\",\"logSearch\":null},\"type\":\"CONSOLE\"})"
          },
          {
            "alias": "logs",
            "args": [
              {
                "fields": [
                  {
                    "fields": [
                      {
                        "kind": "Literal",
                        "name": "logLevel",
                        "value": "LOG"
                      },
                      (v3/*: any*/)
                    ],
                    "kind": "ObjectValue",
                    "name": "consoleFilter"
                  },
                  (v4/*: any*/)
                ],
                "kind": "ObjectValue",
                "name": "filter"
              }
            ],
            "concreteType": "TestExecutionEventConnection",
            "kind": "LinkedField",
            "name": "events",
            "plural": false,
            "selections": (v10/*: any*/),
            "storageKey": "events(filter:{\"consoleFilter\":{\"logLevel\":\"LOG\",\"logSearch\":null},\"type\":\"CONSOLE\"})"
          },
          {
            "alias": "seekerNetworkEvents",
            "args": (v11/*: any*/),
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
                          (v2/*: any*/),
                          (v13/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "HttpNetworkRequest",
                            "kind": "LinkedField",
                            "name": "request",
                            "plural": false,
                            "selections": [
                              (v14/*: any*/),
                              (v15/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v6/*: any*/),
                          (v16/*: any*/)
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
            "storageKey": "events(filter:{\"type\":\"NETWORK\"})"
          },
          {
            "alias": "searchedNetworkEvents",
            "args": (v11/*: any*/),
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
                          (v2/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "resourceType",
                            "storageKey": null
                          },
                          (v6/*: any*/),
                          (v16/*: any*/),
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
                              (v14/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "HttpRequestBody",
                                "kind": "LinkedField",
                                "name": "body",
                                "plural": false,
                                "selections": [
                                  (v17/*: any*/),
                                  (v18/*: any*/)
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
                                  (v19/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v21/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "KeyValuePair",
                                "kind": "LinkedField",
                                "name": "queryString",
                                "plural": true,
                                "selections": (v20/*: any*/),
                                "storageKey": null
                              },
                              (v15/*: any*/)
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
                              (v12/*: any*/),
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
                                  (v18/*: any*/),
                                  (v17/*: any*/),
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
                              (v21/*: any*/)
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
            "storageKey": "events(filter:{\"type\":\"NETWORK\"})"
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "filter",
                "value": {
                  "type": "CONSOLE"
                }
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
                      (v6/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v7/*: any*/),
                          (v8/*: any*/)
                        ],
                        "type": "ConsoleLogEvent",
                        "abstractKey": null
                      },
                      (v9/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "events(filter:{\"type\":\"CONSOLE\"})"
          },
          {
            "alias": "summaryConsoleErrors",
            "args": [
              {
                "kind": "Literal",
                "name": "filter",
                "value": {
                  "consoleFilter": {
                    "logLevel": "ERROR"
                  },
                  "type": "CONSOLE"
                }
              }
            ],
            "concreteType": "TestExecutionEventConnection",
            "kind": "LinkedField",
            "name": "events",
            "plural": false,
            "selections": (v10/*: any*/),
            "storageKey": "events(filter:{\"consoleFilter\":{\"logLevel\":\"ERROR\"},\"type\":\"CONSOLE\"})"
          },
          {
            "alias": "summaryNetworkEvents",
            "args": (v11/*: any*/),
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
                          (v13/*: any*/),
                          (v2/*: any*/)
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
            "storageKey": "events(filter:{\"type\":\"NETWORK\"})"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6cd92c24db9c2922154d0810a945fe56",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery(\n  $testExecutionId: ID!\n) {\n  testExecution(id: $testExecutionId) {\n    ...ConsolePanelFragment\n    ...SeekerFragment\n    ...NetworkPanelFragment\n    ...SummaryFragment\n    ...StepsFragment\n    id\n  }\n}\n\nfragment ConsolePanelFragment on TestExecution {\n  id\n  searchedEvents: events(filter: {type: CONSOLE, consoleFilter: {}}) {\n    edges {\n      __typename\n      node {\n        __typename\n        ... on ConsoleLogEvent {\n          at\n          ...LogEntryFragment\n        }\n        ... on HttpNetworkEvent {\n          id\n        }\n      }\n    }\n  }\n  ...LogFiltersFragment_qvNWU\n}\n\nfragment LogEntryFragment on ConsoleLogEvent {\n  at\n  message\n  logLevel\n}\n\nfragment LogFiltersFragment_qvNWU on TestExecution {\n  warnings: events(filter: {type: CONSOLE, consoleFilter: {logLevel: WARN}}) {\n    totalCount\n  }\n  errors: events(filter: {type: CONSOLE, consoleFilter: {logLevel: ERROR}}) {\n    totalCount\n  }\n  logs: events(filter: {type: CONSOLE, consoleFilter: {logLevel: LOG}}) {\n    totalCount\n  }\n  id\n}\n\nfragment NetworkPanelFragment on TestExecution {\n  id\n  searchedNetworkEvents: events(filter: {type: NETWORK}) {\n    edges {\n      __typename\n      node {\n        __typename\n        ... on HttpNetworkEvent {\n          __typename\n          id\n          resourceType\n          at\n          until\n          initiator {\n            origin\n            lineNumber\n          }\n          request {\n            method\n            body {\n              data\n              mimeType\n            }\n            cookies {\n              name\n              value\n            }\n            headers {\n              values {\n                value\n                key\n              }\n            }\n            queryString {\n              value\n              key\n            }\n            url {\n              url\n            }\n          }\n          response {\n            status\n            transferSize\n            body {\n              mimeType\n              data\n              size\n            }\n            headers {\n              values {\n                value\n                key\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment SeekerFragment on TestExecution {\n  id\n  seekerNetworkEvents: events(filter: {type: NETWORK}) {\n    edges {\n      node {\n        __typename\n        ... on HttpNetworkEvent {\n          id\n          response {\n            status\n          }\n          request {\n            method\n            url {\n              url\n            }\n          }\n          at\n          until\n        }\n      }\n    }\n  }\n}\n\nfragment StepsFragment on TestExecution {\n  id\n}\n\nfragment SummaryFragment on TestExecution {\n  id\n  events(filter: {type: CONSOLE}) {\n    edges {\n      __typename\n      node {\n        __typename\n        at\n        ... on ConsoleLogEvent {\n          at\n          message\n          logLevel\n        }\n        ... on HttpNetworkEvent {\n          id\n        }\n      }\n    }\n  }\n  summaryConsoleErrors: events(filter: {type: CONSOLE, consoleFilter: {logLevel: ERROR}}) {\n    totalCount\n  }\n  summaryNetworkEvents: events(filter: {type: NETWORK}) {\n    edges {\n      node {\n        __typename\n        ... on HttpNetworkEvent {\n          response {\n            status\n          }\n          id\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "5d7201e982d405fb653c8fed87a984a8";

export default node;
