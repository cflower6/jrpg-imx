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

    public update(delta: number) {
        this._game.update(delta);
    }

    /** Called when the screen is being shown. */
    public async show() {
        // Reset screen data
        this.alpha = 0;

        // Wake up the game
        await this._game.awake();
        // Start the game
        await this._game.start();
    }

    /** Called when the screen is being hidden. */
    public async hide() {
        // End the game
        await this._game.end();
    }


    /**
     * Gets called every time the screen resizes.
     * @param w - width of the screen.
     * @param h - height of the screen.
     */
    public resize(w: number, h: number) {
        // Fit background to screen
        this.width = w;
        this.height = h;

        // Forward screen dimensions to the game
        this._game.resize(w, h);
    }
}