import {VitePWA} from 'vite-plugin-pwa';
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), VitePWA({
        registerType: 'autoUpdate',
        injectRegister: false,

        pwaAssets: {
            disabled: false,
            config: true,
        },

        manifest: {
            name: 'univ-on',
            short_name: 'univ-on',
            description: 'university notification service',
            theme_color: '#FAFAFA',
            background_color: '#ffffff',
            display: 'standalone',
            start_url: '/',
            icons: [
                {
                    "src": "./icons/android-icon-36x36.png",
                    "sizes": "36x36",
                    "type": "image/png"
                },
                {
                    "src": "./icons/android-icon-48x48.png",
                    "sizes": "48x48",
                    "type": "image/png"
                },
                {
                    "src": "./icons/android-icon-72x72.png",
                    "sizes": "72x72",
                    "type": "image/png"
                },
                {
                    "src": "./icons/android-icon-96x96.png",
                    "sizes": "96x96",
                    "type": "image/png"
                },
                {
                    "src": "./icons/android-icon-128x128.png",
                    "sizes": "128x128",
                    "type": "image/png"
                },
                {
                    "src": "./icons/android-icon-144x144.png",
                    "sizes": "144x144",
                    "type": "image/png"
                },
                {
                    "src": "./icons/android-icon-192x192.png",
                    "sizes": "192x192",
                    "type": "image/png"
                },
                {
                    "src": "./icons/icon.png",
                    "sizes": "512x512",
                    "type": "image/png"
                }
            ],
        },

        workbox: {
            globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
            cleanupOutdatedCaches: true,
            clientsClaim: true,

            // runtimeCaching: [
            //     {
            //         urlPattern: /^https:\/\/server\.univ-on\.com\/.*/,
            //         handler: 'NetworkOnly',
            //     },
            // ],
        },

        devOptions: {
            enabled: false,
            navigateFallback: 'index.html',
            suppressWarnings: true,
            type: 'module',
        },
    }),svgr()],
})