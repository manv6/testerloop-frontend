/**
 * @generated SignedSource<<a95f984e747ccaa9f846ecb31fe0b071>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EnvironmentDetailsFragment$data = {
  readonly at: any;
  readonly summaryEnvironmentDetails: {
    readonly id: string;
    readonly testCodeRevision: {
      readonly author?: {
        readonly name: string;
      };
      readonly branch?: {
        readonly name: string;
        readonly url: any;
      } | null;
      readonly commitId?: string;
      readonly url?: any;
    } | null;
  };
  readonly " $fragmentType": "EnvironmentDetailsFragment";
};
export type EnvironmentDetailsFragment$key = {
  readonly " $data"?: EnvironmentDetailsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EnvironmentDetailsFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EnvironmentDetailsFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "at",
      "storageKey": null
    },
    {
      "alias": "summaryEnvironmentDetails",
      "args": null,
      "concreteType": "TestRun",
      "kind": "LinkedField",
      "name": "testRun",
      "plural": false,
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
          "concreteType": null,
          "kind": "LinkedField",
          "name": "testCodeRevision",
          "plural": false,
          "selections": [
            {
              "kind": "InlineFragment",
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "GitHubActor",
                  "kind": "LinkedField",
                  "name": "author",
                  "plural": false,
                  "selections": [
                    (v0/*: any*/)
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": [
                    {
                      "kind": "Literal",
                      "name": "type",
                      "value": "SHORT"
                    }
                  ],
                  "kind": "ScalarField",
                  "name": "commitId",
                  "storageKey": "commitId(type:\"SHORT\")"
                },
                (v1/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "GitHubBranch",
                  "kind": "LinkedField",
                  "name": "branch",
                  "plural": false,
                  "selections": [
                    (v0/*: any*/),
                    (v1/*: any*/)
                  ],
                  "storageKey": null
                }
              ],
              "type": "GitHubRevision",
              "abstractKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "TestExecution",
  "abstractKey": null
};
})();

(node as any).hash = "d6a1f7b5e1d8aac9088096e685071385";

export default node;
