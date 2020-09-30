import React from "react";
// relay.config.ts
module.exports = {
  // ...
  // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
  //src: "./src",
  schema: "../backend/graph/schema.graphqls",
  exclude: ["**/node_modules/**", "**/__mocks__/**"],
};
