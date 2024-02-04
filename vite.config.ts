import {defineConfig} from 'vite'
import {nodePolyfills} from 'vite-plugin-node-polyfills'

export default defineConfig({
    plugins: [
        nodePolyfills({
            include: ['path', 'stream', 'util'],
            exclude: ['http'],
            globals: {
                Buffer: true,
                global: true,
                process: true,
            },
            overrides: {
                fs: 'memfs',
            },
            protocolImports: true,
        })
    ],
})