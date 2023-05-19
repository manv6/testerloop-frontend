/**
 * @generated SignedSource<<193fb5a1fd3b941277d3ce24e43c45b0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type StackTraceFragment$data = {
  readonly callFrames: ReadonlyArray<{
    readonly columnNumber: number;
    readonly functionName: string;
    readonly lineNumber: number;
    readonly url: any;
  }>;
  readonly " $fragmentType": "StackTraceFragment";
};
export type StackTraceFragment$key = {
  readonly " $data"?: StackTraceFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"StackTraceFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StackTraceFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "CallFrame",
      "kind": "LinkedField",
      "name": "callFrames",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "functionName",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "url",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "lineNumber",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "columnNumber",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "StackTrace",
  "abstractKey": null
};

(node as any).hash = "3f51a01beca3e9a5304a49b821d34317";

export default node;
