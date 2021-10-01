import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "freelancer web",
          type: "deposit",
          category: "dev",
          amount: 6000,
          createdAt: new Date("2021-10-01"),
        },
        {
          id: 2,
          title: "games",
          type: "withdraw",
          category: "lazer",
          amount: 1200,
          createdAt: new Date("2021-08-01"),
        },
        {
          id: 3,
          title: "rent",
          type: "withdraw",
          category: "house",
          amount: 3000,
          createdAt: new Date("2021-08-01"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
