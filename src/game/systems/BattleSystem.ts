import {Player} from "../entities/player/Player.ts";
import {Enemy} from "../entities/enemies/Enemy.ts";
import {TurnBasedSystem} from "./TurnBasedSystem.ts";
import {System} from "../SystemRunner.ts";
import {Game} from "../Game.ts";

export class BattleSystem implements System {

    public static SYSTEM_ID = 'battle';

    private readonly _player: Player;
    private readonly _enemy: Enemy;
    public startTurnSystem: TurnBasedSystem;
    public game!: Game;
    public signals = {
        onTurnTaken: new Signal<(isComplete: boolen) => void>(),
    };

    constructor(playerState: Player, enemyState: Enemy) {
        this._player = playerState
        this._enemy = enemyState;
        this.startTurnSystem = new TurnBasedSystem();
    }

    battleState() {
        do {
            this.startTurnSystem.init(this._player, this._enemy);
        } while (this._enemy.isDead || this._player)
        {
            // start loop
            this.signals.onTurnTaken
            this.startTurnSystem.init(this._player, this._enemy);
            this.startTurnSystem.turn += 1;
        }
    }

    attack() {
        this._enemy.hp -= this._player.atk;
    }
}