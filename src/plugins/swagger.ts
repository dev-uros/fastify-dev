import fp from "fastify-plugin";
import Swagger from "@fastify/swagger";
import SwaggerUI from "@fastify/swagger-ui";

export default fp(async (fastify, opts) => {

    fastify.register(Swagger, {
        swagger: {
            info: {
                title: 'Cool App Documentation',
                description: 'Testing the Fastify swagger API',
                version: '1.0.0'
            },
            consumes: ['application/json'],
            produces: ['application/json'],
            tags: [
                { name: 'user', description: 'User related end-points' },
            ],
        }
    })
    fastify.register(SwaggerUI, {
        routePrefix: '/documentation'
    })

})