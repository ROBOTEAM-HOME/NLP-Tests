Object.defineProperty(exports, "__esModule", { value: true });
const pino = require("pino");
const config_1 = require("../../test/config");
//const getNames = (list: string) => (list || '').split(';').map((name: string) => name.trim().toLowerCase())
// tslint:disable-next-line
const version = require('../../../package.json').version;
exports.createLogger = (name) => {
    return pino({ name }).child({ 'env': config_1.default.ENV, 'version': version });
};
//# sourceMappingURL=logger.js.map