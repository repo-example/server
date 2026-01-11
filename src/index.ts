// src/index.ts
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import { server as createServer }   from '@minejs/server';
    import { config }                   from './server/config';
    import { routes }                   from './server/routes';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    async function main() {
        const server = await createServer({ ...config, routes });

        await server.start();

        return server;
    }

    main();

// ╚══════════════════════════════════════════════════════════════════════════════════════╝