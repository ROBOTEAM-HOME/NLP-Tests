Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const logger_1 = require("../utils/logger");
//import * as hookRouter from './HookRouter'
/* tslint:disable: no-require-imports no-var-requires */
const cors = require('cors');
const logger = logger_1.createLogger('cloud-ks-controller');
// todo use api version
// export const api_version = '/api/v1'
exports.api_version = '';
/*
const corsOptions: any = {
    origin: config.CORS_ORIGIN,
}
*/
const errorHandler = (error, req, res, next) => {
    logger.error({ errorName: error.name, stack: error.stack }, error.message);
    res.sendStatus(400);
};
class ControllerRouter {
    constructor(app) {
        const register = express.Router();
        register.use(bodyParser.json());
        register.use(errorHandler);
        app.options('*', cors());
        app.use(`${exports.api_version}`, register);
    }
}
exports.default = ControllerRouter;
exports.createRegisterHookController = (app) => {
    logger.info('WolframController Service (Controller) starting...');
    return new ControllerRouter(app);
};
//# sourceMappingURL=ControllerRouter.js.map