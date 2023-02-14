/**
 * @generated SignedSource<<e5bcc834a7ba635b04753e9b29030cc0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppQuery$variables = {};
export type AppQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"NetworkPanelFragment" | "StepsFragment" | "SummaryFragment" | "TimelineControlsFragment">;
};
export type AppQuery = {
  response: AppQuery$data;
  variables: AppQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": [
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppQuery",
    "selections": [
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
    "cacheID": "81d0c1bf8e6a201956efe553827eac99",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery {\n  ...TimelineControlsFragment\n  ...NetworkPanelFragment\n  ...SummaryFragment\n  ...StepsFragment\n}\n\nfragment NetworkPanelFragment on Query {\n  test\n}\n\nfragment StepsFragment on Query {\n  test\n}\n\nfragment SummaryFragment on Query {\n  test\n}\n\nfragment TimelineControlsFragment on Query {\n  test\n}\n"
  }
};

(node as any).hash = "f1706d191eeee2006849d5ff16ff3b6d";

export default node;
