import { defineConfig, fontProviders } from 'astro/config';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    fonts: [
        {
            provider: fontProviders.local(),
            name: "Forum",
            cssVariable: "--font-forum",
            options: {
                variants: [
                    {
                        src: ['./public/fonts/Forum/forum-regular.woff2'],
                        weight: 'normal',
                        style: 'normal'
                    }
                ]
            }
        },
        {
            provider: fontProviders.local(),
            name: "Manrope",
            cssVariable: "--font-manrope",
            options: {
                variants: [
                    {
                        src: ['./public/fonts/Manrope/manrope-light.woff2'],
                        weight: 300,
                    },
                    {
                        src: ['./public/fonts/Manrope/manrope-regular.woff2'],
                        weight: 400,
                    },
                    {
                        src: ['./public/fonts/Manrope/manrope-medium.woff2'],
                        weight: 500,
                    },
                    {
                        src: ['./public/fonts/Manrope/manrope-semibold.woff2'],
                        weight: 600,
                    }
                ]
            }
        },
    ],
    vite: {
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src'),
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@use "${resolve(__dirname, 'src/styles/vars.scss')}" as *; @use "${resolve(__dirname, 'src/styles/mixins/breakpoints.scss')}" as *; @use "${resolve(__dirname, 'src/styles/functions/adaptive-fz.scss')}" as *;`,
                },
            },
        },
    },
    experimental: {
        svgo: true
    }
});
