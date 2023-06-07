/**
 * @generated SignedSource<<2fc96ee1cb8d57fe38cba26d661092d9>>
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
    readonly commandFailures: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly at: any;
        };
      }>;
    };
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
  "concreteType": null,
  "kind": "LinkedField",
  "name": "node",
  "plural": false,
  "selections": [
    (v6/*: any*/)
  ],
  "storageKey": null
},
v8 = [
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
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v10 = [
  (v9/*: any*/)
],
v11 = {
  "kind": "InlineFragment",
  "selections": (v10/*: any*/),
  "type": "Node",
  "abstractKey": "__isNode"
},
v12 = {
  "kind": "InlineFragment",
  "selections": (v10/*: any*/),
  "type": "HttpNetworkEvent",
  "abstractKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "concreteType": null,
  "kind": "LinkedField",
  "name": "node",
  "plural": false,
  "selections": [
    (v5/*: any*/),
    (v6/*: any*/),
    (v11/*: any*/),
    (v12/*: any*/)
  ],
  "storageKey": null
},
v14 = {
  "kind": "Literal",
  "name": "logSearch",
  "value": null
},
v15 = {
  "kind": "Literal",
  "name": "type",
  "value": "CONSOLE"
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "message",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v18 = [
  (v17/*: any*/)
],
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v20 = [
  (v19/*: any*/)
],
v21 = {
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
      "selections": (v20/*: any*/),
      "storageKey": null
    }
  ],
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v23 = [
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
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v26 = [
  (v3/*: any*/)
],
v27 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v28 = {
  "alias": null,
  "args": null,
  "concreteType": "StepDefinition",
  "kind": "LinkedField",
  "name": "definition",
  "plural": false,
  "selections": [
    (v27/*: any*/),
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
v29 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "stackTrace",
  "storageKey": null
},
v30 = {
  "alias": null,
  "args": null,
  "concreteType": null,
  "kind": "LinkedField",
  "name": "location",
  "plural": false,
  "selections": [
    (v5/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "line",
      "plural": false,
      "selections": [
        (v5/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "line",
          "storageKey": null
        },
        (v19/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "file",
          "plural": false,
          "selections": [
            (v5/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "path",
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
      "kind": "ScalarField",
      "name": "column",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v31 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "dom",
    "storageKey": null
  }
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
                  (v7/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "events(filter:{\"type\":\"STEP\"},first:1)"
          },
          {
            "alias": "commandFailures",
            "args": (v8/*: any*/),
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
                  (v7/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "events(filter:{\"commandFilter\":{\"status\":\"FAILED\"},\"type\":\"COMMAND\"})"
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
                  (v13/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "events(filter:{\"type\":\"STEP\"},first:1)"
          },
          {
            "alias": "commandFailures",
            "args": (v8/*: any*/),
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
                  (v13/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "events(filter:{\"commandFilter\":{\"status\":\"FAILED\"},\"type\":\"COMMAND\"})"
          },
          (v9/*: any*/),
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
                      (v14/*: any*/)
                    ],
                    "kind": "ObjectValue",
                    "name": "consoleFilter"
                  },
                  (v15/*: any*/)
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
                          (v9/*: any*/),
                          (v6/*: any*/),
                          (v16/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "logLevel",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "StackTrace",
                            "kind": "LinkedField",
                            "name": "stackTrace",
                            "plural": false,
                            "selections": (v10/*: any*/),
                            "storageKey": null
                          }
                        ],
                        "type": "ConsoleLogEvent",
                        "abstractKey": null
                      },
                      (v11/*: any*/),
                      (v12/*: any*/)
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
                      (v14/*: any*/)
                    ],
                    "kind": "ObjectValue",
                    "name": "consoleFilter"
                  },
                  (v15/*: any*/)
                ],
                "kind": "ObjectValue",
                "name": "filter"
              }
            ],
            "concreteType": "TestExecutionEventConnection",
            "kind": "LinkedField",
            "name": "events",
            "plural": false,
            "selections": (v18/*: any*/),
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
                      (v14/*: any*/)
                    ],
                    "kind": "ObjectValue",
                    "name": "consoleFilter"
                  },
                  (v15/*: any*/)
                ],
                "kind": "ObjectValue",
                "name": "filter"
              }
            ],
            "concreteType": "TestExecutionEventConnection",
            "kind": "LinkedField",
            "name": "events",
            "plural": false,
            "selections": (v18/*: any*/),
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
                      (v14/*: any*/)
                    ],
                    "kind": "ObjectValue",
                    "name": "consoleFilter"
                  },
                  (v15/*: any*/)
                ],
                "kind": "ObjectValue",
                "name": "filter"
              }
            ],
            "concreteType": "TestExecutionEventConnection",
            "kind": "LinkedField",
            "name": "events",
            "plural": false,
            "selections": (v18/*: any*/),
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
                          (v9/*: any*/),
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
                          (v21/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "HttpNetworkResponse",
                            "kind": "LinkedField",
                            "name": "response",
                            "plural": false,
                            "selections": [
                              (v22/*: any*/),
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
                      (v11/*: any*/)
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
            "selections": (v18/*: any*/),
            "storageKey": "events(filter:{\"consoleFilter\":{\"logLevel\":\"ERROR\"},\"type\":\"CONSOLE\"})"
          },
          {
            "alias": "summaryNetworkErrors",
            "args": (v23/*: any*/),
            "concreteType": "TestExecutionEventConnection",
            "kind": "LinkedField",
            "name": "events",
            "plural": false,
            "selections": (v18/*: any*/),
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
              (v9/*: any*/),
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
                              (v24/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "avatar",
                                "storageKey": null
                              },
                              (v19/*: any*/)
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
                      (v19/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "GitHubBranch",
                        "kind": "LinkedField",
                        "name": "branch",
                        "plural": false,
                        "selections": [
                          (v24/*: any*/),
                          (v19/*: any*/)
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
            "args": (v8/*: any*/),
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
                          (v9/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "CommandEventError",
                            "kind": "LinkedField",
                            "name": "error",
                            "plural": false,
                            "selections": [
                              (v25/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "type": "CommandEvent",
                        "abstractKey": null
                      },
                      (v11/*: any*/),
                      (v12/*: any*/)
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
            "args": (v26/*: any*/),
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
                          (v9/*: any*/),
                          (v2/*: any*/),
                          (v28/*: any*/),
                          (v22/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "CommandChainEventConnection",
                            "kind": "LinkedField",
                            "name": "commandChains",
                            "plural": false,
                            "selections": [
                              (v17/*: any*/),
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
                                                  (v9/*: any*/),
                                                  (v2/*: any*/),
                                                  (v22/*: any*/),
                                                  (v24/*: any*/),
                                                  (v27/*: any*/),
                                                  {
                                                    "alias": null,
                                                    "args": null,
                                                    "concreteType": "CommandEventError",
                                                    "kind": "LinkedField",
                                                    "name": "error",
                                                    "plural": false,
                                                    "selections": [
                                                      (v29/*: any*/),
                                                      (v30/*: any*/)
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
                      (v11/*: any*/),
                      (v12/*: any*/)
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
            "alias": "domPreviewEvents",
            "args": [
              {
                "kind": "Literal",
                "name": "filter",
                "value": {
                  "type": [
                    "COMMAND",
                    "STEP"
                  ]
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
                      (v6/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "TestExecutionSnapshot",
                            "kind": "LinkedField",
                            "name": "previousSnapshot",
                            "plural": false,
                            "selections": (v31/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "TestExecutionSnapshot",
                            "kind": "LinkedField",
                            "name": "nextSnapshot",
                            "plural": false,
                            "selections": (v31/*: any*/),
                            "storageKey": null
                          }
                        ],
                        "type": "SnapshotEvent",
                        "abstractKey": "__isSnapshotEvent"
                      },
                      (v11/*: any*/),
                      (v12/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "events(filter:{\"type\":[\"COMMAND\",\"STEP\"]})"
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
                            "selections": (v20/*: any*/),
                            "storageKey": null
                          }
                        ],
                        "type": "TestExecutionScreenshot",
                        "abstractKey": null
                      },
                      (v11/*: any*/),
                      (v12/*: any*/)
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
            "alias": "seekerCypressErrors",
            "args": (v8/*: any*/),
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
                          (v9/*: any*/),
                          (v6/*: any*/),
                          (v22/*: any*/),
                          (v24/*: any*/),
                          (v27/*: any*/)
                        ],
                        "type": "CommandEvent",
                        "abstractKey": null
                      },
                      (v11/*: any*/),
                      (v12/*: any*/)
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
            "alias": "seekerNetworkErrors",
            "args": (v23/*: any*/),
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
                          (v9/*: any*/),
                          (v6/*: any*/),
                          (v2/*: any*/),
                          (v21/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "HttpNetworkResponse",
                            "kind": "LinkedField",
                            "name": "response",
                            "plural": false,
                            "selections": [
                              (v22/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "type": "HttpNetworkEvent",
                        "abstractKey": null
                      },
                      (v11/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "events(filter:{\"networkFilter\":{\"status\":{\"gte\":400}},\"type\":\"NETWORK\"})"
          },
          {
            "alias": "seekerSteps",
            "args": (v26/*: any*/),
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
                          (v9/*: any*/),
                          (v6/*: any*/),
                          (v22/*: any*/),
                          (v28/*: any*/)
                        ],
                        "type": "StepEvent",
                        "abstractKey": null
                      },
                      (v11/*: any*/),
                      (v12/*: any*/)
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
            "alias": "frameworkError",
            "args": (v8/*: any*/),
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
                          (v9/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "CommandEventError",
                            "kind": "LinkedField",
                            "name": "error",
                            "plural": false,
                            "selections": [
                              (v25/*: any*/),
                              (v16/*: any*/),
                              (v29/*: any*/),
                              (v30/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "type": "CommandEvent",
                        "abstractKey": null
                      },
                      (v11/*: any*/),
                      (v12/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "events(filter:{\"commandFilter\":{\"status\":\"FAILED\"},\"type\":\"COMMAND\"})"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "fedafa6e580167a57128949a14830a93",
    "id": null,
    "metadata": {},
    "name": "TestExecutionPageQuery",
    "operationKind": "query",
    "text": "query TestExecutionPageQuery(\n  $id: ID!\n) {\n  testExecution(id: $id) {\n    until\n    firstStep: events(filter: {type: STEP}, first: 1) {\n      edges {\n        __typename\n        node {\n          __typename\n          at\n          ... on Node {\n            __isNode: __typename\n            id\n          }\n          ... on HttpNetworkEvent {\n            id\n          }\n        }\n      }\n    }\n    commandFailures: events(filter: {type: COMMAND, commandFilter: {status: FAILED}}) {\n      edges {\n        node {\n          __typename\n          at\n          ... on Node {\n            __isNode: __typename\n            id\n          }\n          ... on HttpNetworkEvent {\n            id\n          }\n        }\n      }\n    }\n    ...ConsolePanelFragment\n    ...NetworkPanelFragment\n    ...SummaryFragment\n    ...StepsFragment\n    ...DomPreviewFragment\n    ...SeekerFragment\n    ...FrameworkErrorFragment\n    id\n  }\n}\n\nfragment ActionRecordFragment on CommandEvent {\n  id\n  at\n  until\n  status\n  name\n  description\n  error {\n    stackTrace\n    location {\n      __typename\n      line {\n        __typename\n        line\n        url\n        file {\n          __typename\n          path\n        }\n      }\n      column\n    }\n  }\n}\n\nfragment ConsoleErrorCountFragment on TestExecution {\n  summaryConsoleErrors: events(filter: {type: CONSOLE, consoleFilter: {logLevel: ERROR}}) {\n    totalCount\n  }\n}\n\nfragment ConsolePanelFragment on TestExecution {\n  id\n  searchedEvents: events(filter: {type: CONSOLE, consoleFilter: {}}) {\n    edges {\n      __typename\n      node {\n        __typename\n        ... on ConsoleLogEvent {\n          __typename\n          id\n          at\n          ...LogEntryFragment\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n        ... on HttpNetworkEvent {\n          id\n        }\n      }\n    }\n  }\n  ...LogFiltersFragment_qvNWU\n}\n\nfragment DomPreviewFragment on TestExecution {\n  ...DomPreviewRendererFragment\n}\n\nfragment DomPreviewRendererFragment on TestExecution {\n  domPreviewEvents: events(filter: {type: [COMMAND, STEP]}) {\n    edges {\n      node {\n        __typename\n        at\n        ...SnapshotEventRendererFragment\n        ... on SnapshotEvent {\n          __isSnapshotEvent: __typename\n          previousSnapshot {\n            dom\n          }\n          nextSnapshot {\n            dom\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n        ... on HttpNetworkEvent {\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment EnvironmentDetailsFragment on TestExecution {\n  at\n  summaryEnvironmentDetails: testRun {\n    id\n    testCodeRevision {\n      __typename\n      ... on GitHubRevision {\n        author {\n          email\n          user {\n            name\n            avatar\n            url\n          }\n        }\n        commitId(type: SHORT)\n        url\n        branch {\n          name\n          url\n        }\n      }\n    }\n  }\n}\n\nfragment FrameworkErrorFragment on TestExecution {\n  frameworkError: events(filter: {type: COMMAND, commandFilter: {status: FAILED}}) {\n    edges {\n      node {\n        __typename\n        ... on CommandEvent {\n          id\n          error {\n            type\n            message\n            stackTrace\n            location {\n              __typename\n              line {\n                __typename\n                line\n                url\n                file {\n                  __typename\n                  path\n                }\n              }\n              column\n            }\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n        ... on HttpNetworkEvent {\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment LogEntryFragment on ConsoleLogEvent {\n  id\n  at\n  message\n  logLevel\n  stackTrace {\n    id\n  }\n}\n\nfragment LogFiltersFragment_qvNWU on TestExecution {\n  warnings: events(filter: {type: CONSOLE, consoleFilter: {logLevel: WARN}}) {\n    totalCount\n  }\n  errors: events(filter: {type: CONSOLE, consoleFilter: {logLevel: ERROR}}) {\n    totalCount\n  }\n  logs: events(filter: {type: CONSOLE, consoleFilter: {logLevel: LOG}}) {\n    totalCount\n  }\n  id\n}\n\nfragment NetworkErrorCountFragment on TestExecution {\n  summaryNetworkErrors: events(filter: {type: NETWORK, networkFilter: {status: {gte: 400}}}) {\n    totalCount\n  }\n}\n\nfragment NetworkPanelFragment on TestExecution {\n  id\n  searchedNetworkEvents: events(filter: {type: NETWORK, networkFilter: {}}) {\n    edges {\n      __typename\n      node {\n        __typename\n        ... on HttpNetworkEvent {\n          __typename\n          id\n          at\n          until\n          ...NetworkSliceFragment\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment NetworkSliceFragment on HttpNetworkEvent {\n  __typename\n  id\n  resourceType\n  at\n  until\n  initiator {\n    origin\n    lineNumber\n  }\n  request {\n    method\n    url {\n      url\n    }\n  }\n  response {\n    status\n    transferSize\n    body {\n      mimeType\n      size\n    }\n  }\n}\n\nfragment SeekerFragment on TestExecution {\n  screenshots: events(filter: {type: SCREENSHOT}) {\n    edges {\n      node {\n        __typename\n        ... on TestExecutionScreenshot {\n          at\n          url {\n            url\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n        ... on HttpNetworkEvent {\n          id\n        }\n      }\n    }\n  }\n  seekerCypressErrors: events(filter: {type: COMMAND, commandFilter: {status: FAILED}}) {\n    edges {\n      node {\n        __typename\n        ... on CommandEvent {\n          __typename\n          id\n          at\n          status\n          name\n          description\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n        ... on HttpNetworkEvent {\n          id\n        }\n      }\n    }\n  }\n  seekerNetworkErrors: events(filter: {type: NETWORK, networkFilter: {status: {gte: 400}}}) {\n    edges {\n      node {\n        __typename\n        ... on HttpNetworkEvent {\n          __typename\n          id\n          at\n          until\n          request {\n            method\n            url {\n              url\n            }\n          }\n          response {\n            status\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n  seekerSteps: events(filter: {type: STEP}) {\n    edges {\n      node {\n        __typename\n        ... on StepEvent {\n          __typename\n          id\n          at\n          status\n          definition {\n            description\n            keyword\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n        ... on HttpNetworkEvent {\n          id\n        }\n      }\n    }\n  }\n  id\n}\n\nfragment SnapshotEventRendererFragment on SnapshotEvent {\n  __isSnapshotEvent: __typename\n  previousSnapshot {\n    dom\n  }\n  nextSnapshot {\n    dom\n  }\n}\n\nfragment StepRecordFragment on StepEvent {\n  __typename\n  id\n  at\n  until\n  definition {\n    description\n    keyword\n  }\n  status\n  commandChains {\n    totalCount\n    edges {\n      node {\n        at\n        until\n        commands {\n          edges {\n            node {\n              at\n              ...ActionRecordFragment\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment StepsFragment on TestExecution {\n  id\n  stepEvents: events(filter: {type: STEP}) {\n    edges {\n      __typename\n      node {\n        __typename\n        at\n        ... on StepEvent {\n          ...StepRecordFragment\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n        ... on HttpNetworkEvent {\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment SummaryFragment on TestExecution {\n  id\n  title\n  ...ConsoleErrorCountFragment\n  ...NetworkErrorCountFragment\n  ...EnvironmentDetailsFragment\n  commandWithError: events(filter: {type: COMMAND, commandFilter: {status: FAILED}}) {\n    edges {\n      node {\n        __typename\n        ... on CommandEvent {\n          id\n          error {\n            type\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n        ... on HttpNetworkEvent {\n          id\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "be0130251c388e9ab1e68caaddf4679a";

export default node;
