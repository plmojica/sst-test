import { SSTConfig } from "sst";
import { API } from "./stacks/MyStack";

export default {
  config(_input) {
    return {
      name: "my-sst-app",
      region: "us-east-2",
    };
  },
  stacks(app) {
    app.stack(API, { id: "my-stack" });
  }
} satisfies SSTConfig;