/**
 * @generated SignedSource<<7333ce304a118ce6df72eae514685945>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RequestTabFragment$data = {
  readonly request: {
    readonly " $fragmentSpreads": FragmentRefs<"QueryParamsFragment" | "RequestDataFragment" | "RequestHeadersFragment" | "RequestToUrlFragment">;
  };
  readonly " $fragmentType": "RequestTabFragment";
};
export type RequestTabFragment$key = {
  readonly " $data"?: RequestTabFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"RequestTabFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RequestTabFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "HttpNetworkRequest",
      "kind": "LinkedField",
      "name": "request",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "RequestHeadersFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "RequestDataFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "QueryParamsFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "RequestToUrlFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "HttpNetworkEvent",
  "abstractKey": null
};

(node as any).hash = "a94866aa1c391837a11777dcbd1741ae";

export default node;
