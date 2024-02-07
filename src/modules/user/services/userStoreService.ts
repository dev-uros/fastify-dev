import fp from 'fastify-plugin'
import {UserStoreServiceInterface} from "./userStoreServiceInterface.js";
import {UserData} from "../schemas/storeUser.js";
import bcrypt from 'bcrypt'
import {nanoid} from "nanoid";

export default fp(async (fastify, opts) => {


        class UserStoreService implements UserStoreServiceInterface {
            async storeUser(data: UserData) {
                const randomPassword = nanoid();
                const hashedPassword = await bcrypt.hash(randomPassword, 12);
                await fastify.sendNewUserEmail({to: 'uros@gmail.com', subject: 'hello', text : 'hello from node'})
                return await fastify.UserRepository.storeUser(data, hashedPassword)
            }
        }

        fastify.decorate('UserStoreService', new UserStoreService())
    },
    {dependencies: ['database', 'userRepository']})

declare module 'fastify' {
    export interface FastifyInstance {
        UserStoreService: UserStoreServiceInterface
    }
}

