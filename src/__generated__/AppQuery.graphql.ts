/**
 * @generated SignedSource<<e9f8b380ee8eeacd2ffb27c9ae5199d1>>
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
    readonly " $fragmentSpreads": FragmentRefs<"ConsolePanelFragment" | "NetworkPanelFragment" | "StepsFragment" | "SummaryFragment">;
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
v7 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "totalCount",
    "storageKey": null
  }
],
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "until",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
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
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "message",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "logLevel",
                            "storageKey": null
                          }
                        ],
                        "type": "ConsoleLogEvent",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
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
            "selections": (v7/*: any*/),
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
            "selections": (v7/*: any*/),
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
            "selections": (v7/*: any*/),
            "storageKey": "events(filter:{\"consoleFilter\":{\"logLevel\":\"LOG\",\"logSearch\":null},\"type\":\"CONSOLE\"})"
          },
          {
            "alias": "searchedNetworkEvents",
            "args": [
              {
                "fields": [
                  {
                    "fields": [
                      {
                        "kind": "Literal",
                        "name": "resourceType",
                        "value": null
                      },
                      {
                        "kind": "Literal",
                        "name": "urlSearch",
                        "value": null
                      }
                    ],
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
                          (v2/*: any*/),
                          (v6/*: any*/),
                          (v8/*: any*/),
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
                                "concreteType": "HttpNetworkRequestUrl",
                                "kind": "LinkedField",
                                "name": "url",
                                "plural": false,
                                "selections": [
                                  (v9/*: any*/)
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
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "mimeType",
                                    "storageKey": null
                                  },
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
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "events(filter:{\"networkFilter\":{\"resourceType\":null,\"urlSearch\":null},\"type\":\"NETWORK\"})"
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
            "selections": (v7/*: any*/),
            "storageKey": "events(filter:{\"consoleFilter\":{\"logLevel\":\"ERROR\"},\"type\":\"CONSOLE\"})"
          },
          {
            "alias": "summaryNetworkErrors",
            "args": [
              {
                "kind": "Literal",
                "name": "filter",
                "value": {
                  "networkFilter": {
                    "status": {
                      "gte": 400
                    }
                  },
                  "type": "NETWORK"
                }
              }
            ],
            "concreteType": "TestExecutionEventConnection",
            "kind": "LinkedField",
            "name": "events",
            "plural": false,
            "selections": (v7/*: any*/),
            "storageKey": "events(filter:{\"networkFilter\":{\"status\":{\"gte\":400}},\"type\":\"NETWORK\"})"
          },
          (v8/*: any*/),
          {
            "alias": "summaryEnvironmentDetails",
            "args": null,
            "concreteType": "TestRun",
            "kind": "LinkedField",
            "name": "testRun",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "testCodeRevision",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "GitHubActor",
                        "kind": "LinkedField",
                        "name": "author",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "email",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "GitHubUser",
                            "kind": "LinkedField",
                            "name": "user",
                            "plural": false,
                            "selections": [
                              (v10/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "avatar",
                                "storageKey": null
                              },
                              (v9/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "type",
                            "value": "SHORT"
                          }
                        ],
                        "kind": "ScalarField",
                        "name": "commitId",
                        "storageKey": "commitId(type:\"SHORT\")"
                      },
                      (v9/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "GitHubBranch",
                        "kind": "LinkedField",
                        "name": "branch",
                        "plural": false,
                        "selections": [
                          (v10/*: any*/),
                          (v9/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "type": "GitHubRevision",
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
    ]
  },
  "params": {
    "cacheID": "40fc8901143bdc0a058c2191ccbce7ed",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery(\n  $testExecutionId: ID!\n) {\n  testExecution(id: $testExecutionId) {\n    ...ConsolePanelFragment\n    ...NetworkPanelFragment\n    ...SummaryFragment\n    ...StepsFragment\n    id\n  }\n}\n\nfragment ConsoleErrorCountFragment on TestExecution {\n  summaryConsoleErrors: events(filter: {type: CONSOLE, consoleFilter: {logLevel: ERROR}}) {\n    totalCount\n  }\n}\n\nfragment ConsolePanelFragment on TestExecution {\n  id\n  searchedEvents: events(filter: {type: CONSOLE, consoleFilter: {}}) {\n    edges {\n      __typename\n      node {\n        __typename\n        ... on ConsoleLogEvent {\n          at\n          ...LogEntryFragment\n        }\n        ... on HttpNetworkEvent {\n          id\n        }\n      }\n    }\n  }\n  ...LogFiltersFragment_qvNWU\n}\n\nfragment EnvironmentDetailsFragment on TestExecution {\n  until\n  summaryEnvironmentDetails: testRun {\n    id\n    testCodeRevision {\n      __typename\n      ... on GitHubRevision {\n        author {\n          email\n          user {\n            name\n            avatar\n            url\n          }\n        }\n        commitId(type: SHORT)\n        url\n        branch {\n          name\n          url\n        }\n      }\n    }\n  }\n}\n\nfragment LogEntryFragment on ConsoleLogEvent {\n  at\n  message\n  logLevel\n}\n\nfragment LogFiltersFragment_qvNWU on TestExecution {\n  warnings: events(filter: {type: CONSOLE, consoleFilter: {logLevel: WARN}}) {\n    totalCount\n  }\n  errors: events(filter: {type: CONSOLE, consoleFilter: {logLevel: ERROR}}) {\n    totalCount\n  }\n  logs: events(filter: {type: CONSOLE, consoleFilter: {logLevel: LOG}}) {\n    totalCount\n  }\n  id\n}\n\nfragment NetworkErrorCountFragment on TestExecution {\n  summaryNetworkErrors: events(filter: {type: NETWORK, networkFilter: {status: {gte: 400}}}) {\n    totalCount\n  }\n}\n\nfragment NetworkPanelFragment on TestExecution {\n  id\n  searchedNetworkEvents: events(filter: {type: NETWORK, networkFilter: {}}) {\n    edges {\n      __typename\n      node {\n        __typename\n        ... on HttpNetworkEvent {\n          __typename\n          id\n          at\n          until\n          ...NetworkSliceFragment\n        }\n      }\n    }\n  }\n}\n\nfragment NetworkSliceFragment on HttpNetworkEvent {\n  __typename\n  id\n  resourceType\n  at\n  until\n  initiator {\n    origin\n    lineNumber\n  }\n  request {\n    method\n    url {\n      url\n    }\n  }\n  response {\n    status\n    transferSize\n    body {\n      mimeType\n      size\n    }\n  }\n}\n\nfragment StepsFragment on TestExecution {\n  id\n}\n\nfragment SummaryFragment on TestExecution {\n  id\n  ...ConsoleErrorCountFragment\n  ...NetworkErrorCountFragment\n  ...EnvironmentDetailsFragment\n}\n"
  }
};
})();

(node as any).hash = "12799219d67c660aeb1fc75287b02868";

export default node;
