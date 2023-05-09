/**
 * @generated SignedSource<<c24012be1fedd7c39ac367ca122aef83>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type IndexPageQuery$variables = {};
export type IndexPageQuery$data = {
  readonly testRuns: {
    readonly " $fragmentSpreads": FragmentRefs<"TestRunListFragment">;
  };
};
export type IndexPageQuery = {
  response: IndexPageQuery$data;
  variables: IndexPageQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "IndexPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TestRunConnection",
        "kind": "LinkedField",
        "name": "testRuns",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TestRunListFragment"
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "IndexPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TestRunConnection",
        "kind": "LinkedField",
        "name": "testRuns",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "TestRunEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "TestRun",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
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
                        "kind": "ScalarField",
                        "name": "totalCount",
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
    ]
  },
  "params": {
    "cacheID": "f42748c930d3aa86f193e706615810ae",
    "id": null,
    "metadata": {},
    "name": "IndexPageQuery",
    "operationKind": "query",
    "text": "query IndexPageQuery {\n  testRuns {\n    ...TestRunListFragment\n  }\n}\n\nfragment TestRunListFragment on TestRunConnection {\n  edges {\n    node {\n      id\n      ...TestRunListRowFragment\n    }\n  }\n}\n\nfragment TestRunListRowFragment on TestRun {\n  id\n  executions {\n    totalCount\n  }\n}\n"
  }
};

(node as any).hash = "4394c41d387e62fa029f933b38275e22";

export default node;
