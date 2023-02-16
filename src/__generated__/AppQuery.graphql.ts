/**
 * @generated SignedSource<<16e39639c1ff6d89d500c9b90e92a1df>>
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
  readonly " $fragmentSpreads": FragmentRefs<"ConsolePanelFragment" | "NetworkPanelFragment" | "StepsFragment" | "SummaryFragment" | "TimelineControlsFragment">;
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
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
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
        "args": null,
        "kind": "FragmentSpread",
        "name": "ConsolePanelFragment"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "TimelineControlsFragment"
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
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "testExecutionId"
          }
        ],
        "concreteType": "TestExecution",
        "kind": "LinkedField",
        "name": "testExecution",
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
            "args": [
              {
                "kind": "Literal",
                "name": "type",
                "value": "CONSOLE"
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
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "at",
                        "storageKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
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
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "events(type:\"CONSOLE\")"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "test",
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "557f60dbf3a36a99eee8693e9facf852",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery(\n  $testExecutionId: ID!\n) {\n  ...ConsolePanelFragment\n  ...TimelineControlsFragment\n  ...NetworkPanelFragment\n  ...SummaryFragment\n  ...StepsFragment\n}\n\nfragment ConsolePanelFragment on Query {\n  testExecution(id: $testExecutionId) {\n    id\n    events(type: CONSOLE) {\n      edges {\n        __typename\n        node {\n          __typename\n          at\n          ... on ConsoleLogEvent {\n            at\n            message\n            logLevel\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment NetworkPanelFragment on Query {\n  test\n}\n\nfragment StepsFragment on Query {\n  test\n}\n\nfragment SummaryFragment on Query {\n  test\n}\n\nfragment TimelineControlsFragment on Query {\n  test\n}\n"
  }
};
})();

(node as any).hash = "0c665d3bd1bf2cc8fe03241fe938c120";

export default node;
