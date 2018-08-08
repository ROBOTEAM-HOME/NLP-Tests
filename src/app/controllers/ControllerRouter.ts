import * as express from 'express'
import * as bodyParser from 'body-parser'
import {createLogger} from '../utils/logger'
//import * as hookRouter from './HookRouter'

/* tslint:disable: no-require-imports no-var-requires */
const cors: any = require('cors')
const logger = createLogger('cloud-ks-controller')
// todo use api version
// export const api_version = '/api/v1'
export const api_version = ''

/*
const corsOptions: any = {
    origin: config.CORS_ORIGIN,
}
*/

const errorHandler = (error: Error, req: express.Request, res: express.Response, next: Function) => {
    logger.error({errorName: error.name, stack: error.stack}, error.message)
    res.sendStatus(400)
}

export default class ControllerRouter {

    public constructor(app: express.Router) {
        const register = express.Router()
        register.use(bodyParser.json())
        register.use(errorHandler)
        app.options('*', cors())
        app.use(`${api_version}`, register)
    }

/*    private registerHook() {
        return express.Router().post('/', cors(), async (req: any, res: any) => {
            res.setHeader('Content-Type', 'application/json')
            hookRouter.webhookRouter(req, res)
        })
    }*/
}

export const createRegisterHookController = (app: express.Router) => {
    logger.info('WolframController Service (Controller) starting...')
    return new ControllerRouter(app)
}
