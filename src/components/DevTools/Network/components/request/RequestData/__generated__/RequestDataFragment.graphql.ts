/**
 * @generated SignedSource<<06a8d47b7a84106493b03fcf97f5c5c4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RequestDataFragment$data = {
  readonly body: {
    readonly data: string;
    readonly mimeType: string;
  } | null;
  readonly " $fragmentType": "RequestDataFragment";
};
export type RequestDataFragment$key = {
  readonly " $data"?: RequestDataFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"RequestDataFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RequestDataFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "HttpRequestBody",
      "kind": "LinkedField",
      "name": "body",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "data",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "mimeType",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "HttpNetworkRequest",
  "abstractKey": null
};

(node as any).hash = "164442af6adbc907863ef270fc9d76c4";

export default node;
