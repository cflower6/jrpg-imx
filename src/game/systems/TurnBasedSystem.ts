/**Create the turn based System*/

/*
* This will keep track of the turns
* it will check the state of the player and enemy after each action/turn
* at somepoint it will check who goes first based on speed
*/
import {System} from "../SystemRunner.ts";
import type {Game} from '../Game.ts';

export class TurnBasedSystem implements System {
    public static SYSTEM_ID = 'turnbased';
    public turn: number;
    public game!: Game;

    constructor() {
        this.turn = 1;
    }

    public init() {
    }
}