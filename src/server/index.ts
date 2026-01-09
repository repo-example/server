// src/backend/index.ts
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import { server as createServer }   from '@minejs/server';
    import { config }                   from './config';
    import { routes }                   from './routes';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝


// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    // create
    export const server = createServer({ ...config, routes });

// ╚══════════════════════════════════════════════════════════════════════════════════════╝