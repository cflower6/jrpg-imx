import {app} from "../../main.ts";
import {Container, DisplayObject, Assets, Sprite, Rectangle, Texture, Graphics, TextStyle, Text} from 'pixi.js';
import {FancyButton} from "@pixi/ui";
import type {BattleSystem} from "../../game/systems/BattleSystem.ts";
import {AppScreen} from "../../navigation.ts";


export class BattleScreen extends Container implements AppScreen {
    public static SCREEN_ID = 'battle';
    /**Create player battle screen*/
    private readonly playerContainer: Container<DisplayObject>;
    /**Create button container*/
    private readonly buttonContainer: Container<DisplayObject>;
    /**Create enemy battle screen*/
    private readonly enemyContainer: Container<DisplayObject>;
    /**BattleSystem initialized*/
    private battleSystem!: BattleSystem;

    private startX = 16;
    private startY = 40;

    private midStartX = 478;
    private midStartY = 23;

    private revStartX = 478;
    private revStartY = 80;

    private enemyStartX = 16;
    private enemyStartY = 40;

    private midEnemyStartX = 478;
    private midEnemyStartY = 23;

    private revEnemyStartX = 478;
    private revEnemyStartY = 80;


    constructor() {
        super();
        this.playerContainer = new Container<DisplayObject>();
        this.enemyContainer = new Container<DisplayObject>();
        this.buttonContainer = new Container<DisplayObject>();
    }

    /**This is here to build the battlescreen for player vs enemy*/
    public async createBattleScreen() {
        await this._createPlayerScreen();
        await this._createPlayerButton();
        await this._createEnemyScreen();
        /**Adds the screen to the main stage*/
        this.addChild(this.playerContainer, this.buttonContainer, this.enemyContainer);
    }

    /**Helper to create Player Container*/
    private async _createPlayerScreen() {
        this.playerContainer.x = app.screen.width / 10;
        this.playerContainer.y = app.screen.height / 8;

        /**Setting the first asset to screen*/
        const texture = new Texture(await Assets.load('../src/ui_big_pieces.png'));
        texture.frame = new Rectangle(this.startX, this.startY, 31, 32);

        const sprite = new Sprite(texture);
        sprite.scale.set(5, 5);
        this.playerContainer.addChild(sprite);

        /**Setting the second asset to screen*/
        const texture1 = new Texture(await Assets.load('../src/ui_big_pieces.png'));
        this.startX += 33;
        texture1.frame = new Rectangle(this.startX, this.startY, 31, 32);

        const sprite1 = new Sprite(texture1);
        sprite1.scale.set(5, 5);
        sprite1.position.x = 148;
        this.playerContainer.addChild(sprite1);

        /**Setting the third asset to screen*/
        const texture2 = new Texture(await Assets.load('../src/ui_big_pieces.png'));
        this.startX += 33;
        texture2.frame = new Rectangle(this.startX, this.startY, 31, 32);

        const sprite2 = new Sprite(texture2);
        sprite2.scale.set(5, 5);
        sprite2.position.x = (144 * 2);
        this.playerContainer.addChild(sprite2);
        /*
        * REVERSE MENU
        */

        /**Setting the fourth asset to screen*/
        const texture3 = new Texture(await Assets.load('../src/ui_big_pieces.png'));
        texture3.frame = new Rectangle(this.revStartX, this.revStartY, 31, 32);

        const sprite3 = new Sprite(texture3);
        sprite3.scale.set(5, 5);
        sprite3.position.y = 302;

        this.playerContainer.addChild(sprite3);

        /**Setting the second asset to screen*/
        const texture4 = new Texture(await Assets.load('../src/ui_big_pieces.png'));
        this.revStartX += 33;
        texture4.frame = new Rectangle(this.revStartX, this.revStartY, 31, 32);

        const sprite4 = new Sprite(texture4);
        sprite4.scale.set(5, 5);
        sprite4.position.y = 302;
        sprite4.position.x = 152;
        this.playerContainer.addChild(sprite4);

        /**Setting the second asset to screen*/
        const texture5 = new Texture(await Assets.load('../src/ui_big_pieces.png'));
        this.revStartX += 33;
        texture5.frame = new Rectangle(this.revStartX, this.revStartY, 31, 32);

        const sprite5 = new Sprite(texture5);
        sprite5.scale.set(5, 5);
        sprite5.position.x = 288;
        sprite5.position.y = 302;
        this.playerContainer.addChild(sprite5);


        /**Setting the middle 1*/
        const texture6 = new Texture(await Assets.load('../src/ui_big_pieces.png'));
        texture6.frame = new Rectangle(this.midStartX, this.midStartY, 31, 32);

        const sprite6 = new Sprite(texture6);
        sprite6.scale.set(5, 5);

        sprite6.position.y = 148;
        this.playerContainer.addChild(sprite6);

        /**Setting the middle 2*/
        const texture7 = new Texture(await Assets.load('../src/ui_big_pieces.png'));
        this.midStartX += 33;
        texture7.frame = new Rectangle(this.midStartX, this.midStartY, 31, 32);

        const sprite7 = new Sprite(texture7);
        sprite7.scale.set(5, 5);

        sprite7.position.y = 149;
        sprite7.position.x = 150;
        this.playerContainer.addChild(sprite7);

        /**Setting the middle 3*/
        const texture8 = new Texture(await Assets.load('../src/ui_big_pieces.png'));
        this.midStartX += 33;
        texture8.frame = new Rectangle(this.midStartX, this.midStartY, 31, 32);

        const sprite8 = new Sprite(texture8);
        sprite8.scale.set(5, 5);

        sprite8.position.y = 147;
        sprite8.position.x = 288;
        this.playerContainer.addChild(sprite8);

//        const healthbarStartTexture = new Texture(await Assets.load('../src/ui_big_pieces.png'));
//        healthbarStartTexture.frame = new Rectangle(259, 40, 25, 18);
//
//        const healthbarStartSprite = new Sprite(healthbarStartTexture);
//        healthbarStartSprite.scale.set(2, 2);
//
//        healthbarStartSprite.position.set(50, 50);
//        this.playerContainer.addChild(healthbarStartSprite);
//
//        const healthbarMidTexture = new Texture(await Assets.load('../src/ui_big_pieces.png'));
//        healthbarStartTexture.frame = new Rectangle(259, 65, 25, 18);
//
//        const healthbarMidSprite = new Sprite(healthbarMidTexture);
//        healthbarStartSprite.scale.set(2, 2);
//
//        healthbarStartSprite.position.set(50, 50);
//        this.playerContainer.addChild(healthbarStartSprite);
    }

