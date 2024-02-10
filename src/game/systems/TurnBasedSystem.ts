/**Create the turn based System*/

/*
* This will keep track of the turns
* it will check the state of the player and enemy after each action/turn
* at somepoint it will check who goes first based on speed
*/
import {Player} from "../entities/player/Player.ts";
import {Enemy} from "../entities/enemies/Enemy.ts";
import {System} from "../SystemRunner.ts";
import {Game} from "../Game.ts";

export class TurnBasedSystem implements System {
    public static SYSTEM_ID = 'turnbased';
    public turn: number;
    public game!: Game;

    constructor() {
        this.turn = 1;
    }

    public init(playerState: Player, enemyState: Enemy) {
        this._checkState(playerState, enemyState);
    }

    private _checkState(playerState: Player, enemyState: Enemy) {
        this._isDead(playerState, enemyState);
    }

    private _isDead(playerState: Player, enemyState: Enemy) {
        if (playerState.hp <= 0) playerState.isDead = true;
        if (enemyState.hp <= 0) enemyState.isDead = true;
    }
}