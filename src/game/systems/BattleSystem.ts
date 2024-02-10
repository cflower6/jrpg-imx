import {Player} from "../entities/player/Player.ts";
import {Enemy} from "../entities/enemies/Enemy.ts";
import {System} from "../SystemRunner.ts";
import type {Game} from '../Game.ts';

export class BattleSystem implements System {

    public static SYSTEM_ID = 'battle';

    private readonly _player: Player;
    private readonly _enemy: Enemy;
    public game!: Game;
//    public signals = {
//        onTurnTaken: new Signal<(isComplete: boolean) => void>(),
//    };

    constructor(player: Player, enemy: Enemy) {
        this._enemy = enemy;
        this._player = player;
    }

    init() {
    }

    battleState() {
    }

    attack() {
        this._enemy.hp -= this._player.atk;
    }
}