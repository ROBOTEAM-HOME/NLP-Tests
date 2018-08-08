import * as pino from 'pino'
import { Logger } from 'pino'
import config from '../../test/config'
//const getNames = (list: string) => (list || '').split(';').map((name: string) => name.trim().toLowerCase())
// tslint:disable-next-line
const version = require('../../../package.json').version

export const createLogger = (name: string): Logger => {
  return pino({ name}).child({'env': config.ENV, 'version': version})

}
