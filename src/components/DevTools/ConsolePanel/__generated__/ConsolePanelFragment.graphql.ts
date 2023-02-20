/**
 * @generated SignedSource<<7513cab619aa3dbb7ce4a54a35fc3253>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ConsolePanelFragment$data = {
  readonly errors: {
    readonly totalCount: number;
  };
  readonly id: string;
  readonly logs: {
    readonly totalCount: number;
  };
  readonly searchedEvents: {
    readonly edges: ReadonlyArray<{
      readonly __typename: "TestExecutionEventEdge";
      readonly node: {
        readonly at?: any;
        readonly " $fragmentSpreads": FragmentRefs<"LogEntryFragment">;
      };
    }>;
  };
  readonly warnings: {
    readonly totalCount: number;
  };
  readonly " $fragmentType": "ConsolePanelFragment";
};
export type ConsolePanelFragment$key = {
  readonly " $data"?: ConsolePanelFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ConsolePanelFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "kind": "Variable",
  "name": "logSearch",
  "variableName": "logSearch"
},
v1 = {
  "kind": "Literal",
  "name": "type",
  "value": "CONSOLE"
},
v2 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "totalCount",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": "",
      "kind": "LocalArgument",
      "name": "logSearch"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./ConsolePanelFragmentRefetchQuery.graphql'),
      "identifierField": "id"
    }
  },
  "name": "ConsolePanelFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": "searchedEvents",
      "args": [
        {
          "fields": [
            {
              "fields": [
                (v0/*: any*/)
              ],
              "kind": "ObjectValue",
              "name": "consoleFilter"
            },
            (v1/*: any*/)
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
              "concreteType": null,
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
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
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "LogEntryFragment"
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
                (v0/*: any*/)
              ],
              "kind": "ObjectValue",
              "name": "consoleFilter"
            },
            (v1/*: any*/)
          ],
          "kind": "ObjectValue",
          "name": "filter"
        }
      ],
      "concreteType": "TestExecutionEventConnection",
      "kind": "LinkedField",
      "name": "events",
      "plural": false,
      "selections": (v2/*: any*/),
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
                (v0/*: any*/)
              ],
              "kind": "ObjectValue",
              "name": "consoleFilter"
            },
            (v1/*: any*/)
          ],
          "kind": "ObjectValue",
          "name": "filter"
        }
      ],
      "concreteType": "TestExecutionEventConnection",
      "kind": "LinkedField",
      "name": "events",
      "plural": false,
      "selections": (v2/*: any*/),
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
                (v0/*: any*/)
              ],
              "kind": "ObjectValue",
              "name": "consoleFilter"
            },
            (v1/*: any*/)
          ],
          "kind": "ObjectValue",
          "name": "filter"
        }
      ],
      "concreteType": "TestExecutionEventConnection",
      "kind": "LinkedField",
      "name": "events",
      "plural": false,
      "selections": (v2/*: any*/),
      "storageKey": null
    }
  ],
  "type": "TestExecution",
  "abstractKey": null
};
})();

(node as any).hash = "3ec2a240c172060495b5e71c268c44c8";

export default node;
