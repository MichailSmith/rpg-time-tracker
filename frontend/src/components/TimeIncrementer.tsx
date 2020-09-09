import React from "react";
import { commitMutation } from "react-relay";
// @ts-ignore
import graphql from "babel-plugin-relay/macro";
import { environment } from "../relay/environment";
import { TimeIncrementerMutation } from "./__generated__/TimeIncrementerMutation.graphql";

type TimeIncrementerProps = {
  time: String;
  bySeconds: number;
  onUpdate: (newSeconds: number) => void;
};

const mutation = graphql`
  mutation TimeIncrementerMutation($bySeconds: Int!) {
    advanceTime(by: $bySeconds)
  }
`;

export const TimeIncrementer = ({
  time,
  bySeconds,
  onUpdate,
}: TimeIncrementerProps) => {
  return (
    <div>
      <button
        className="Time-Changer-Button"
        onClick={() => {
          commitMutation<TimeIncrementerMutation>(environment, {
            mutation,
            variables: { bySeconds },
            onCompleted: (response) => onUpdate(response.advanceTime),
          });
        }}
      >
        Increment Time by {time}
      </button>
    </div>
  );
};
