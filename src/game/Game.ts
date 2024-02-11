// A class that handles all of gameplay based features.
import {SystemRunner} from "./SystemRunner.ts";
import {BattleSystem} from "./systems/BattleSystem.ts";
import {TurnBasedSystem} from './systems/TurnBasedSystem.ts';
import {Container, Point} from 'pixi.js';
import {EnemyAiSystem} from "./systems/EnemyAiSystem.ts";
import {BattleScreen} from "../screens/battle/BattleScreen.ts";

export class Game {
    /** Container to hold all game visuals. */
    public stage = new Container();
    /** Container to hold gameplay elements like bubbles. */
    public gameContainer = new Container();
    public systems: SystemRunner;
    public gameContainerPosition = new Point();
    public battleScreen = new BattleScreen();

    constructor() {
        this.stage.addChild(this.gameContainer);
        /**Initialize all game systems here think*/
        this.systems = new SystemRunner(this);
    }

    /**
     * Adds `DisplayObject`s to the game container.
     * @param displayObjects - The `DisplayObject`s to add to the game container.
     */
    public addToGame(...displayObjects: DisplayObject[]) {
        displayObjects.forEach((displayObject) => {
            this.gameContainer.addChild(displayObject);
        });
    }

    /**
     * Removes `DisplayObject`s from the game container.
     * @param displayObjects - The `DisplayObject`s to remove from the game container.
     */
    public removeFromGame(...displayObjects: DisplayObject[]) {
        displayObjects.forEach((displayObject) => {
            displayObject.removeFromParent();
        });
    }

    public init() {
        this.systems.add(BattleSystem);
        this.systems.add(TurnBasedSystem);
        this.systems.add(EnemyAiSystem);
        /**Initialize all game systems here think*/
        this.systems.init();
    }

    /** Performs initial setup for the game. */
    public async awake() {
        // Call `awake()` on the systems
        this.systems.awake();
        // Set the game container to be visible
        this.gameContainer.visible = true;
    }

    /** Starts the game logic. */
    public async start() {
        // Call `start()` on the systems.
        this.systems.start();
    }

    /** Ends the game logic. */
    public async end() {
        this.systems.end();
    }

    /**
     * Called every frame to update the game state
     * This includes updating the systems if the game is not paused or over.
     * @param delta - The time elapsed since the last update.
     */
    public update(delta: number) {
        this.systems.update(delta);
    }

    /**
     * Gets called every time the screen resizes.
     * @param w - width of the screen.
     * @param h - height of the screen.
     */
    public resize(w: number, h: number) {
        // Sets game container to the bottom of the screen,
        // since the game should be anchor there
        this.gameContainerPosition.x = w * 0.5;
        this.gameContainerPosition.y = h;

        this.gameContainer.x = this.gameContainerPosition.x;
        this.gameContainer.y = this.gameContainerPosition.y;


        // Call `resize()` on the systems
        this.systems.resize(w, h);
    }

}