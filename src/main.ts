import {Application, BaseTexture, Spritesheet} from "pixi.js";
import {ImtblCrypto} from "./crypto/ImtblCrypto.ts";
import {BattleScreen} from "./screens/battle/BattleScreen.ts";


/** The PixiJS app Application instance, shared across the project */
export const app = new Application<HTMLCanvasElement>({
    resizeTo: window
});

/** Singleton for Immutable x client creation */
const client = ImtblCrypto.createClient();
const battleScreen = new BattleScreen();
const atlasData = {
    frames: {},
    meta: {
        image: '../src/ui_big_pieces.png',
        size: {w: 128, h: 32},
        scale: 1
    }
}
const spritesheet = new Spritesheet(
    BaseTexture.from(atlasData.meta.image),
    atlasData
)


async function init() {
    const chainName = 'imtbl-zkevm-testnet';
    const contractAddress = '0xd37c51056bac070f330c69262ab96d2ade673a67';
    console.log(await client.getNFT({chainName: chainName, contractAddress: contractAddress, tokenId: '1'}));
    // append app to our body
    document.body.appendChild(app.view);
    await spritesheet.parse();
    await battleScreen.createBattleScreen();
    console.log(spritesheet);

}

init();