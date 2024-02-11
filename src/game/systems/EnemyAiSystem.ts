import {System} from "../SystemRunner.ts";
import {Game} from "../Game.ts";

//based off of all enemy actions on the turn make a system that will pick the best action
export class EnemyAiSystem implements System {
    public static SYSTEM_ID = 'EnemyAi';
    /**
     * The instance of the game the system is attached to.
     * This is automatically set by the system runner when the system is added to the game.
     */
    public game!: Game;

    constructor() {
    }

    public init() {
        console.log('EnemyAi starting up');
    }

    start() {
    }

    public actionChoosen() {
        return 'test';
    }

    private _checkSituation() {
        // Check player
        // Check self
        // if player has higher hp and atk defend or attack for now
        // if player is close to death allOutAttack
        // if enemy is close to death randomly choose (Dying attack (this is a small chance), attack, try and run)
    }

    // based off

}