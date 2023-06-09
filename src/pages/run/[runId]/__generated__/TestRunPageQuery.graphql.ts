/**
 * @generated SignedSource<<56df4e310f1a597030f5df6e610251da>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TestRunPageQuery$variables = {
  id: string;
};
export type TestRunPageQuery$data = {
  readonly testRun: {
    readonly executions: {
      readonly " $fragmentSpreads": FragmentRefs<"TestExecutionListFragment">;
    };
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"TestRunTitleFragment">;
  } | null;
};
export type TestRunPageQuery = {
  response: TestRunPageQuery$data;
  variables: TestRunPageQuery$variables;
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
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TestRunPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "TestRun",
        "kind": "LinkedField",
        "name": "testRun",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "TestExecutionConnection",
            "kind": "LinkedField",
            "name": "executions",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "TestExecutionListFragment"
              }
            ],
            "storageKey": null
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TestRunTitleFragment"
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
    "name": "TestRunPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "TestRun",
        "kind": "LinkedField",
        "name": "testRun",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "TestExecutionConnection",
            "kind": "LinkedField",
            "name": "executions",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "TestExecutionEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "TestExecution",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
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
                        "name": "title",
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
                        "alias": "failedCommands",
                        "args": [
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
                        "concreteType": "TestExecutionEventConnection",
                        "kind": "LinkedField",
                        "name": "events",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "totalCount",
                            "storageKey": null
                          }
                        ],
                        "storageKey": "events(filter:{\"commandFilter\":{\"status\":\"FAILED\"},\"type\":\"COMMAND\"})"
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
    ]
  },
  "params": {
    "cacheID": "6056c40b9f8d073927d2a4f91f6f2020",
    "id": null,
    "metadata": {},
    "name": "TestRunPageQuery",
    "operationKind": "query",
    "text": "query TestRunPageQuery(\n  $id: ID!\n) {\n  testRun(id: $id) {\n    id\n    executions {\n      ...TestExecutionListFragment\n    }\n    ...TestRunTitleFragment\n  }\n}\n\nfragment TestExecutionListFragment on TestExecutionConnection {\n  edges {\n    node {\n      id\n      ...TestExecutionListRowFragment\n    }\n  }\n}\n\nfragment TestExecutionListRowFragment on TestExecution {\n  id\n  at\n  title\n  until\n  failedCommands: events(filter: {type: COMMAND, commandFilter: {status: FAILED}}) {\n    totalCount\n  }\n}\n\nfragment TestRunTitleFragment on TestRun {\n  id\n}\n"
  }
};
})();

(node as any).hash = "fd8a83c4fe101d9821a50450a63f80c2";

export default node;
