import fp from 'fastify-plugin'
import {Selectable} from "kysely";
import {Users} from "kysely-codegen";

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
export default fp(async (fastify) => {
    fastify.decorateRequest('user', undefined);
})
declare module 'fastify' {
    export interface FastifyRequest {
        user: undefined | Selectable<Users>
    }
}