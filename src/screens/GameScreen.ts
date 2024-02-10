import {Container} from "pixi.js";
import {Game} from "../game/Game.ts";

/**Screen contains the game play*/
export class GameScreen extends Container {
    public static SCREEN_ID = 'game';
    private readonly _game: Game;

    constructor() {
        super();
        this._game = new Game();
        this._game.init();
        this.addChild(this._game.stage);
    }
}