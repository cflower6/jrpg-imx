import {Stats} from '../Stats.ts';

/** Enum to represent the state of an Enemy */
export enum EnemyState {
    /** Initial state of the enemy. */
    STATIC,
    /** Attack state of the enemy. */
    ATTACK,
    /** Enemy is attacked state. */
    HIT,
    /** Enemy died or is dying state */
    DEAD
}

/**
 * Class to represent an Enemy object.
 * Enemy is used to determine the action and state of an enemy based on battle factors.
 */
export class Enemy extends Stats {
    constructor(hp: number, atk: number) {
        super(hp, atk);
    }
}