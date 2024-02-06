import {config, blockchainData} from "@imtbl/sdk";

export namespace ImtblCrypto {
    export function createClient(): blockchainData.BlockchainData {
        return new blockchainData.BlockchainData({
            baseConfig: {
                environment: config.Environment.SANDBOX,
                apiKey: 'sk_imapik-test-rt2wI1RUE6jBttsn6pRA_e56336',
            },
        });
    }
}