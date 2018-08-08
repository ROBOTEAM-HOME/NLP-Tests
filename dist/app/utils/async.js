Object.defineProperty(exports, "__esModule", { value: true });
function promisifyNode(fn, that) {
    return (...rest) => {
        return new Promise((resolve, reject) => {
            const callback = (err, result) => {
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
exports.dePromisifyNode = (fn, that) => {
    return (...rest) => {
        const callback = rest.pop();
        fn.apply(that, rest).then((data) => callback(null, data), (err) => callback(err));
    };
};
function delay(ms) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms);
    });
}
exports.delay = delay;
function interval(ms) {
    return new Promise(resolve => {
        setInterval(() => resolve(), ms);
    });
}
exports.interval = interval;
function to(promise) {
    return promise.then((data) => {
        return [null, data];
    })
        .catch((err) => [err]);
}
exports.to = to;
//# sourceMappingURL=async.js.map