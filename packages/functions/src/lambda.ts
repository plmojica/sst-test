import { ApiHandler } from "sst/node/api";
import { Time } from "@my-sst-app/core/time";

export const handler = ApiHandler(async (_evt) => {
  return {
    statusCode: 200,
    body: `Hi from SST The time is ${Time.now()} Nagrereflect agad`,
  };
});
