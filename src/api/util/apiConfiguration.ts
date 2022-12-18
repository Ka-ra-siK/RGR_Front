import { env } from "../../env";
import { Configuration } from "../base/configuration";

export const configuration: Configuration = {
    basePath: env.endpoint
};
