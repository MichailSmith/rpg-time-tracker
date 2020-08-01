/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type GameMasterScreenQueryVariables = {};
export type GameMasterScreenQueryResponse = {
    readonly elapsedTime: number;
};
export type GameMasterScreenQuery = {
    readonly response: GameMasterScreenQueryResponse;
    readonly variables: GameMasterScreenQueryVariables;
};



/*
query GameMasterScreenQuery {
  elapsedTime
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "elapsedTime",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "GameMasterScreenQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "GameMasterScreenQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "6416e49b3ba8c79b9d787253e4c54e60",
    "id": null,
    "metadata": {},
    "name": "GameMasterScreenQuery",
    "operationKind": "query",
    "text": "query GameMasterScreenQuery {\n  elapsedTime\n}\n"
  }
};
})();
(node as any).hash = 'f5936a6b9726809ff40dc9340b0000da';
export default node;
