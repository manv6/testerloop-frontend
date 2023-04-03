/**
 * @generated SignedSource<<690d45b8837e055b120c7a8a416ea7a3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RequestToUrlFragment$data = {
  readonly url: {
    readonly url: string;
  };
  readonly " $fragmentType": "RequestToUrlFragment";
};
export type RequestToUrlFragment$key = {
  readonly " $data"?: RequestToUrlFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"RequestToUrlFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RequestToUrlFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "HttpNetworkRequestUrl",
      "kind": "LinkedField",
      "name": "url",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "url",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "HttpNetworkRequest",
  "abstractKey": null
};

(node as any).hash = "998c7fffee8a205326701f81ed7c5f03";

export default node;
