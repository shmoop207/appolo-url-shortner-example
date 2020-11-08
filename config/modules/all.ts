import {IEnv} from "../env/IEnv";
import {App} from "@appolo/core";
import {MongoModule} from "@appolo/mongo";
import {ViewModule, ViewEngines} from "@appolo/view";
import {ValidationModule} from "@appolo/validator";
import {LoggerModule} from "@appolo/logger";

export = async function (app: App, env: IEnv) {
    await app.module.load(LoggerModule);

    await app.module.use(
        ViewModule.for({viewEngine: ViewEngines.ejs}),
        ValidationModule,
        MongoModule.for({connection: env.mongo, config: {retryWrites: false}}))
}
