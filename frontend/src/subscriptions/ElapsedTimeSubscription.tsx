import React, { useState } from "react";
import { environment } from "../relay/environment";
import { requestSubscription, graphql } from "react-relay";

const subscription = graphql`
  subscription ElapsedTimeSubscription($id: ID!) {
    elapsedTimeSubscription(id: $id) {
      time {
        elapsedTime
      }
    }
  }
`;

const variables = {
  id: 1,
};

requestSubscription(
  environment, // see Environment docs
  {
    subscription,
    variables,
    // optional but recommended:
    onCompleted: () => {
      /* server closed the subscription */
    },
    onError: (error) => console.error(error),
  }
);
