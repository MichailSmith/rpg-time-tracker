import { Environment, Network, Store, RecordSource } from "relay-runtime";

export const environment = new Environment({
  store: new Store(new RecordSource()),
  network: Network.create((operation, variables, cacheConfig, uploadables) => {
    return fetch("http://localhost:8080/query", {
      method: "POST",
      headers: {
        // Add authentication and other headers here
        "content-type": "application/json",
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
