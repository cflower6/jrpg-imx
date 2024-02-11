/**Create the turn based System*/

/*
* This will keep track of the turns
* it will check the state of the player and enemy after each action/turn
* at somepoint it will check who goes first based on speed
*/
import {System} from "../SystemRunner.ts";
import type {Game} from '../Game.ts';
import {EnemyAiSystem} from "./EnemyAiSystem.ts";
import {Player} from "../entities/player/Player.ts";
import {Enemy} from "../entities/enemies/Enemy.ts";

export class TurnBasedSystem implements System {
    /**
     * The instance of the game the system is attached to.
     * This is automatically set by the system runner when the system is added to the game.
     */
    public game!: Game;
    public static SYSTEM_ID = 'turnbased';
    public turn = 0;

    constructor() {
    }

    public init() {
        console.log('Turnbased starting up');
    }

    public start() {
    }

//    public onTurnComplete(player: Player, enemy: Enemy) {
//        this.turn += 1;
//        this.enemyTurn = !this.enemyTurn;
//        this.playerTurn = !this.playerTurn;
//        const actionChosen = this.game.systems.get(EnemyAiSystem).actionChoosen(player, enemy);
//
//        if (actionChosen == 'regular attack') return 'attack';
//    }
//
//    public waitForTurn() {
//        // on wait for turn disable actions for player
//
//    }

//    private isEnemyTurn() {
//       return this.enemyTurn;
//    }
//
//    private isPlayerTurn() {
//        return this.playerTurn;
//    }
}