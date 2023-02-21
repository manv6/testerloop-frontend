/**
 * @generated SignedSource<<8f81fb7188b44cdc1d9f858393812260>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ConsolePanelFragment$data = {
  readonly id: string;
  readonly searchedEvents: {
    readonly edges: ReadonlyArray<{
      readonly __typename: "TestExecutionEventEdge";
      readonly node: {
        readonly at?: any;
        readonly " $fragmentSpreads": FragmentRefs<"LogEntryFragment">;
      };
    }>;
  };
  readonly " $fragmentSpreads": FragmentRefs<"LogFiltersFragment">;
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
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "logLevels"
    },
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
                {
                  "kind": "Variable",
                  "name": "logLevel",
                  "variableName": "logLevels"
                },
                (v0/*: any*/)
              ],
              "kind": "ObjectValue",
              "name": "consoleFilter"
            },
            {
              "kind": "Literal",
              "name": "type",
              "value": "CONSOLE"
            }
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
      "args": [
        (v0/*: any*/)
      ],
      "kind": "FragmentSpread",
      "name": "LogFiltersFragment"
    }
  ],
  "type": "TestExecution",
  "abstractKey": null
};
})();

(node as any).hash = "7c612f74cb333272ed6e36b416a85f39";

export default node;
