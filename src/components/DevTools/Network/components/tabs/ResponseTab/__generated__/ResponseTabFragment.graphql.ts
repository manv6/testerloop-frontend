/**
 * @generated SignedSource<<83d99b9913d25c7c85224c88ab470e4c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ResponseTabFragment$data = {
  readonly response: {
    readonly " $fragmentSpreads": FragmentRefs<"ResponseDataFragment" | "ResponseHeadersFragment">;
  };
  readonly " $fragmentType": "ResponseTabFragment";
};
export type ResponseTabFragment$key = {
  readonly " $data"?: ResponseTabFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ResponseTabFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ResponseTabFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "HttpNetworkResponse",
      "kind": "LinkedField",
      "name": "response",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ResponseDataFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ResponseHeadersFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "HttpNetworkEvent",
  "abstractKey": null
};

(node as any).hash = "024912a15ddfea1db674aa8c54a63690";

export default node;
