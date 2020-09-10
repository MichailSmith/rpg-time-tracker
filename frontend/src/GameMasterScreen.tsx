import React from "react";
import { QueryRenderer } from "react-relay";
//import { Environment, Network, Store, RecordSource } from "relay-runtime";
import { GameMasterScreenQuery } from "./__generated__/GameMasterScreenQuery.graphql";
// @ts-ignore
import graphql from "babel-plugin-relay/macro";
import { ElapsedTime } from "./components/ElapsedTime";
import { TimeIncrementer } from "./components/TimeIncrementer";
import { environment } from "./relay/environment";
import { TimeResetter } from "./components/TimeResetter";

const query = graphql`
  query GameMasterScreenQuery {
    elapsedTime
  }
`;

export const GameMasterScreen = () => {
  return (
    <QueryRenderer<GameMasterScreenQuery>
      environment={environment}
      query={query}
      variables={{}}
      render={({ props, error, retry }) => {
        if (error) {
          return <div>{JSON.stringify(error)}</div>;
        }
        if (!props) {
          return <div>loading...</div>;
        }

        const onUpdate = retry ?? (() => {});

        return (
          <div>
            <ElapsedTime elapsedSeconds={props.elapsedTime} />
            <TimeIncrementer
              time={`Six Seconds`}
              bySeconds={6}
              onUpdate={onUpdate}
            />
            <TimeIncrementer
              time={`Ten Minutes`}
              bySeconds={600}
              onUpdate={onUpdate}
            />
            <TimeIncrementer
              time={`One Hour`}
              bySeconds={3600}
              onUpdate={onUpdate}
            />
            <TimeResetter
              time={`the beginning of time`}
              toSeconds={0}
              onUpdate={onUpdate}
            />
          </div>
        );
      }}
    />
  );
};
