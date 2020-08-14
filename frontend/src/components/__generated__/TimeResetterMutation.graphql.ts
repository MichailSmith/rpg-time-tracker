/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type TimeResetterMutationVariables = {
    toSeconds: number;
};
export type TimeResetterMutationResponse = {
    readonly resetTime: number;
};
export type TimeResetterMutation = {
    readonly response: TimeResetterMutationResponse;
    readonly variables: TimeResetterMutationVariables;
};



/*
mutation TimeResetterMutation(
  $toSeconds: Int!
) {
  resetTime(to: $toSeconds)
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "toSeconds"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "to",
        "variableName": "toSeconds"
      }
    ],
    "kind": "ScalarField",
    "name": "resetTime",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TimeResetterMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TimeResetterMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5f1a5c70dfe71194d7bf44b5004d0a37",
    "id": null,
    "metadata": {},
    "name": "TimeResetterMutation",
    "operationKind": "mutation",
    "text": "mutation TimeResetterMutation(\n  $toSeconds: Int!\n) {\n  resetTime(to: $toSeconds)\n}\n"
  }
};
})();
(node as any).hash = 'e57f6911168fa912f35266a5b8aa2cff';
export default node;
