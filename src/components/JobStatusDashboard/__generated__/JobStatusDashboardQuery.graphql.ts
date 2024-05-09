/**
 * @generated SignedSource<<83630b95edc0554c19f02173a794173c>>
 * @relayHash 2529512c6e9d9872436fdcb24285b38d
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 7b000aba79b42ffceeff331c5f507688283c3be56690c20e65218e63fbdc6614

import { ConcreteRequest, Query } from 'relay-runtime';
export type JobStatusDashboardQuery$variables = {};
export type JobStatusDashboardQuery$data = {
  readonly getAllStatuses: ReadonlyArray<{
    readonly fileName: string;
    readonly lastRun: string;
    readonly status: string;
  } | null>;
};
export type JobStatusDashboardQuery = {
  response: JobStatusDashboardQuery$data;
  variables: JobStatusDashboardQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "JobStatus",
    "kind": "LinkedField",
    "name": "getAllStatuses",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "fileName",
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
        "name": "lastRun",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "JobStatusDashboardQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "JobStatusDashboardQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": "7b000aba79b42ffceeff331c5f507688283c3be56690c20e65218e63fbdc6614",
    "metadata": {},
    "name": "JobStatusDashboardQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "c89956da3af2be519a55ec44f4af8c9e";

export default node;