    /**Helper to create Enemy Container*/
    private async _createEnemyScreen() {
        this.enemyContainer.x = app.screen.width / 1.8;
        this.enemyContainer.y = app.screen.height / 8;
        /**Setting the first asset to screen*/
        const texture = new Texture(await Assets.load('../src/ui_big_pieces.png'));
        texture.frame = new Rectangle(this.enemyStartX, this.enemyStartY, 31, 32);

        const sprite = new Sprite(texture);
        sprite.scale.set(5, 5);
        this.enemyContainer.addChild(sprite);

        /**Setting the second asset to screen*/
        const texture1 = new Texture(await Assets.load('../src/ui_big_pieces.png'));
        this.enemyStartX += 33;
        texture1.frame = new Rectangle(this.enemyStartX, this.enemyStartY, 31, 32);

        const sprite1 = new Sprite(texture1);
        sprite1.scale.set(5, 5);
        sprite1.position.x = 148;
        this.enemyContainer.addChild(sprite1);

        /**Setting the third asset to screen*/
        const texture2 = new Texture(await Assets.load('../src/ui_big_pieces.png'));
        this.enemyStartX += 33;
        texture2.frame = new Rectangle(this.enemyStartX, this.enemyStartY, 31, 32);

        const sprite2 = new Sprite(texture2);
        sprite2.scale.set(5, 5);
        sprite2.position.x = (144 * 2);
        this.enemyContainer.addChild(sprite2);
        /*
        * REVERSE MENU
        */

        /**Setting the fourth asset to screen*/
        const texture3 = new Texture(await Assets.load('../src/ui_big_pieces.png'));
        texture3.frame = new Rectangle(this.revEnemyStartX, this.revEnemyStartY, 31, 32);

        const sprite3 = new Sprite(texture3);
        sprite3.scale.set(5, 5);
        sprite3.position.y = 302;

        this.enemyContainer.addChild(sprite3);

        /**Setting the second asset to screen*/
        const texture4 = new Texture(await Assets.load('../src/ui_big_pieces.png'));
        this.revEnemyStartX += 33;
        texture4.frame = new Rectangle(this.revEnemyStartX, this.revEnemyStartY, 31, 32);

        const sprite4 = new Sprite(texture4);
        sprite4.scale.set(5, 5);
        sprite4.position.y = 302;
        sprite4.position.x = 152;
        this.enemyContainer.addChild(sprite4);

        /**Setting the second asset to screen*/
        const texture5 = new Texture(await Assets.load('../src/ui_big_pieces.png'));
        this.revEnemyStartX += 33;
        texture5.frame = new Rectangle(this.revEnemyStartX, this.revEnemyStartY, 31, 32);

        const sprite5 = new Sprite(texture5);
        sprite5.scale.set(5, 5);
        sprite5.position.x = 288;
        sprite5.position.y = 302;
        this.enemyContainer.addChild(sprite5);


        /**Setting the middle 1*/
        const texture6 = new Texture(await Assets.load('../src/ui_big_pieces.png'));
        texture6.frame = new Rectangle(this.midEnemyStartX, this.midEnemyStartY, 31, 32);

        const sprite6 = new Sprite(texture6);
        sprite6.scale.set(5, 5);
        sprite6.position.y = 146;
        this.enemyContainer.addChild(sprite6);

        /**Setting the middle 2*/
        const texture7 = new Texture(await Assets.load('../src/ui_big_pieces.png'));
        this.midEnemyStartX += 33;
        texture7.frame = new Rectangle(this.midEnemyStartX, this.midEnemyStartY, 31, 32);

        const sprite7 = new Sprite(texture7);
        sprite7.scale.set(5, 5);
        sprite7.position.y = 149;
        sprite7.position.x = 150;
        this.enemyContainer.addChild(sprite7);

        /**Setting the middle 3*/
        const texture8 = new Texture(await Assets.load('../src/ui_big_pieces.png'));
        this.midEnemyStartX += 33;
        texture8.frame = new Rectangle(this.midEnemyStartX, this.midEnemyStartY, 31, 32);

        const sprite8 = new Sprite(texture8);
        sprite8.scale.set(5, 5);

        sprite8.position.y = 147;
        sprite8.position.x = 288;
        this.enemyContainer.addChild(sprite8);

        const graphics = new Graphics();
        graphics.beginFill(0xDE3249, 1);
        graphics.drawCircle(100, 100, 50);
        graphics.endFill();
        this.enemyContainer.addChild(graphics);
        const style = new TextStyle({
            fontFamily: 'Arial',
            fontSize: 36,
            fontStyle: 'italic',
            fontWeight: 'bold',
            fill: ['#ffffff', '#00ff99'], // gradient
            stroke: '#4a1850',
            strokeThickness: 5,
            dropShadow: true,
            dropShadowColor: '#000000',
            dropShadowBlur: 4,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 6,
            wordWrap: true,
            wordWrapWidth: 440,
            lineJoin: 'round',
        });

        const richText = new Text('Enemy HP: ' + this.battleSystem?.enemy?.hp, style);

        richText.x = 0;
        richText.y = 0;

        this.enemyContainer.addChild(richText);

    }


