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

    /**This is here to build the battlescreen for player vs enemy*/
    async createBattleScreen() {
        /**Loads the png as a texture resource to be used later*/
        const resolvedTexture = Texture.from('../src/ui/assets/BlankPanel-3.png');
        /** We make the texture a sprite*/
        const playerScreen = Sprite.from(resolvedTexture);
        /** Anchor the player screen in the middle*/
        playerScreen.anchor.set(0.5);
        /** set's the screen in the middle of hte player container.*/
        playerScreen.x = this.playerContainer.width / 2;
        playerScreen.y = this.playerContainer.height / 2;
        /**Adds the playerScreen to the player and enemy Container*/
        /** Will pull this into two methods create playerscreen and enemyScreen*/
        this.playerContainer.addChild(playerScreen);
        this.enemyContainer.addChild(playerScreen);
        /**Adds the screen to the main stage*/
        app.stage.addChild(this.playerContainer);
    }
}