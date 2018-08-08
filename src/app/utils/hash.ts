import * as crypto from 'crypto'
// tslint:disable-next-line
const vFour = require('uuid').v4;
// tslint:disable-next-line
const vOne = require('uuid').v1;



export function md5hex(input: string|Buffer): string {
  const crypt = crypto.createHash('md5')
  return crypt.update(input).digest('hex')
}

export function v4(): string {
  return vFour()
}

export function v1(): string {
  return vOne()
}


/**
 * de construct the authorization header and check if the robot is actually who he claims to be
 * @param req
 */
export function breakAuthHeaderToUserPassword(req: any): any {

  let authHeaders: string = ''
  if (req && req.headers && (req.headers.hasOwnProperty('Authorization') || req.headers.hasOwnProperty('authorization'))) {
    try {
      authHeaders = (req.headers['authorization'] || req.headers['Authorization']).split('Basic ')[1]
    } catch (e) {
      return {}
    }

    if (!authHeaders) {
      return {}
    }
    const base64DecodedBuffer = new Buffer(authHeaders, 'base64').toString('utf8').split(':')
    const clientId = base64DecodedBuffer[0]
    const password = base64DecodedBuffer[1]
    return {clientId, password}


  } else {
    return {}
  }
}


/**
 * Returns the value that goes into 'Authorization' header
 * described as basic Express and Connect Auth (Also used in Mosca for Authentication)
 * @param {string} clientID
 * @param {string} clearTextPassword
 * @returns {string}
 */
export function bakeBasicAuthorizationHeader(clientID: string, clearTextPassword: string) : string {
  const base64encodedCredentials: string = new Buffer(`${clientID}:${clearTextPassword}`).toString('base64')
  return `Basic ${base64encodedCredentials}`
}

