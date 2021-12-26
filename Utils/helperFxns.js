// Helper functions to get randomized items

import { questionTypes } from './questions';
import { gameTypes } from './games';
import { remTypes } from './reminisces';
import { laughTypes } from './laughs';

// Returns random integer given max integer
export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Returns a random question (to be asked to senior)
export function getRandomQType() {
    return questionTypes[getRandomInt(questionTypes.length)];
}

// Returns random game to play with senior
export function getRandomGameType() {
    return gameTypes[getRandomInt(gameTypes.length)];
}

// Returns random reminiscing topic for senior
export function getRandomRemType() {
    return remTypes[getRandomInt(remTypes.length)];
}

// Returns random feel-good action to do with senior
export function getRandomLaughType() {
    return laughTypes[getRandomInt(laughTypes.length)];
}