import {config as cfg, DotenvOptions} from 'dotenv'
import * as fs from 'fs'

const localEnv: string = __dirname + '/../.env'
const dockerEnv: string = __dirname + '/../.env.Docker.template'
let envFileToUse: string = ''

if (fs.existsSync(localEnv)) {
    envFileToUse =  localEnv
} else if (fs.existsSync(dockerEnv)) {
    envFileToUse = dockerEnv
}

const opts: DotenvOptions = {
    path: envFileToUse,
}


const config = cfg(opts)

//const debug = console.log

function parseEnv(env: any): any {
    Object.keys(env).forEach(key => {

        //debug(`key "${key}" before type was ${typeof env[key]}`);
        if (!process.env[key]) {
            process.env[key] = env[key] = parseKey(env[key], key)
        } else {
            //env[key] = process.env[key]
            env[key] = parseKey(process.env[key], key)
        }

        //debug(`key "${key}" after type was ${typeof env[key]}`);
    })

    return env
}


export default parseEnv(config.parsed)


function parseKey(value: any, key: string) {

    //debug(`parsing key ${key} with value ${value}`)

    // if the value ends in an asterisk then just return its value
    if (value.toString().lastIndexOf('*') === value.toString().length - 1
        && value.toString().indexOf(',') === -1) {
        //debug(`key ${key} ended in * and will be ignored from parsing`)
        return value.toString().substring(0, value.toString().length - 1)
    }

    // Boolean
    if (value.toLowerCase() === 'true' || value.toLowerCase() === 'false') {
        //debug(`key ${key} parsed as a Boolean`)
        return value === 'true'
    }

    // Number
    if (!isNaN(value)) {
        //debug(`key ${key} parsed as a Number`)
        return Number(value)
    }

    /*
      // Array
      if (value.indexOf(',') !== -1) {
        //debug(`key ${key} parsed as an Array`)
        return value.split(',').map(parseKey)
      }
    */

    return value

}