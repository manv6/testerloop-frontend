/**
 * @generated SignedSource<<6674fd255f671f51238159ca29244c7a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type QueryParamsFragment$data = {
  readonly queryString: ReadonlyArray<{
    readonly key: string;
    readonly value: string;
  }>;
  readonly " $fragmentType": "QueryParamsFragment";
};
export type QueryParamsFragment$key = {
  readonly " $data"?: QueryParamsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"QueryParamsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "QueryParamsFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "KeyValuePair",
      "kind": "LinkedField",
      "name": "queryString",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "value",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "key",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "HttpNetworkRequest",
  "abstractKey": null
};

(node as any).hash = "f3bb9c97d7f47dfa64697c460b81eb23";

export default node;
