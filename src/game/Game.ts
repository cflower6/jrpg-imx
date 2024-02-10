// A class that handles all of gameplay based features.
import {Container, SystemManager} from "pixi.js";
import {SystemRunner} from "./SystemRunner.ts";
import {Player} from "./entities/player/Player.ts";
import {Enemy} from "./entities/enemies/Enemy.ts";
import {BattleSystem} from "./systems/BattleSystem.ts";
import {TurnBasedSystem} from "./systems/TurnBasedSystem.ts";

export class Game {
    /*
    Systems I need?
    Battle System
        -> Skill System
    EnemyAiSystem
        -> Skill System
    Level up System
    
    */
    public stage = new Container();
    public gameContainer = new Container();
    public systems: SystemRunner;
    public player: Player
    public enemy: Enemy;

    constructor() {
        /**Initialize all game systems here think*/
        this.systems = new SystemRunner(this);
        this.player = new Player(10, 3);
        this.enemy = new Enemy(10, 2);
    }

    /*
    Game lifecycles
    Start game
    pause game
    end game
    clean up resources
    */
    public init() {
        this.systems.add(BattleSystem);
        this.systems.add(TurnBasedSystem);
        this.systems.init();
    }
}