import {Stats} from '../Stats.ts';

/** Enum to represent the state of an Player */
export enum PlayerState {
    /** Initial state of the player. */
    STATIC,
    /** Attack state of the player. */
    ATTACK,
    /** Player is attacked state. */
    HIT,
    /** Player died or is dying state. */
    DEAD
}

export class Player extends Stats {

    constructor(hp: number, atk: number) {
        super(hp, atk);
    }
}