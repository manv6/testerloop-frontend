/**
 * @generated SignedSource<<0c270fecc8d910548336b5067e0da4ee>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ResponseDataFragment$data = {
  readonly body: {
    readonly data: string;
    readonly mimeType: string;
    readonly size: number;
  };
  readonly " $fragmentType": "ResponseDataFragment";
};
export type ResponseDataFragment$key = {
  readonly " $data"?: ResponseDataFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ResponseDataFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ResponseDataFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "HttpResponseBody",
      "kind": "LinkedField",
      "name": "body",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "mimeType",
          "storageKey": null
        },
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
          "name": "size",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "HttpNetworkResponse",
  "abstractKey": null
};

(node as any).hash = "0ca3b339f951263487b8bc9b67d16786";

export default node;
