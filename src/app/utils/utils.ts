export function removeSubstringInParentheses(str: string) {
    return str.replace(/ *\([^)]*\) */g, ' ')
}

export function getCurrentUnixTime() {
    return parseInt(Date.now().toString().substring(0, 10), 10)
}
