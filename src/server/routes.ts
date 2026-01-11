// src/backend/config/routes/index.ts
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import { RouteDefinition, type AppContext, t } from '@minejs/server';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ INIT ════════════════════════════════════════╗

    export const routes : RouteDefinition[] = [

        // NOTE:
        // the `/` route is used for public zone (static files).
        // to avoid it, change the default public route in config.ts file to something else like `/static`.
        //
        // {
        //     method  : 'GET',
        //     path    : '/',
        //     handler: (c: AppContext) => {
        //         return c.json({ message: 'Hello World!' });
        //     }
        // },

        {
            method  : 'GET',
            path    : '/hello_world',

            handler: (c: AppContext) => {
                // Language is auto-detected from:
                // 1. ?lang=ar query parameter
                // 2. lang=ar cookie
                // 3. Accept-Language header
                // 4. Default language

                const currentLang = c.lang;

                return c.json({
                    message    : t('hello'),
                    language   : currentLang,
                    supported  : c.i18n?.getSupportedLanguages()
                });
            }
        },

    ];

// ╚══════════════════════════════════════════════════════════════════════════════════════╝