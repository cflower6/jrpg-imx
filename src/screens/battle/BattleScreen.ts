import {app} from "../../main.ts";
import {Container, Sprite, DisplayObject, Texture} from 'pixi.js';


export class BattleScreen {
    /**Create player battle screen*/
    private playerContainer: Container<DisplayObject>;

    /**Create enemy battle screen*/
    private enemyContainer: Container<DisplayObject>;

    constructor() {
        this.playerContainer = new Container<DisplayObject>();
        this.enemyContainer = new Container<DisplayObject>();
    }

    async createBattleScreen() {
        const resolvedTexture = Texture.from('/Users/chrisflowers/fleet/jrpg-imx/src/ui/BlankPanel-3.png');
        const playerScreen = Sprite.from(resolvedTexture);

        playerScreen.anchor.set(0.5);

        playerScreen.x = playerScreen.width / 2;
        playerScreen.y = playerScreen.height / 2;

        this.playerContainer.addChild(playerScreen);
        this.enemyContainer.addChild(playerScreen);
        app.stage.addChild(this.playerContainer);
    }
}