import React from "react";
import { commitMutation } from "react-relay";
// @ts-ignore
import graphql from "babel-plugin-relay/macro";
import { environment } from "../relay/environment";
import { TimeResetterMutation } from "./__generated__/TimeResetterMutation.graphql";

type TimeResetterProps = {
  time: String;
  toSeconds: number;
  onUpdate: (newSeconds: number) => void;
};

const mutation = graphql`
  mutation TimeResetterMutation($toSeconds: Int!) {
    resetTime(to: $toSeconds)
  }
`;

export const TimeResetter = ({
  time,
  toSeconds,
  onUpdate,
}: TimeResetterProps) => {
  return (
    <div>
      <button
        className="Time-Changer-Button"
        onClick={() => {
          commitMutation<TimeResetterMutation>(environment, {
            mutation,
            variables: { toSeconds },
            onCompleted: (response) => onUpdate(response.resetTime),
          });
        }}
      >
        Reset Time to {time}
      </button>
    </div>
  );
};
