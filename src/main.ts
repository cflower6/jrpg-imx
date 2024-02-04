import {Application, Sprite} from "pixi.js";
import {config, blockchainData} from "@imtbl/sdk";
// Secret API key sk_imapik-test-rt2wI1RUE6jBttsn6pRA_e56336

import {config, blockchainData} from '@imtbl/sdk';

export const client = new blockchainData.BlockchainData({
    baseConfig: {
        environment: config.Environment.SANDBOX,
        apiKey: 'sk_imapik-test-rt2wI1RUE6jBttsn6pRA_e56336',
    },
});

/** The PixiJS app Application instance, shared across the project */
export const app = new Application<HTMLCanvasElement>({
    width: 640,
    height: 360
});


async function init() {
    const chainName = 'imtbl-zkevm-testnet';
    const contractAddress = '0xd37c51056bac070f330c69262ab96d2ade673a67';
    const response = await client.getNFT({chainName: chainName, contractAddress: contractAddress, tokenId: '1'});
    console.debug(response);

    // append app to our body
    document.body.appendChild(app.view);

    let sprite = Sprite.from('src/sample.png');
    // add it to stage
    app.stage.addChild(sprite);

    let elapsed = 0.0;

    app.ticker.add((delta) => {
        elapsed += delta;
        sprite.x = 100.0 + Math.cos(elapsed / 50.0) * 100.0;
    });
}

init();