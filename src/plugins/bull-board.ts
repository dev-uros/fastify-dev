import fp from "fastify-plugin";

import {FastifyAdapter} from "@bull-board/fastify";
import {createBullBoard} from "@bull-board/api";
//import {BullMQAdapter} from "@bull-board/api/bullMQAdapter"
import {BullMQAdapter} from "@bull-board/api/bullMQAdapter.js"

export default fp(async (fastify, opts) => {

    const serverAdapter = new FastifyAdapter();
    serverAdapter.setBasePath('/bull')

    createBullBoard({
        queues: [new BullMQAdapter(fastify.welcomeEmailQueue)],
        serverAdapter,
    });


    // @ts-ignore
    fastify.register(serverAdapter.registerPlugin(), {prefix: '/bull'});

}
, {
    dependencies: ['cron-test']
})