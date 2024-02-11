import {Application} from "pixi.js";
import {ImtblCrypto} from "./crypto/ImtblCrypto.ts";
import {designConfig} from "./game/DesignConfig.ts";
import {navigation} from "./navigation.ts";
import {GameScreen} from "./screens/GameScreen.ts";


/** The PixiJS app Application instance, shared across the project */
export const app = new Application<HTMLCanvasElement>({
    resolution: Math.max(window.devicePixelRatio, 2),
    backgroundColor: 0x444444,
});

/** Singleton for Immutable x client creation */
const client = ImtblCrypto.createClient();

/** Set up a resize function for the app */
function resize() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const minWidth = designConfig.content.width;
    const minHeight = designConfig.content.height;

    // Calculate renderer and canvas sizes based on current dimensions
    const scaleX = windowWidth < minWidth ? minWidth / windowWidth : 1;
    const scaleY = windowHeight < minHeight ? minHeight / windowHeight : 1;
    const scale = scaleX > scaleY ? scaleX : scaleY;
    const width = windowWidth * scale;
    const height = windowHeight * scale;

    // Update canvas style dimensions and scroll window up to avoid issues on mobile resize
    app.renderer.view.style.width = `${windowWidth}px`;
    app.renderer.view.style.height = `${windowHeight}px`;
    window.scrollTo(0, 0);

    // Update renderer  and navigation screens dimensions
    app.renderer.resize(width, height);
    navigation.init();
    navigation.resize(width, height);
}

async function init() {


    // Add pixi canvas element (app.view) to the document's body
    document.body.appendChild(app.view);

    // Whenever the window resizes, call the 'resize' function
    window.addEventListener('resize', resize);

    // Trigger the first resize
    resize();

    await navigation.goToScreen(GameScreen);
    await _cryptoStuff();
}

async function _cryptoStuff() {
    const chainName = 'imtbl-zkevm-testnet';
    const contractAddress = '0xd37c51056bac070f330c69262ab96d2ade673a67';
    console.log(await client.getNFT({chainName: chainName, contractAddress: contractAddress, tokenId: '1'}));
}

init();