/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type TimeIncrementerMutationVariables = {
    bySeconds: number;
};
export type TimeIncrementerMutationResponse = {
    readonly advanceTime: number;
};
export type TimeIncrementerMutation = {
    readonly response: TimeIncrementerMutationResponse;
    readonly variables: TimeIncrementerMutationVariables;
};



/*
mutation TimeIncrementerMutation(
  $bySeconds: Int!
) {
  advanceTime(by: $bySeconds)
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "bySeconds"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "by",
        "variableName": "bySeconds"
      }
    ],
    "kind": "ScalarField",
    "name": "advanceTime",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TimeIncrementerMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TimeIncrementerMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "efe7f1045bbf85b8e4ce687118cc550e",
    "id": null,
    "metadata": {},
    "name": "TimeIncrementerMutation",
    "operationKind": "mutation",
    "text": "mutation TimeIncrementerMutation(\n  $bySeconds: Int!\n) {\n  advanceTime(by: $bySeconds)\n}\n"
  }
};
})();
(node as any).hash = 'fa14455ccf127aba66121979fa17f642';
export default node;
