"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function promisifyNode(fn, that) {
    return function () {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        return new Promise(function (resolve, reject) {
            var callback = function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            };
            rest.push(callback);
            fn.apply(that || fn, rest);
        });
    };
}
exports.promisifyNode = promisifyNode;
exports.dePromisifyNode = function (fn, that) {
    return function () {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        var callback = rest.pop();
        fn.apply(that, rest).then(function (data) { return callback(null, data); }, function (err) { return callback(err); });
    };
};
function delay(ms) {
    return new Promise(function (resolve) {
        setTimeout(function () { return resolve(); }, ms);
    });
}
exports.delay = delay;
function interval(ms) {
    return new Promise(function (resolve) {
        setInterval(function () { return resolve(); }, ms);
    });
}
exports.interval = interval;
function to(promise) {
    return promise.then(function (data) {
        return [null, data];
    })
        .catch(function (err) { return [err]; });
}
exports.to = to;
