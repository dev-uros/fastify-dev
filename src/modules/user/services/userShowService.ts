import fp from 'fastify-plugin'
import {UserShowServiceInterface} from "./userShowServiceInterface.js";

export default fp(async (fastify, opts) => {


        class UserShowService implements UserShowServiceInterface {
            async showUser(userId: number) {
                return await fastify.UserRepository.getUser(userId)
            }
        }

        fastify.decorate('UserShowService', new UserShowService())
    },
    {dependencies: ['database', 'userRepository']})

declare module 'fastify' {
    export interface FastifyInstance {
        UserShowService: UserShowServiceInterface
    }
}

