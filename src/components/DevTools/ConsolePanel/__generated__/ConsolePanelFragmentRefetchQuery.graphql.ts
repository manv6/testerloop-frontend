/**
 * @generated SignedSource<<f29fdfbe47dba71cee6710d86c305eae>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ConsoleLogLevel = "ERROR" | "INFO" | "LOG" | "WARN" | "%future added value";
export type ConsolePanelFragmentRefetchQuery$variables = {
  id: string;
  logLevels?: ReadonlyArray<ConsoleLogLevel> | null;
  logSearch?: string | null;
};
export type ConsolePanelFragmentRefetchQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"ConsolePanelFragment">;
  } | null;
};
export type ConsolePanelFragmentRefetchQuery = {
  response: ConsolePanelFragmentRefetchQuery$data;
  variables: ConsolePanelFragmentRefetchQuery$variables;
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
  "name": "logLevels"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "logSearch"
},
v3 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v4 = {
  "kind": "Variable",
  "name": "logSearch",
  "variableName": "logSearch"
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
  "name": "id",
  "storageKey": null
},
v7 = {
  "kind": "Literal",
  "name": "type",
  "value": "CONSOLE"
},
v8 = [
  (v6/*: any*/)
],
v9 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "totalCount",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ConsolePanelFragmentRefetchQuery",
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
            "args": [
              {
                "kind": "Variable",
                "name": "logLevels",
                "variableName": "logLevels"
              },
              (v4/*: any*/)
            ],
            "kind": "FragmentSpread",
            "name": "ConsolePanelFragment"
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
    "name": "ConsolePanelFragmentRefetchQuery",
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
                "alias": "searchedEvents",
                "args": [
                  {
                    "fields": [
                      {
                        "fields": [
                          {
                            "kind": "Variable",
                            "name": "logLevel",
                            "variableName": "logLevels"
                          },
                          (v4/*: any*/)
                        ],
                        "kind": "ObjectValue",
                        "name": "consoleFilter"
                      },
                      (v7/*: any*/)
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
                                "name": "message",
                                "storageKey": null
                              },
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
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "CallFrame",
                                    "kind": "LinkedField",
                                    "name": "callFrames",
                                    "plural": true,
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "functionName",
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "url",
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "lineNumber",
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "columnNumber",
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "type": "ConsoleLogEvent",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": (v8/*: any*/),
                            "type": "Node",
                            "abstractKey": "__isNode"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": (v8/*: any*/),
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
                          (v4/*: any*/)
                        ],
                        "kind": "ObjectValue",
                        "name": "consoleFilter"
                      },
                      (v7/*: any*/)
                    ],
                    "kind": "ObjectValue",
                    "name": "filter"
                  }
                ],
                "concreteType": "TestExecutionEventConnection",
                "kind": "LinkedField",
                "name": "events",
                "plural": false,
                "selections": (v9/*: any*/),
                "storageKey": null
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
                          (v4/*: any*/)
                        ],
                        "kind": "ObjectValue",
                        "name": "consoleFilter"
                      },
                      (v7/*: any*/)
                    ],
                    "kind": "ObjectValue",
                    "name": "filter"
                  }
                ],
                "concreteType": "TestExecutionEventConnection",
                "kind": "LinkedField",
                "name": "events",
                "plural": false,
                "selections": (v9/*: any*/),
                "storageKey": null
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
                          (v4/*: any*/)
                        ],
                        "kind": "ObjectValue",
                        "name": "consoleFilter"
                      },
                      (v7/*: any*/)
                    ],
                    "kind": "ObjectValue",
                    "name": "filter"
                  }
                ],
                "concreteType": "TestExecutionEventConnection",
                "kind": "LinkedField",
                "name": "events",
                "plural": false,
                "selections": (v9/*: any*/),
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
    "cacheID": "0f56023641e608b7d0bb8dc0c8722baf",
    "id": null,
    "metadata": {},
    "name": "ConsolePanelFragmentRefetchQuery",
    "operationKind": "query",
    "text": "query ConsolePanelFragmentRefetchQuery(\n  $logLevels: [ConsoleLogLevel!] = null\n  $logSearch: String = null\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...ConsolePanelFragment_22FwjD\n    id\n  }\n}\n\nfragment ConsolePanelFragment_22FwjD on TestExecution {\n  id\n  searchedEvents: events(filter: {type: CONSOLE, consoleFilter: {logSearch: $logSearch, logLevel: $logLevels}}) {\n    edges {\n      __typename\n      node {\n        __typename\n        ... on ConsoleLogEvent {\n          at\n          ...LogEntryFragment\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n        ... on HttpNetworkEvent {\n          id\n        }\n      }\n    }\n  }\n  ...LogFiltersFragment_1imbBq\n}\n\nfragment LogEntryFragment on ConsoleLogEvent {\n  at\n  message\n  logLevel\n  stackTrace {\n    ...StackTraceFragment\n  }\n}\n\nfragment LogFiltersFragment_1imbBq on TestExecution {\n  warnings: events(filter: {type: CONSOLE, consoleFilter: {logSearch: $logSearch, logLevel: WARN}}) {\n    totalCount\n  }\n  errors: events(filter: {type: CONSOLE, consoleFilter: {logSearch: $logSearch, logLevel: ERROR}}) {\n    totalCount\n  }\n  logs: events(filter: {type: CONSOLE, consoleFilter: {logSearch: $logSearch, logLevel: LOG}}) {\n    totalCount\n  }\n  id\n}\n\nfragment StackTraceFragment on StackTrace {\n  callFrames {\n    functionName\n    url\n    lineNumber\n    columnNumber\n  }\n}\n"
  }
};
})();

(node as any).hash = "80d49805182dc77101a9cfd21781a0e7";

export default node;
