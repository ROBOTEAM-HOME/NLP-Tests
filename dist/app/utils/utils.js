Object.defineProperty(exports, "__esModule", { value: true });
function removeSubstringInParentheses(str) {
    return str.replace(/ *\([^)]*\) */g, ' ');
}
exports.removeSubstringInParentheses = removeSubstringInParentheses;
function getCurrentUnixTime() {
    return parseInt(Date.now().toString().substring(0, 10), 10);
}
exports.getCurrentUnixTime = getCurrentUnixTime;
//# sourceMappingURL=utils.js.map