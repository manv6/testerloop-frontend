/**
 * @generated SignedSource<<fb4c6c5662cfade3214851333c2f965b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LogFiltersFragment$data = {
  readonly errors: {
    readonly totalCount: number;
  };
  readonly id: string;
  readonly logs: {
    readonly totalCount: number;
  };
  readonly warnings: {
    readonly totalCount: number;
  };
  readonly " $fragmentType": "LogFiltersFragment";
};
export type LogFiltersFragment$key = {
  readonly " $data"?: LogFiltersFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"LogFiltersFragment">;
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
      "defaultValue": null,
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
      "operation": require('./LogFiltersFragmentRefetchQuery.graphql'),
      "identifierField": "id"
    }
  },
  "name": "LogFiltersFragment",
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "TestExecution",
  "abstractKey": null
};
})();

(node as any).hash = "6701837dc11dc88f65a8830a6676505b";

export default node;
