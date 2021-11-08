import { questionTypes } from './questions';
import { gameTypes } from './games';
import { remTypes } from './reminisces';
import { laughTypes } from './laughs';

export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function getRandomQType() {
    return questionTypes[getRandomInt(questionTypes.length)];
}

export function getRandomGameType() {
    return gameTypes[getRandomInt(gameTypes.length)];
}

export function getRandomRemType() {
    return remTypes[getRandomInt(remTypes.length)];
}

export function getRandomLaughType() {
    return laughTypes[getRandomInt(laughTypes.length)];
}