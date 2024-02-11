import {Container} from "pixi.js";
import {Game} from "../game/Game.ts";
import {AppScreen} from "../navigation.ts";

/**Screen contains the game play*/
export class GameScreen extends Container implements AppScreen {
    public static SCREEN_ID = 'game';
    private readonly _game: Game;

    constructor() {
        super();
        this._game = new Game();
        this._game.init();
        this.addChild(this._game.stage);
    }

    /**
     * Called every frame.
     * @param delta - The time elapsed since the last update.
     */
    public update(delta: number) {
        this._game.update(delta);
    }
}