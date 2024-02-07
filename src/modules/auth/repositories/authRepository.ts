import fp from 'fastify-plugin'
import AuthRepositoryInterface from "./authRepositoryInterface.js";
import {UserData} from "../schemas/storeUser.js";

export default fp(async (fastify, opts) => {

    class AuthRepository implements AuthRepositoryInterface {
        async getUsers() {
            return await fastify.db
                .selectFrom('users')
                .selectAll()
                .orderBy('id', 'desc')
                .execute()
        }

        async getUser(userId: number) {
            //todo: add user logs relationship
            return await fastify.db
                .selectFrom('users')
                .where('id', '=', userId)
                .selectAll()
                .executeTakeFirst()
        }

        async storeUser(data: UserData) {
            return await fastify.db
                .insertInto('users')
                .values({
                    first_name: data.name,
                    last_name: data.surname,
                    email: data.email
                })
                .returningAll()
                .executeTakeFirst()
        }

        async updateUser(userId: number, data: UserData) {
            return await fastify.db
                .updateTable('users')
                .set({
                    first_name: data.name,
                    last_name: data.surname,
                    email: data.email
                })
                .where('id', '=', userId)
                .returningAll()
                .executeTakeFirst()
        }

        async checkDoesEmailExist(userEmail: string){
            return await fastify.db
                .selectFrom('users')
                .select('id')
                .where('email', '=', userEmail)
                .executeTakeFirst()
        }

        async checkDoesEmailExistIgnoringUserId(userEmail: string, userId: number){
            return await fastify.db
                .selectFrom('users')
                .select('id')
                .where('email', '=', userEmail)
                .where('id', '!=', userId)
                .executeTakeFirst()
        }

        async checkDoesUserExist(userId: number){
            return await fastify.db
                .selectFrom('users')
                .select('id')
                .where('id', '=', userId)
                .executeTakeFirst()
        }
    }


    await fastify.decorate('AuthRepository', new AuthRepository());
}, {
    name: 'userRepository',
    dependencies: ['database']
})


declare module 'fastify' {
    export interface FastifyInstance {
        AuthRepository: AuthRepositoryInterface
    }
}
