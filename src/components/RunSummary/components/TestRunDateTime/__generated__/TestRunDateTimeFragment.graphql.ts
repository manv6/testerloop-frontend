/**
 * @generated SignedSource<<f088ae0b541f7cf1ab6b6bd766b3ef45>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TestRunDateTimeFragment$data = {
  readonly executions: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly at: any;
      };
    }>;
  };
  readonly " $fragmentType": "TestRunDateTimeFragment";
};
export type TestRunDateTimeFragment$key = {
  readonly " $data"?: TestRunDateTimeFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TestRunDateTimeFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TestRunDateTimeFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "TestExecutionConnection",
      "kind": "LinkedField",
      "name": "executions",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "TestExecutionEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "TestExecution",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "at",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "TestRun",
  "abstractKey": null
};

(node as any).hash = "be901c05ce07b538ee52163f787e0c35";

export default node;
