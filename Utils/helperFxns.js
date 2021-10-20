import { questionTypes } from './questions';

export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function getRandomQType() {
    return questionTypes[getRandomInt(questionTypes.length)];
}