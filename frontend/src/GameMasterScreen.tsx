import React from "react";
import { createFragmentContainer, QueryRenderer } from "react-relay";
import { Environment, Network, Store, RecordSource } from "relay-runtime";
import { GameMasterScreenQuery } from "../__generated__/GameMasterScreenQuery.graphql";
// @ts-ignore
import graphql from "babel-plugin-relay/macro";

const environment = new Environment({
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

const query = graphql`
  query GameMasterScreenQuery {
    elapsedTime
  }
`;

export default () => (
  <QueryRenderer<GameMasterScreenQuery>
    environment={environment}
    query={query}
    variables={{}}
    render={({ props, error }) => {
      if (error) {
        return <div>{JSON.stringify(error)}</div>;
      }
      if (!props) {
        return <div>loading...</div>;
      }
      return <div>{props.elapsedTime}</div>;
    }}
  />
);
