import {VitePWA} from 'vite-plugin-pwa';
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3000,
    },
    plugins: [react(), VitePWA({
        registerType: 'autoUpdate',
        injectRegister: "script",

        manifest: {
            name: 'univon',
            short_name: 'univon',
            description: '대학교 공지 알림 서비스',
            theme_color: '#FAFAFA',
            background_color: '#FAFAFA',
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

        // workbox: {
        //     globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
        //     cleanupOutdatedCaches: true,
        //     clientsClaim: true,
        //     skipWaiting: true,
        //
        //     runtimeCaching: [
        //         {
        //             urlPattern: /.*/,
        //             handler: 'NetworkFirst',
        //             options: {
        //                 cacheName: 'all-cache',
        //                 expiration: {
        //                     maxEntries: 100,
        //                     maxAgeSeconds: 60 * 5,
        //                 },
        //                 networkTimeoutSeconds: 10,
        //             },
        //         },
        //     ],
        // },

        devOptions: {
            enabled: true,
            navigateFallback: 'index.html',
            suppressWarnings: true,
            type: 'module',
        },

    }), svgr()],
})