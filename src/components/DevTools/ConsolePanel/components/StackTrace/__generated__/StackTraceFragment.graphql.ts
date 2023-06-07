/**
 * @generated SignedSource<<b3a58310ce326ecfd4756662cbda1fa1>>
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
  readonly id: string;
  readonly " $fragmentType": "StackTraceFragment";
};
export type StackTraceFragment$key = {
  readonly " $data"?: StackTraceFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"StackTraceFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StackTraceFragment",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "CallFrame",
      "kind": "LinkedField",
      "name": "callFrames",
      "plural": true,
      "selections": [
        (v0/*: any*/),
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
})();

(node as any).hash = "cc0f86f658dfc9ec0618ea58147470df";

export default node;
