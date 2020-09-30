import { OAUTH_TOKEN } from "../constants";
import { Environment, Network, Store, RecordSource } from "relay-runtime";

export const environment = new Environment({
  store: new Store(new RecordSource()),
  network: Network.create((operation, variables, cacheConfig, uploadables) => {
    return fetch("/query", {
      method: "POST",
      headers: {
        // Add authentication and other headers here
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(OAUTH_TOKEN)}`,
      },
      body: JSON.stringify({
        query: operation.text, // GraphQL text from input
        variables,
      }),
    }).then((response) => {
      return response.json();
    });
  }),
});

// function fetchQuery(
//   operation: any,
//   variables: any,
//   cacheConfig: any,
//   uploadables: any
// ) {
//   return fetch("http://localhost:8080/query", {
//     method: "POST",
//     headers: {
//       // Add authentication and other headers here
//       "content-type": "application/json",
//     },
//     body: JSON.stringify({
//       query: operation.text, // GraphQL text from input
//       variables,
//     }),
//   }).then((response) => {
//     return response.json();
//   });
// }

// const subscriptionClient = new SubscriptionClient("ws://localhost:8080/query", {
//   reconnect: true,
// });

// const subscribe = (request: any, variables: any) => {
//   const subscribeObservable = subscriptionClient.request({
//     query: request.text,
//     operationName: request.name,
//     variables,
//   });
//   // Important: Convert subscriptions-transport-ws observable type to Relay's
//   return Observable.from(subscribeObservable);
// };

// const network = Network.create(fetchQuery, subscribe);
// // const network = Network.create(fetchQuery);
// const store = new Store(new RecordSource());

// const environment = new Environment({
//   network,
//   store,
//   // ... other options
// });

// export default environment;
