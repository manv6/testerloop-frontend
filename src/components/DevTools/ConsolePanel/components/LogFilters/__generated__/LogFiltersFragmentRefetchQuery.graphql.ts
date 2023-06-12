/**
 * @generated SignedSource<<7fcb39ec22e6ce9b1da59430d62887ff>>
 * @relayHash 4c460312311bd4faf2d96dd5371abecd
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID d93a7d9d9ef2efaaefbab8b823a9dcce4a20984627b9749f4851db6c1348ee56

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LogFiltersFragmentRefetchQuery$variables = {
  id: string;
  logSearch?: string | null;
};
export type LogFiltersFragmentRefetchQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"LogFiltersFragment">;
  } | null;
};
export type LogFiltersFragmentRefetchQuery = {
  response: LogFiltersFragmentRefetchQuery$data;
  variables: LogFiltersFragmentRefetchQuery$variables;
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
  "name": "logSearch"
},
v2 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v3 = {
  "kind": "Variable",
  "name": "logSearch",
  "variableName": "logSearch"
},
v4 = {
  "kind": "Literal",
  "name": "type",
  "value": "CONSOLE"
},
v5 = [
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
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "LogFiltersFragmentRefetchQuery",
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
              (v3/*: any*/)
            ],
            "kind": "FragmentSpread",
            "name": "LogFiltersFragment"
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
    "name": "LogFiltersFragmentRefetchQuery",
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
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
                          (v3/*: any*/)
                        ],
                        "kind": "ObjectValue",
                        "name": "consoleFilter"
                      },
                      (v4/*: any*/)
                    ],
                    "kind": "ObjectValue",
                    "name": "filter"
                  }
                ],
                "concreteType": "TestExecutionEventConnection",
                "kind": "LinkedField",
                "name": "events",
                "plural": false,
                "selections": (v5/*: any*/),
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
                          (v3/*: any*/)
                        ],
                        "kind": "ObjectValue",
                        "name": "consoleFilter"
                      },
                      (v4/*: any*/)
                    ],
                    "kind": "ObjectValue",
                    "name": "filter"
                  }
                ],
                "concreteType": "TestExecutionEventConnection",
                "kind": "LinkedField",
                "name": "events",
                "plural": false,
                "selections": (v5/*: any*/),
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
                          (v3/*: any*/)
                        ],
                        "kind": "ObjectValue",
                        "name": "consoleFilter"
                      },
                      (v4/*: any*/)
                    ],
                    "kind": "ObjectValue",
                    "name": "filter"
                  }
                ],
                "concreteType": "TestExecutionEventConnection",
                "kind": "LinkedField",
                "name": "events",
                "plural": false,
                "selections": (v5/*: any*/),
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
    "id": "d93a7d9d9ef2efaaefbab8b823a9dcce4a20984627b9749f4851db6c1348ee56",
    "metadata": {},
    "name": "LogFiltersFragmentRefetchQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "6701837dc11dc88f65a8830a6676505b";

export default node;
