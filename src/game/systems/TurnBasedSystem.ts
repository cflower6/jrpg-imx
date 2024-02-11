/**Create the turn based System*/

/*
* This will keep track of the turns
* it will check the state of the player and enemy after each action/turn
* at somepoint it will check who goes first based on speed
*/
import {System} from "../SystemRunner.ts";
import type {Game} from '../Game.ts';

export class TurnBasedSystem implements System {
    /**
     * The instance of the game the system is attached to.
     * This is automatically set by the system runner when the system is added to the game.
     */
    public game!: Game;
    public static SYSTEM_ID = 'turnbased';
    public turn = 1;

    constructor() {
    }

    public init() {
        console.log('Turnbased starting up');
    }

    public start() {
        this.turn = 1;
    }

    public waitForTurn() {
        // on wait for turn disable actions for player
        //
    }

    private isEnemyTurn() {

    }
}