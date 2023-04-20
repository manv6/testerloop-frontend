/**
 * @generated SignedSource<<d6aef4462eea59b067d9c27ab6ed3fc3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type CommandEventStatus = "FAILED" | "SUCCESS" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type ActionRecordFragment$data = {
  readonly at: any;
  readonly description: string;
  readonly error: {
    readonly stackTrace: string;
    readonly url: string;
    readonly urlText: string;
  } | null;
  readonly id: string;
  readonly name: string;
  readonly status: CommandEventStatus;
  readonly until: any;
  readonly " $fragmentType": "ActionRecordFragment";
};
export type ActionRecordFragment$key = {
  readonly " $data"?: ActionRecordFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ActionRecordFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ActionRecordFragment",
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
      "kind": "ScalarField",
      "name": "status",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "CommandEventError",
      "kind": "LinkedField",
      "name": "error",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "stackTrace",
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
          "name": "urlText",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "CommandEvent",
  "abstractKey": null
};

(node as any).hash = "e777190b396e9d659c2b3d2c151aae2f";

export default node;
