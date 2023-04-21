/**
 * @generated SignedSource<<b5ce601daaade60cc570c56de0d04c55>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SeekerFragment$data = {
  readonly screenshots: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly at?: any;
        readonly url?: {
          readonly url: any;
        };
      };
    }>;
  };
  readonly " $fragmentType": "SeekerFragment";
};
export type SeekerFragment$key = {
  readonly " $data"?: SeekerFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SeekerFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SeekerFragment",
  "selections": [
    {
      "alias": "screenshots",
      "args": [
        {
          "kind": "Literal",
          "name": "filter",
          "value": {
            "type": "SCREENSHOT"
          }
        }
      ],
      "concreteType": "TestExecutionEventConnection",
      "kind": "LinkedField",
      "name": "events",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "TestExecutionEventEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": null,
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "kind": "InlineFragment",
                  "selections": [
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
                      "concreteType": "SignedURL",
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
                  "type": "TestExecutionScreenshot",
                  "abstractKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "events(filter:{\"type\":\"SCREENSHOT\"})"
    }
  ],
  "type": "TestExecution",
  "abstractKey": null
};

(node as any).hash = "bf3d397ea46df2ebe9b4b40b70d84165";

export default node;
