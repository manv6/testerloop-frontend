/**
 * @generated SignedSource<<7d336a6afc779b2ca4fab253694c2522>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LogEntryRefetchQuery$variables = {
  id: string;
  open?: boolean | null;
};
export type LogEntryRefetchQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"LogEntryFragment">;
  } | null;
};
export type LogEntryRefetchQuery = {
  response: LogEntryRefetchQuery$data;
  variables: LogEntryRefetchQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v1 = {
  "defaultValue": false,
  "kind": "LocalArgument",
  "name": "open"
},
v2 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "LogEntryRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": [
              {
                "kind": "Variable",
                "name": "open",
                "variableName": "open"
              }
            ],
            "kind": "FragmentSpread",
            "name": "LogEntryFragment"
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
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "LogEntryRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v3/*: any*/),
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
                    "condition": "open",
                    "kind": "Condition",
                    "passingValue": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "CallFrame",
                        "kind": "LinkedField",
                        "name": "callFrames",
                        "plural": true,
                        "selections": [
                          (v3/*: any*/),
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
                          }
                        ],
                        "storageKey": null
                      }
                    ]
                  },
                  (v3/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "type": "ConsoleLogEvent",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f980a11f0ffd57395747f054c749b331",
    "id": null,
    "metadata": {},
    "name": "LogEntryRefetchQuery",
    "operationKind": "query",
    "text": "query LogEntryRefetchQuery(\n  $open: Boolean = false\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...LogEntryFragment_3Qbc3L\n    id\n  }\n}\n\nfragment LogEntryFragment_3Qbc3L on ConsoleLogEvent {\n  id\n  at\n  message\n  logLevel\n  stackTrace {\n    ...StackTraceFragment @include(if: $open)\n    id\n  }\n}\n\nfragment StackTraceFragment on StackTrace {\n  callFrames {\n    id\n    functionName\n    url\n    lineNumber\n  }\n}\n"
  }
};
})();

(node as any).hash = "47d4a72b873e687da69ad68ed82890f7";

export default node;
