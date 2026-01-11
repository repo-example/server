// src/backend/config/index.ts
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import { ServerConfig } from '@minejs/server';
    import path from 'path';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ INIT ════════════════════════════════════════╗

    const port          = process.env.PORT                      || 3000;
    const hostname      = process.env.HOSTNAME                  || 'localhost';
    const origin        = (process.env.CORS_ORIGINS             || `http://${hostname}:${port}`).split(',');
    const logLevel      = (process.env.LOG_LEVEL                || 'info') as 'error' | 'warn' | 'info' | 'debug';
    const staticPath    = process.env.STATIC_PATH               || '/';
    const staticDir     = path.resolve(process.env.STATIC_DIR   || './src/public');
    // const dbName        = process.env.DATABASE_URL              || '{{name}}.db';

    export const config : ServerConfig = {
        port            : port,
        hostname        : hostname,
        requestTimeout  : 30000,
        maxRequestSize  : 10485760,
        routes          : [],

        static          : {
            path        : staticPath,
            directory   : staticDir
        },

        security        : {
            rateLimit   : {
                max             : 100,
                windowMs        : 60000,
                message         : 'Too many requests. Please try again later.',
                keyGenerator    : (c) => {
                    const apiKey = c.request?.headers?.get?.('x-api-key');
                    return apiKey || c.ip || 'unknown';
                },
            },
            cors        : {
                origin          : origin,
                credentials     : true,
                methods         : ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
                allowedHeaders  : ['Content-Type', 'Authorization', 'X-Request-ID']
            },
            csrf: true
        },

        logging         : {
            level       : logLevel,
            pretty      : true
        },

        i18n           : {
            defaultLanguage     : 'ar',
            supportedLanguages  : ['ar', 'en'],
            basePath            : './src/i18n'
        },

        // database        : {
        //     connection  : dbName,
        //     schema      : { }
        // },

        onShutdown: async () => { },
    };

// ╚══════════════════════════════════════════════════════════════════════════════════════╝