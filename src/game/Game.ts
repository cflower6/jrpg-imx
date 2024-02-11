// A class that handles all of gameplay based features.
import {SystemRunner} from "./SystemRunner.ts";
import {BattleSystem} from "./systems/BattleSystem.ts";
import {TurnBasedSystem} from './systems/TurnBasedSystem.ts';
import {Container, Point} from 'pixi.js';
import {EnemyAiSystem} from "./systems/EnemyAiSystem.ts";

export class Game {
    /** Container to hold all game visuals. */
    public stage = new Container();
    /** Container to hold gameplay elements like bubbles. */
    public gameContainer = new Container();
    public systems: SystemRunner;
    public gameContainerPosition = new Point();

    constructor() {
        this.stage.addChild(this.gameContainer);
        /**Initialize all game systems here think*/
        this.systems = new SystemRunner(this);
    }

    public init() {
        this.systems.add(BattleSystem);
        this.systems.add(TurnBasedSystem);
        this.systems.add(EnemyAiSystem);
        /**Initialize all game systems here think*/
        this.systems.init();
    }

    /**
     * Called every frame to update the game state
     * This includes updating the systems if the game is not paused or over.
     * @param delta - The time elapsed since the last update.
     */
    public update(delta: number) {
        this.systems.update(delta);
    }

}