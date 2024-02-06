import {Application, Texture, Sprite, Container} from "pixi.js";
import {ImtblCrypto} from "./crypto/ImtblCrypto.ts";


/** The PixiJS app Application instance, shared across the project */
export const app = new Application<HTMLCanvasElement>({
    resizeTo: window
});
const playerContainer = new Container();
/** Singleton for Immutable x client creation */
const client = ImtblCrypto.createClient();

//const battleScreen = new BattleScreen();


async function init() {
    const chainName = 'imtbl-zkevm-testnet';
    const contractAddress = '0xd37c51056bac070f330c69262ab96d2ade673a67';
    console.log(await client.getNFT({chainName: chainName, contractAddress: contractAddress, tokenId: '1'}));
    // append app to our body
    document.body.appendChild(app.view);
    //await battleScreen.createBattleScreen();
    app.stage.addChild(playerContainer);

    const resolvedTexture = Texture.from('./src/ui/assets/BlankPanel-3.png');
    const playerScreen = Sprite.from(resolvedTexture);

    playerScreen.anchor.set(0.5);

    playerScreen.x = playerScreen.width / 2;
    playerScreen.y = playerScreen.height / 2;

    playerContainer.addChild(playerScreen);

}

init();