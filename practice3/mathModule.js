// math operations module

import MY_PI, { E, GOLDEN_RATIO } from './constModule.js';

function add (a = MY_PI, b = E) {
    return parseFloat(a) + parseFloat(b);
}

function sub (a = MY_PI, b = E) {
    return parseFloat(a) - parseFloat(b);
}

function mult (a = MY_PI, b = E) {
    return parseFloat(a) * parseFloat(b);
}

function div (a = MY_PI, b = E) {
    return parseFloat(a) / parseFloat(b);
}

function mod (a = MY_PI, b = E) {
    return parseFloat(a) % parseFloat(b);
}

function pow (a = MY_PI, b = E) {
    return parseFloat(a) ** parseFloat(b);
}

export { 
    add as addConsts, sub as subConsts, mult as multConsts,
    div as divConsts, mod as modConsts, pow as powConsts
 }