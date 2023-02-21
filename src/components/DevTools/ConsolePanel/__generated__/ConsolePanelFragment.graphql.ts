/**
 * @generated SignedSource<<869be4a88d804c6afaa4a0b28da60bbe>>
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
        readonly __typename: "ConsoleLogEvent";
        readonly at: any;
        readonly " $fragmentSpreads": FragmentRefs<"LogEntryFragment">;
      } | {
        // This will never be '%other', but we need some
        // value in case none of the concrete values match.
        readonly __typename: "%other";
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
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
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

(node as any).hash = "80d49805182dc77101a9cfd21781a0e7";

export default node;
