import React, { useState } from "react";

const SECONDS_IN_MINUTE = 60;
const SECONDS_IN_HOUR = 3600;

export const ElapsedTime = ({ elapsedSeconds }: { elapsedSeconds: number }) => {
  const hours = Math.floor(elapsedSeconds / SECONDS_IN_HOUR);
  const minutes = Math.floor(
    (elapsedSeconds % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE
  );
  const seconds = elapsedSeconds % SECONDS_IN_MINUTE;

  return (
    <>{`It has been ${hours} hours, ${minutes} minutes, and ${seconds} seconds`}</>
  );
};
