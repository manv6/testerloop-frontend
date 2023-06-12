/**
 * @generated SignedSource<<2f76e8beacee5fc6e12abd4d23dd9459>>
 * @relayHash 558ccd4ecbc736af5486c9ebee2f8f7d
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 3d152d7d94b18031691e9da0bd56e8f22a14fb493221aa3d82d38898bc0b00ca

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
    "id": "3d152d7d94b18031691e9da0bd56e8f22a14fb493221aa3d82d38898bc0b00ca",
    "metadata": {},
    "name": "IndexPageQuery",
    "operationKind": "query",
    "text": null
  }
};

(node as any).hash = "4394c41d387e62fa029f933b38275e22";

export default node;
