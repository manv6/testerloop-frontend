/**
 * @generated SignedSource<<bbad8b553e3301ee75c26043ac9616be>>
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
        readonly email: string;
        readonly user: {
          readonly avatar: any | null;
          readonly name: string;
          readonly url: any;
        } | null;
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
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "email",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "GitHubUser",
                      "kind": "LinkedField",
                      "name": "user",
                      "plural": false,
                      "selections": [
                        (v0/*: any*/),
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "avatar",
                          "storageKey": null
                        },
                        (v1/*: any*/)
                      ],
                      "storageKey": null
                    }
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

(node as any).hash = "0203ecd2d78131d09a89dfa6f5ad176b";

export default node;
