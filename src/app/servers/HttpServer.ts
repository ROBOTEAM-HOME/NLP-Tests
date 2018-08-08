import * as express from 'express'
import { createLogger } from '../utils/logger'
import * as http from 'http'
import CpuUsage = NodeJS.CpuUsage

// tslint:disable-next-line
const logger = createLogger('cloud-ks-http-server')
const startUsage: CpuUsage = process.cpuUsage()

/* tslint:disable: no-require-imports no-var-requires */
const version = require('../../../package.json').version

interface Settings {
  port: string,
  healthcheck_port?: string
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

export class HttpServer {
  public readonly app = express()
  //private readonly clientStore: Repository
  private httpServer: http.Server



  public constructor (settings: Settings) {

    //this.settings = settings
    //this.kardia = Kardia.start({ name: 'HttpServer', host: '0.0.0.0', port: this.settings.healthcheck_port});

    this.app.get('/', (req: any, res: any) => {

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
      res.sendStatus(400)
    })

  }

  set instance(inst: http.Server) {
    this.httpServer = inst
  }

  get instance(): http.Server {
    return this.httpServer
  }
}

export const createHttpServer = (settings: Settings): Promise<HttpServer> => {
  return new Promise<HttpServer>((resolve, reject) => {
    //logger.info('start server. port (%s)', settings.port)
    const httpServer = new HttpServer(settings)
    httpServer.instance = httpServer.app.listen(settings.port, (error: Error) => {
      if (error) {
        logger.error('start server failed', error)
        reject(error)
        return
      }
      logger.info('HTTP server started on port:' + settings.port)
      resolve(httpServer)
    })
  })
}




