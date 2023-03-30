/**
 * @generated SignedSource<<754f03ca2ec752762566f659833f7ec5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NetworkEventDetailPanelFragment$data = {
  readonly __typename: "HttpNetworkEvent";
  readonly at: any;
  readonly id: string;
  readonly initiator: {
    readonly lineNumber: number | null;
    readonly origin: string | null;
  };
  readonly resourceType: string | null;
  readonly until: any;
  readonly " $fragmentSpreads": FragmentRefs<"RequestTabFragment" | "ResponseTabFragment">;
  readonly " $fragmentType": "NetworkEventDetailPanelFragment";
};
export type NetworkEventDetailPanelFragment$key = {
  readonly " $data"?: NetworkEventDetailPanelFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"NetworkEventDetailPanelFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NetworkEventDetailPanelFragment",
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
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "resourceType",
      "storageKey": null
    },
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
      "name": "until",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "HttpNetworkEventInitiator",
      "kind": "LinkedField",
      "name": "initiator",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "origin",
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RequestTabFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ResponseTabFragment"
    }
  ],
  "type": "HttpNetworkEvent",
  "abstractKey": null
};

(node as any).hash = "1f71143b9b5c344002fb27bedc30574b";

export default node;
