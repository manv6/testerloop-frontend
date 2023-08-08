/**
 * @generated SignedSource<<145d9b456ef7521eaf60b8c2a900c991>>
 * @relayHash 54eb34181466163b2ba5d41aa577a34d
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 3d54b5ae815d4d355531a8bf499cb0fe5a1ccf937a1d9ed48a4549bc853abb44

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
    readonly testCodeRevision: {
      readonly " $fragmentSpreads": FragmentRefs<"TestRunAuthorFragment" | "TestRunBranchFragment">;
    } | null;
    readonly " $fragmentSpreads": FragmentRefs<"RunSummaryFragment" | "TestRunTitleFragment">;
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
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = [
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
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v7 = [
  (v6/*: any*/)
];
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
            "concreteType": null,
            "kind": "LinkedField",
            "name": "testCodeRevision",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "TestRunAuthorFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "TestRunBranchFragment"
              }
            ],
            "storageKey": null
          },
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
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RunSummaryFragment"
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
            "concreteType": null,
            "kind": "LinkedField",
            "name": "testCodeRevision",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "author",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v4/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "type": "GitRevision",
                "abstractKey": "__isGitRevision"
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "GitHubBranch",
                    "kind": "LinkedField",
                    "name": "branch",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
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
                "type": "GitHubRevision",
                "abstractKey": null
              }
            ],
            "storageKey": null
          },
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
                    "kind": "ScalarField",
                    "name": "cursor",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "TestExecution",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
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
                        "name": "at",
                        "storageKey": null
                      },
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "until",
                        "storageKey": null
                      },
                      {
                        "alias": "failedCommands",
                        "args": (v5/*: any*/),
                        "concreteType": "TestExecutionEventConnection",
                        "kind": "LinkedField",
                        "name": "events",
                        "plural": false,
                        "selections": (v7/*: any*/),
                        "storageKey": "events(filter:{\"commandFilter\":{\"status\":\"FAILED\"},\"type\":\"COMMAND\"})"
                      },
                      {
                        "alias": null,
                        "args": (v5/*: any*/),
                        "concreteType": "TestExecutionEventConnection",
                        "kind": "LinkedField",
                        "name": "events",
                        "plural": false,
                        "selections": (v7/*: any*/),
                        "storageKey": "events(filter:{\"commandFilter\":{\"status\":\"FAILED\"},\"type\":\"COMMAND\"})"
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v6/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "3d54b5ae815d4d355531a8bf499cb0fe5a1ccf937a1d9ed48a4549bc853abb44",
    "metadata": {},
    "name": "TestRunPageQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "b424c8447172dba363158a9e264d5feb";

export default node;
