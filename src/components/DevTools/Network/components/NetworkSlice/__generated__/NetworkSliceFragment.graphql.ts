/**
 * @generated SignedSource<<1ac3da9eb033a437dfffdaafccf045b0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NetworkSliceFragment$data = {
  readonly __typename: "HttpNetworkEvent";
  readonly at: any;
  readonly id: string;
  readonly initiator: {
    readonly lineNumber: number | null;
    readonly origin: string | null;
  };
  readonly request: {
    readonly method: string;
    readonly url: {
      readonly url: string;
    };
  };
  readonly resourceType: string | null;
  readonly response: {
    readonly body: {
      readonly mimeType: string;
      readonly size: number;
    };
    readonly status: number;
    readonly transferSize: number;
  };
  readonly until: any;
  readonly " $fragmentType": "NetworkSliceFragment";
};
export type NetworkSliceFragment$key = {
  readonly " $data"?: NetworkSliceFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"NetworkSliceFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NetworkSliceFragment",
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
      "alias": null,
      "args": null,
      "concreteType": "HttpNetworkRequest",
      "kind": "LinkedField",
      "name": "request",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "method",
          "storageKey": null
        },
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
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "HttpNetworkResponse",
      "kind": "LinkedField",
      "name": "response",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "status",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "transferSize",
          "storageKey": null
        },
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
              "name": "size",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "HttpNetworkEvent",
  "abstractKey": null
};

(node as any).hash = "92b02f18edf93e9229a9d34dbcdff027";

export default node;
