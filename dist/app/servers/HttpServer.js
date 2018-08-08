Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logger_1 = require("../utils/logger");
// tslint:disable-next-line
const logger = logger_1.createLogger('cloud-ks-http-server');
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
class HttpServer {
    constructor(settings) {
        //this.settings = settings
        //this.kardia = Kardia.start({ name: 'HttpServer', host: '0.0.0.0', port: this.settings.healthcheck_port});
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
            res.sendStatus(400);
        });
    }
    set instance(inst) {
        this.httpServer = inst;
    }
    get instance() {
        return this.httpServer;
    }
}
exports.HttpServer = HttpServer;
exports.createHttpServer = (settings) => {
    return new Promise((resolve, reject) => {
        //logger.info('start server. port (%s)', settings.port)
        const httpServer = new HttpServer(settings);
        httpServer.instance = httpServer.app.listen(settings.port, (error) => {
            if (error) {
                logger.error('start server failed', error);
                reject(error);
                return;
            }
            logger.info('HTTP server started on port:' + settings.port);
            resolve(httpServer);
        });
    });
};
//# sourceMappingURL=HttpServer.js.map