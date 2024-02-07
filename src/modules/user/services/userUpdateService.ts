import fp from 'fastify-plugin'
import {UserData} from "../schemas/storeUser.js";
import {UserUpdateServiceInterface} from "./userUpdateServiceInterface.js";

export default fp(async (fastify, opts) => {


        class UserUpdateService implements UserUpdateServiceInterface {
            async updateUser(userId: number, data: UserData) {
                return await fastify.UserRepository.updateUser(userId, data)
            }
        }

        fastify.decorate('UserUpdateService', new UserUpdateService())
    },
    {dependencies: ['database', 'userRepository']})

declare module 'fastify' {
    export interface FastifyInstance {
        UserUpdateService: UserUpdateServiceInterface
    }
}