    /**Helper to create Player Button Container*/
    private async _createPlayerButton() {
        this.buttonContainer.x = this.playerContainer.x + 50;
        this.buttonContainer.y = this.playerContainer.height + 110;
        /**Attack button*/
        const texture9 = new Texture(await Assets.load('../src/ui_big_pieces.png'));
        texture9.frame = new Rectangle(634, 24, 39, 24);

        const sprite9 = new Sprite(texture9);
        sprite9.scale.set(3, 3);

        this.buttonContainer.addChild(sprite9);

        /**Attack button*/
        const texture10 = new Texture(await Assets.load('../src/ui_big_pieces.png'));
        texture10.frame = new Rectangle(634, 84, 39, 24);

        const sprite10 = new Sprite(texture10);
        sprite10.scale.set(3, 3);
        this.buttonContainer.addChild(sprite10);

        const button = new FancyButton({
            defaultView: sprite9,
            pressedView: sprite10,
            text: "Attack",
            textOffset: {
                x: 19,
                y: 0.9
            },
            animations: {
                pressed: {
                    props: {
                        scale: {
                            x: 1,
                            y: 1,
                        }
                    },
                    duration: 100,
                }
            },
        });
        button.onPress.connect(() => console.log('onPress'));
        this.buttonContainer.addChild(button);
    }
}