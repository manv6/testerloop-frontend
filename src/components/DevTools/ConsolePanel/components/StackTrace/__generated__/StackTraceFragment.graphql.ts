/**
 * @generated SignedSource<<8d18cb1e99de685cffaa10eb8c392922>>
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
    readonly functionName: string;
    readonly id: string;
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
          "name": "id",
          "storageKey": null
        },
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "StackTrace",
  "abstractKey": null
};

(node as any).hash = "694f30e2c2c63e33344200c86c44f2ad";

export default node;
