'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.generalPrefixes = [
    'I looked it up. It\'s ',
    'The answer is ',
    'All right, it\'s ',
    'Well, it\'s ',
    'That\'s easy, it\'s ',
    'I know that, it\'s ',
    'Here\'s some information: ',
    'Got it, it\'s ',
    'Here you go: ',
];
exports.simplePrefixes = [
    'Here\'s what I found: ',
    'Here you go: ',
    'Got it: ',
    'Okay, it\'s ',
    'Here: ',
    'The answer is ',
    'Easy, check it out: ',
    'Here\'s some info for you: ',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
];
exports.defaultFallbackResponses = [
    'I can\'t seem to find the answer to that.',
    'Sorry, I couldn\'t look that up for you.',
    'I couldn\'t find anything to show you about that.',
    'Sorry, I couldn\'t find anything for that.',
    'Hmm, I\'m not sure how to help with that.',
];
exports.chooseRandomResponseSegment = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};
