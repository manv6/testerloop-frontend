/**
 * @generated SignedSource<<eaecdd254024cfd9bcd843f0c9b3720d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ConsolePanelFragment$data = {
  readonly errors: {
    readonly totalCount: number;
  };
  readonly events: {
    readonly edges: ReadonlyArray<{
      readonly __typename: "TestExecutionEventEdge";
      readonly node: {
        readonly __typename: string;
        readonly at: any;
        readonly " $fragmentSpreads": FragmentRefs<"LogEntryFragment">;
      };
    }>;
  };
  readonly id: string;
  readonly logs: {
    readonly totalCount: number;
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
  "kind": "Literal",
  "name": "type",
  "value": [
    "CONSOLE"
  ]
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
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
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
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
      "alias": null,
      "args": [
        (v0/*: any*/)
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
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "LogEntryFragment"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "events(type:[\"CONSOLE\"])"
    },
    {
      "alias": "warnings",
      "args": [
        {
          "kind": "Literal",
          "name": "logLevel",
          "value": [
            "WARN"
          ]
        },
        (v0/*: any*/)
      ],
      "concreteType": "TestExecutionEventConnection",
      "kind": "LinkedField",
      "name": "events",
      "plural": false,
      "selections": (v2/*: any*/),
      "storageKey": "events(logLevel:[\"WARN\"],type:[\"CONSOLE\"])"
    },
    {
      "alias": "errors",
      "args": [
        {
          "kind": "Literal",
          "name": "logLevel",
          "value": [
            "ERROR"
          ]
        },
        (v0/*: any*/)
      ],
      "concreteType": "TestExecutionEventConnection",
      "kind": "LinkedField",
      "name": "events",
      "plural": false,
      "selections": (v2/*: any*/),
      "storageKey": "events(logLevel:[\"ERROR\"],type:[\"CONSOLE\"])"
    },
    {
      "alias": "logs",
      "args": [
        {
          "kind": "Literal",
          "name": "logLevel",
          "value": [
            "LOG"
          ]
        },
        (v0/*: any*/)
      ],
      "concreteType": "TestExecutionEventConnection",
      "kind": "LinkedField",
      "name": "events",
      "plural": false,
      "selections": (v2/*: any*/),
      "storageKey": "events(logLevel:[\"LOG\"],type:[\"CONSOLE\"])"
    }
  ],
  "type": "TestExecution",
  "abstractKey": null
};
})();

(node as any).hash = "ec4c9a24539a79188a23aa80607a2579";

export default node;
