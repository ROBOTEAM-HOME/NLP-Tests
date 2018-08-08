Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logger_1 = require("../utils/logger");
const https = require("https");
// tslint:disable-next-line
const logger = logger_1.createLogger('cloud-ks-https-server');
const startUsage = process.cpuUsage();
/* tslint:disable: no-require-imports no-var-requires */
const version = require('../../../package.json').version;
function formatTime(seconds) {
    const response = [];
    const weeks = Math.floor(seconds / (3600 * 24 * 7));
    seconds -= weeks * (3600 * 24 * 7);
    if (weeks) {
        response.push(weeks + ' week' + (weeks !== 1 ? 's' : ''));
    }
    const days = Math.floor(seconds / (3600 * 24));
    seconds -= days * (3600 * 24);
    if (days) {
        response.push(days + ' day' + (days !== 1 ? 's' : ''));
    }
    const hours = Math.floor(seconds / (3600));
    seconds -= hours * (3600);
    if (hours) {
        response.push(hours + ' hour' + (hours !== 1 ? 's' : ''));
    }
    const minutes = Math.floor(seconds / (60));
    seconds -= minutes * (60);
    if (minutes) {
        response.push(minutes + ' minute' + (minutes !== 1 ? 's' : ''));
    }
    response.push(seconds + ' second' + (seconds !== 1 ? 's' : ''));
    return response.join(', ');
}
class HttpsServer {
    constructor(settings) {
        //this.settings = settings
        this.app = express();
        this.app.get('/', (req, res) => {
            logger.info(`Server OK (${version})`);
            res.end(`Server OK (${version})`);
        });
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
                };
            },
        }));
        this.app.use((err, req, res, next) => {
            logger.error(err);
            res.sendStatus(500);
        });
    }
    set instance(inst) {
        this.httpsServer = inst;
    }
    get instance() {
        return this.httpsServer;
    }
}
exports.HttpsServer = HttpsServer;
exports.createHttpsServer = (settings) => {
    return new Promise((resolve, reject) => {
        //logger.info('start server. port (%s)', settings.port)
        const httpsServer = new HttpsServer(settings);
        //https.createServer(settings.serverOptions, httpsServer.app).listen(settings.port);
        //httpsServer.instance = httpsServer.app.listen(settings.port, (error: Error) => {
        httpsServer.instance = https.createServer(settings.serverOptions || {}, httpsServer.app).listen(settings.port, (error) => {
            if (error) {
                logger.error('HTTPS start server failed', error);
                reject(error);
            }
            else {
                //logger.info('HTTPS server started on port:'+settings.port)
                resolve(httpsServer);
            }
        });
    });
};
//# sourceMappingURL=HttpsServer.js.map