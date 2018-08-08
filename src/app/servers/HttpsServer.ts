import * as express from 'express'
import { createLogger } from '../utils/logger'
import * as https from 'https'
import CpuUsage = NodeJS.CpuUsage
import {ServerOptions} from 'https'
//import * as http from 'http'
import {Server} from 'net'

// tslint:disable-next-line
const logger = createLogger('cloud-ks-https-server')
const startUsage: CpuUsage = process.cpuUsage()

/* tslint:disable: no-require-imports no-var-requires */
const version = require('../../../package.json').version



export interface Settings {
  port: string,
  healthcheck_port: string,
  serverOptions? : ServerOptions
}

function formatTime( seconds: number): string {
  const response = []
  const weeks = Math.floor(seconds / (3600 * 24 * 7))
  seconds -= weeks * (3600 * 24 * 7)
  if (weeks) {
    response.push(weeks + ' week' + (weeks !== 1 ? 's' : ''))
  }
  const days = Math.floor(seconds / (3600 * 24))
  seconds -= days * (3600 * 24)
  if (days) {
    response.push(days + ' day' + (days !== 1 ? 's' : ''))
  }
  const hours = Math.floor(seconds / (3600))
  seconds -= hours * (3600)
  if (hours) {
    response.push(hours + ' hour' + (hours !== 1 ? 's' : ''))
  }
  const minutes = Math.floor(seconds / (60))
  seconds -= minutes * (60)
  if (minutes) {
    response.push(minutes + ' minute' + (minutes !== 1 ? 's' : ''))
  }

  response.push(seconds + ' second' + (seconds !== 1 ? 's' : ''))

  return response.join(', ')
}

export class HttpsServer {
  public readonly app = express()
  // private readonly clientStore: Repository
  private httpsServer: Server

  // private settings: Settings
  public kardia: any


  public constructor (settings: Settings) {

    //this.settings = settings

    this.app.get('/', (req, res) => {
      logger.info(`Server OK (${version})`)
      res.end(`Server OK (${version})`)
    })

    this.app.use('/healthcheck', require('express-healthcheck')({
      healthy: () => {
        return {
          status: 'ok',
          version: version,
          stats: {
            upTime: formatTime(process.uptime()),
            platform: process.platform,
            pid: process.pid,
            memoryUsage: process.memoryUsage(),
            cpuUsage: process.cpuUsage(startUsage),
          },
        }
      },
    }))

    this.app.use((err: any, req: express.Request, res: express.Response, next: any) => {
      logger.error(err)
      res.sendStatus(500)
    })
  }

  set instance(inst: Server) {
    this.httpsServer = inst
  }

  get instance(): Server {
    return this.httpsServer
  }
}

export const createHttpsServer = (settings: Settings): Promise<HttpsServer> => {
  return new Promise<HttpsServer>((resolve, reject) => {
    //logger.info('start server. port (%s)', settings.port)
    const httpsServer = new HttpsServer(settings)

    //https.createServer(settings.serverOptions, httpsServer.app).listen(settings.port);

    //httpsServer.instance = httpsServer.app.listen(settings.port, (error: Error) => {
    httpsServer.instance = https.createServer(settings.serverOptions || {}, httpsServer.app).listen(settings.port, (error: Error) => {
      if (error) {
        logger.error('HTTPS start server failed', error)
        reject(error)
      } else {
        //logger.info('HTTPS server started on port:'+settings.port)
        resolve(httpsServer)
      }
    })
  })
}




