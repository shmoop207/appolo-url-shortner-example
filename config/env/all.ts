import { IEnv } from "./IEnv";

export = <IEnv>{
  mongo: process.env.MONGO,
  port: 4000,
  serverURL:"http://localhost:4000"
}
