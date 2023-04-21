/**
 * @generated SignedSource<<58d2304541a65b49256bbb85a8992d47>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TestExecutionPageQuery$variables = {
  id: string;
};
export type TestExecutionPageQuery$data = {
  readonly testExecution: {
    readonly firstStep: {
      readonly edges: ReadonlyArray<{
        readonly __typename: "TestExecutionEventEdge";
        readonly node: {
          readonly at: any;
        };
      }>;
    };
    readonly until: any;
    readonly " $fragmentSpreads": FragmentRefs<"ConsolePanelFragment" | "DomPreviewFragment" | "FrameworkErrorFragment" | "NetworkPanelFragment" | "SeekerFragment" | "StepsFragment" | "SummaryFragment">;
  } | null;
};
export type TestExecutionPageQuery = {
  response: TestExecutionPageQuery$data;
  variables: TestExecutionPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "until",
  "storageKey": null
},
v3 = {
  "kind": "Literal",
  "name": "filter",
  "value": {
    "type": "STEP"
  }
},
v4 = [
  (v3/*: any*/),
  {
    "kind": "Literal",
    "name": "first",
    "value": 1
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
  "name": "at",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v8 = [
  (v7/*: any*/)
],
v9 = {
  "kind": "InlineFragment",
  "selections": (v8/*: any*/),
  "type": "Node",
  "abstractKey": "__isNode"
},
v10 = {
  "kind": "InlineFragment",
  "selections": (v8/*: any*/),
  "type": "HttpNetworkEvent",
  "abstractKey": null
},
v11 = {
  "kind": "Literal",
  "name": "logSearch",
  "value": null
},
v12 = {
  "kind": "Literal",
  "name": "type",
  "value": "CONSOLE"
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "message",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v15 = [
  (v14/*: any*/)
],
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v17 = [
  (v16/*: any*/)
],
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v16 = {
  "gte": 400
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v18 = [
  {
    "kind": "Literal",
    "name": "filter",
    "value": {
      "commandFilter": {
        "status": "FAILED"
      },
      "type": "COMMAND"
    }
  }
],
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v20 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "dom",
    "storageKey": null
  }
],
v21 = {
  "alias": null,
  "args": null,
  "concreteType": "TestExecutionSnapshot",
  "kind": "LinkedField",
  "name": "previousSnapshot",
  "plural": false,
  "selections": (v20/*: any*/),
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "concreteType": "TestExecutionSnapshot",
  "kind": "LinkedField",
  "name": "nextSnapshot",
  "plural": false,
  "selections": (v20/*: any*/),
  "storageKey": null
},
v23 = [
  (v6/*: any*/),
  (v15/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TestExecutionPageQuery",
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
            "alias": "firstStep",
            "args": (v4/*: any*/),
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
                      (v6/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "events(filter:{\"type\":\"STEP\"},first:1)"
          },
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
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "DomPreviewFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SeekerFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "FrameworkErrorFragment"
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
    "name": "TestExecutionPageQuery",
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
            "alias": "firstStep",
            "args": (v4/*: any*/),
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
                      (v9/*: any*/),
                      (v10/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "events(filter:{\"type\":\"STEP\"},first:1)"
          },
          (v7/*: any*/),
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
                      (v11/*: any*/)
                    ],
                    "kind": "ObjectValue",
                    "name": "consoleFilter"
                  },
                  (v12/*: any*/)
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
                          (v13/*: any*/),
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
                      (v9/*: any*/),
                      (v10/*: any*/)
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
                      (v11/*: any*/)
                    ],
                    "kind": "ObjectValue",
                    "name": "consoleFilter"
                  },
                  (v12/*: any*/)
                ],
                "kind": "ObjectValue",
                "name": "filter"
              }
            ],
            "concreteType": "TestExecutionEventConnection",
            "kind": "LinkedField",
            "name": "events",
            "plural": false,
            "selections": (v15/*: any*/),
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
                      (v11/*: any*/)
                    ],
                    "kind": "ObjectValue",
                    "name": "consoleFilter"
                  },
                  (v12/*: any*/)
                ],
                "kind": "ObjectValue",
                "name": "filter"
              }
            ],
            "concreteType": "TestExecutionEventConnection",
            "kind": "LinkedField",
            "name": "events",
            "plural": false,
            "selections": (v15/*: any*/),
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
                      (v11/*: any*/)
                    ],
                    "kind": "ObjectValue",
                    "name": "consoleFilter"
                  },
                  (v12/*: any*/)
                ],
                "kind": "ObjectValue",
                "name": "filter"
              }
            ],
            "concreteType": "TestExecutionEventConnection",
            "kind": "LinkedField",
            "name": "events",
            "plural": false,
            "selections": (v15/*: any*/),
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
                          (v7/*: any*/),
                          (v6/*: any*/),
                          (v2/*: any*/),
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
                                "selections": (v17/*: any*/),
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
                              (v18/*: any*/),
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
                      },
                      (v9/*: any*/)
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
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
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
            "selections": (v15/*: any*/),
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
                    "status": (v16/*: any*/)
                  },
                  "type": "NETWORK"
                }
              }
            ],
            "concreteType": "TestExecutionEventConnection",
            "kind": "LinkedField",
            "name": "events",
            "plural": false,
            "selections": (v15/*: any*/),
            "storageKey": "events(filter:{\"networkFilter\":{\"status\":{\"gte\":400}},\"type\":\"NETWORK\"})"
          },
          (v6/*: any*/),
          {
            "alias": "summaryEnvironmentDetails",
            "args": null,
            "concreteType": "TestRun",
            "kind": "LinkedField",
            "name": "testRun",
            "plural": false,
            "selections": [
              (v7/*: any*/),
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
                              (v17/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "avatar",
                                "storageKey": null
                              },
                              (v16/*: any*/)
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
                      (v16/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "GitHubBranch",
                        "kind": "LinkedField",
                        "name": "branch",
                        "plural": false,
                        "selections": [
                          (v17/*: any*/),
                          (v13/*: any*/)
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
          },
          {
            "alias": "commandWithError",
            "args": (v20/*: any*/),
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
                          (v7/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "CommandEventError",
                            "kind": "LinkedField",
                            "name": "error",
                            "plural": false,
                            "selections": [
                              (v21/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "type": "CommandEvent",
                        "abstractKey": null
                      },
                      (v9/*: any*/),
                      (v10/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "events(filter:{\"commandFilter\":{\"status\":\"FAILED\"},\"type\":\"COMMAND\"})"
          },
          {
            "alias": "stepEvents",
            "args": (v18/*: any*/),
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
                          (v2/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "StepDefinition",
                            "kind": "LinkedField",
                            "name": "definition",
                            "plural": false,
                            "selections": [
                              (v19/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "keyword",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          (v18/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "CommandChainEventConnection",
                            "kind": "LinkedField",
                            "name": "commandChains",
                            "plural": false,
                            "selections": [
                              (v14/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "CommandChainEventEdge",
                                "kind": "LinkedField",
                                "name": "edges",
                                "plural": true,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "CommandChainEvent",
                                    "kind": "LinkedField",
                                    "name": "node",
                                    "plural": false,
                                    "selections": [
                                      (v6/*: any*/),
                                      (v2/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "CommandEventConnection",
                                        "kind": "LinkedField",
                                        "name": "commands",
                                        "plural": false,
                                        "selections": [
                                          {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "CommandEventEdge",
                                            "kind": "LinkedField",
                                            "name": "edges",
                                            "plural": true,
                                            "selections": [
                                              {
                                                "alias": null,
                                                "args": null,
                                                "concreteType": "CommandEvent",
                                                "kind": "LinkedField",
                                                "name": "node",
                                                "plural": false,
                                                "selections": [
                                                  (v6/*: any*/),
                                                  (v7/*: any*/),
                                                  (v2/*: any*/),
                                                  (v12/*: any*/),
                                                  (v15/*: any*/),
                                                  (v17/*: any*/),
                                                  (v19/*: any*/),
                                                  {
                                                    "alias": null,
                                                    "args": null,
                                                    "concreteType": "CommandEventError",
                                                    "kind": "LinkedField",
                                                    "name": "error",
                                                    "plural": false,
                                                    "selections": [
                                                      (v24/*: any*/),
                                                      (v25/*: any*/)
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
                                        "storageKey": null
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
                        "type": "StepEvent",
                        "abstractKey": null
                      },
                      (v9/*: any*/),
                      (v10/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "events(filter:{\"type\":\"STEP\"})"
          },
          {
            "alias": "snapshots",
            "args": (v18/*: any*/),
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
                          (v21/*: any*/),
                          (v22/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "CommandChainEventConnection",
                            "kind": "LinkedField",
                            "name": "commandChains",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "CommandChainEventEdge",
                                "kind": "LinkedField",
                                "name": "edges",
                                "plural": true,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "CommandChainEvent",
                                    "kind": "LinkedField",
                                    "name": "node",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "CommandEventConnection",
                                        "kind": "LinkedField",
                                        "name": "commands",
                                        "plural": false,
                                        "selections": [
                                          {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "CommandEventEdge",
                                            "kind": "LinkedField",
                                            "name": "edges",
                                            "plural": true,
                                            "selections": [
                                              {
                                                "alias": null,
                                                "args": null,
                                                "concreteType": "CommandEvent",
                                                "kind": "LinkedField",
                                                "name": "node",
                                                "plural": false,
                                                "selections": [
                                                  (v6/*: any*/),
                                                  (v21/*: any*/),
                                                  (v22/*: any*/),
                                                  (v2/*: any*/)
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
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "type": "StepEvent",
                        "abstractKey": null
                      },
                      (v9/*: any*/),
                      (v10/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "events(filter:{\"type\":\"STEP\"})"
          },
          {
            "alias": "screenshots",
            "args": [
              {
                "kind": "Literal",
                "name": "filter",
                "value": {
                  "type": "SCREENSHOT"
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
                            "concreteType": "SignedURL",
                            "kind": "LinkedField",
                            "name": "url",
                            "plural": false,
                            "selections": (v17/*: any*/),
                            "storageKey": null
                          }
                        ],
                        "type": "TestExecutionScreenshot",
                        "abstractKey": null
                      },
                      (v9/*: any*/),
                      (v10/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "events(filter:{\"type\":\"SCREENSHOT\"})"
          },
          {
            "alias": "seekerEvents",
            "args": [
              {
                "fields": [
                  {
                    "fields": [
                      {
                        "kind": "Literal",
                        "name": "status",
                        "value": [
                          "FAILED"
                        ]
                      }
                    ],
                    "kind": "ObjectValue",
                    "name": "commandFilter"
                  },
                  {
                    "fields": [
                      {
                        "kind": "Literal",
                        "name": "status",
                        "value": (v16/*: any*/)
                      }
                    ],
                    "kind": "ObjectValue",
                    "name": "networkFilter"
                  },
                  {
                    "kind": "Literal",
                    "name": "type",
                    "value": [
                      "STEP",
                      "NETWORK",
                      "COMMAND"
                    ]
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
                          (v12/*: any*/)
                        ],
                        "type": "HttpNetworkEvent",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": (v23/*: any*/),
                        "type": "CommandEvent",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": (v23/*: any*/),
                        "type": "StepEvent",
                        "abstractKey": null
                      },
                      (v8/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "events(filter:{\"commandFilter\":{\"status\":[\"FAILED\"]},\"networkFilter\":{\"status\":{\"gte\":400}},\"type\":[\"STEP\",\"NETWORK\",\"COMMAND\"]})"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "28af97ccaf730ddf5277013d33a315a3",
    "id": null,
    "metadata": {},
    "name": "TestExecutionPageQuery",
    "operationKind": "query",
    "text": "query TestExecutionIdPageQuery(\n  $testExecutionId: ID!\n) {\n  testExecution(id: $testExecutionId) {\n    ...ConsolePanelFragment\n    ...NetworkPanelFragment\n    ...SummaryFragment\n    ...StepsFragment\n    ...DomPreviewFragment\n    ...SeekerFragment\n    id\n  }\n}\n\nfragment ActionRecordFragment on CommandEvent {\n  id\n  at\n  until\n  status\n  name\n  description\n  error {\n    stackTrace\n  }\n}\n\nfragment ConsoleErrorCountFragment on TestExecution {\n  summaryConsoleErrors: events(filter: {type: CONSOLE, consoleFilter: {logLevel: ERROR}}) {\n    totalCount\n  }\n}\n\nfragment ConsolePanelFragment on TestExecution {\n  id\n  searchedEvents: events(filter: {type: CONSOLE, consoleFilter: {}}) {\n    edges {\n      __typename\n      node {\n        __typename\n        ... on ConsoleLogEvent {\n          at\n          ...LogEntryFragment\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n        ... on HttpNetworkEvent {\n          id\n        }\n      }\n    }\n  }\n  ...LogFiltersFragment_qvNWU\n}\n\nfragment DomPreviewFragment on TestExecution {\n  id\n  snapshots: events(filter: {type: STEP}) {\n    edges {\n      __typename\n      node {\n        __typename\n        ... on StepEvent {\n          at\n          previousSnapshot {\n            dom\n          }\n          nextSnapshot {\n            dom\n          }\n          commandChains {\n            edges {\n              node {\n                commands {\n                  edges {\n                    node {\n                      at\n                      previousSnapshot {\n                        dom\n                      }\n                      nextSnapshot {\n                        dom\n                      }\n                      id\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n        ... on HttpNetworkEvent {\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment EnvironmentDetailsFragment on TestExecution {\n  at\n  summaryEnvironmentDetails: testRun {\n    id\n    testCodeRevision {\n      __typename\n      ... on GitHubRevision {\n        author {\n          email\n          user {\n            name\n            avatar\n            url\n          }\n        }\n        commitId(type: SHORT)\n        url\n        branch {\n          name\n          url\n        }\n      }\n    }\n  }\n}\n\nfragment LogEntryFragment on ConsoleLogEvent {\n  at\n  message\n  logLevel\n}\n\nfragment LogFiltersFragment_qvNWU on TestExecution {\n  warnings: events(filter: {type: CONSOLE, consoleFilter: {logLevel: WARN}}) {\n    totalCount\n  }\n  errors: events(filter: {type: CONSOLE, consoleFilter: {logLevel: ERROR}}) {\n    totalCount\n  }\n  logs: events(filter: {type: CONSOLE, consoleFilter: {logLevel: LOG}}) {\n    totalCount\n  }\n  id\n}\n\nfragment NetworkErrorCountFragment on TestExecution {\n  summaryNetworkErrors: events(filter: {type: NETWORK, networkFilter: {status: {gte: 400}}}) {\n    totalCount\n  }\n}\n\nfragment NetworkPanelFragment on TestExecution {\n  id\n  searchedNetworkEvents: events(filter: {type: NETWORK, networkFilter: {}}) {\n    edges {\n      __typename\n      node {\n        __typename\n        ... on HttpNetworkEvent {\n          __typename\n          id\n          at\n          until\n          ...NetworkSliceFragment\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment NetworkSliceFragment on HttpNetworkEvent {\n  __typename\n  id\n  resourceType\n  at\n  until\n  initiator {\n    origin\n    lineNumber\n  }\n  request {\n    method\n    url {\n      url\n    }\n  }\n  response {\n    status\n    transferSize\n    body {\n      mimeType\n      size\n    }\n  }\n}\n\nfragment SeekerFragment on TestExecution {\n  screenshots: events(filter: {type: SCREENSHOT}) {\n    edges {\n      node {\n        __typename\n        ... on TestExecutionScreenshot {\n          at\n          url {\n            url\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n        ... on HttpNetworkEvent {\n          id\n        }\n      }\n    }\n  }\n  seekerEvents: events(filter: {type: [STEP, NETWORK, COMMAND], networkFilter: {status: {gte: 400}}, commandFilter: {status: [FAILED]}}) {\n    edges {\n      node {\n        __typename\n        ... on HttpNetworkEvent {\n          __typename\n          id\n          at\n          until\n        }\n        ... on CommandEvent {\n          __typename\n          at\n          status\n        }\n        ... on StepEvent {\n          __typename\n          at\n          status\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n  id\n}\n\nfragment StepRecordFragment on StepEvent {\n  __typename\n  id\n  at\n  until\n  definition {\n    description\n    keyword\n  }\n  status\n  commandChains {\n    totalCount\n    edges {\n      node {\n        at\n        until\n        commands {\n          edges {\n            node {\n              at\n              ...ActionRecordFragment\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment StepsFragment on TestExecution {\n  id\n  stepEvents: events(filter: {type: STEP}) {\n    edges {\n      __typename\n      node {\n        __typename\n        at\n        ... on StepEvent {\n          ...StepRecordFragment\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n        ... on HttpNetworkEvent {\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment SummaryFragment on TestExecution {\n  id\n  ...ConsoleErrorCountFragment\n  ...NetworkErrorCountFragment\n  ...EnvironmentDetailsFragment\n}\n"
  }
};
})();

(node as any).hash = "713437174db1aeb7225b4bb3c2f7ae1f";

export default node;
