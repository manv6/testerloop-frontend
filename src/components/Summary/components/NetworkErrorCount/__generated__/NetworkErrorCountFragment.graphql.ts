/**
 * @generated SignedSource<<18fd353c1ae100b868172fe22b910ed2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NetworkErrorCountFragment$data = {
  readonly summaryNetworkErrors: {
    readonly totalCount: number;
  };
  readonly " $fragmentType": "NetworkErrorCountFragment";
};
export type NetworkErrorCountFragment$key = {
  readonly " $data"?: NetworkErrorCountFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"NetworkErrorCountFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NetworkErrorCountFragment",
  "selections": [
    {
      "alias": "summaryNetworkErrors",
      "args": [
        {
          "kind": "Literal",
          "name": "filter",
          "value": {
            "networkFilter": {
              "status": {
                "gte": 400
              }
            },
            "type": "NETWORK"
          }
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
          "kind": "ScalarField",
          "name": "totalCount",
          "storageKey": null
        }
      ],
      "storageKey": "events(filter:{\"networkFilter\":{\"status\":{\"gte\":400}},\"type\":\"NETWORK\"})"
    }
  ],
  "type": "TestExecution",
  "abstractKey": null
};

(node as any).hash = "e1e894a78e003e97bd254441d9998ee8";

export default node;
