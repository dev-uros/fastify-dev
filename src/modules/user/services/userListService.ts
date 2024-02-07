import fp from 'fastify-plugin'
import {UserListServiceInterface} from "./userListServiceInterface.js";

export default fp(async (fastify, opts) => {


        class UserListService implements UserListServiceInterface {
            async getUserList() {
                return await fastify.UserRepository.getUsers()
            }
        }

        fastify.decorate('UserListService', new UserListService())
    },
    {dependencies: ['database', 'userRepository']})

declare module 'fastify' {
    export interface FastifyInstance {
        UserListService: UserListServiceInterface
    }
}

