// src/backend/config/routes/index.ts
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import { RouteDefinition, type AppContext } from '@minejs/server';

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
                return c.json({ message: 'Hello World!' });
            }
        },

    ];

// ╚══════════════════════════════════════════════════════════════════════════════════════╝