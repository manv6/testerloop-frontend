/**
 * @generated SignedSource<<5ce02af9add9d61273df91ab4a9bf033>>
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "StackTrace",
  "abstractKey": null
};

(node as any).hash = "3261de986d81ac2ae685ad67cd75878b";

export default node;
