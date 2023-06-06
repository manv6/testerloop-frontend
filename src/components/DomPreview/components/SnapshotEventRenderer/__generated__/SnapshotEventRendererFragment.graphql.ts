/**
 * @generated SignedSource<<87394553db3f3febaf79249de74e0c3f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SnapshotEventRendererFragment$data = {
  readonly nextSnapshot: {
    readonly dom: string;
  } | null;
  readonly previousSnapshot: {
    readonly dom: string;
  } | null;
  readonly " $fragmentType": "SnapshotEventRendererFragment";
};
export type SnapshotEventRendererFragment$key = {
  readonly " $data"?: SnapshotEventRendererFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SnapshotEventRendererFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "dom",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SnapshotEventRendererFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "TestExecutionSnapshot",
      "kind": "LinkedField",
      "name": "previousSnapshot",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "TestExecutionSnapshot",
      "kind": "LinkedField",
      "name": "nextSnapshot",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    }
  ],
  "type": "SnapshotEvent",
  "abstractKey": "__isSnapshotEvent"
};
})();

(node as any).hash = "d30d10bf824fbdb1812c1b8bcd79b585";

export default node;
