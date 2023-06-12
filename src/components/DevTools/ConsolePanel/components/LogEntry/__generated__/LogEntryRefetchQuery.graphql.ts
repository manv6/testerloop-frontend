/**
 * @generated SignedSource<<95ba0ea8bc8ce025e7bde533e280d040>>
 * @relayHash f980a11f0ffd57395747f054c749b331
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 726de9e5743d97381fb7bad092e924ad2c5cddc4a6d6242a9cd960b55c50ff28

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
    "id": "726de9e5743d97381fb7bad092e924ad2c5cddc4a6d6242a9cd960b55c50ff28",
    "metadata": {},
    "name": "LogEntryRefetchQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "47d4a72b873e687da69ad68ed82890f7";

export default node;
