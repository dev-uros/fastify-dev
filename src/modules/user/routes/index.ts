import {FastifyPluginAsync} from "fastify"
import {User, userListResponseSchema, UserType} from "../schemas/userList.js";
import {badRequestSchema, responseSchema, UserData} from "../schemas/storeUser.js";
import {updateUserRequestSchema} from "../schemas/updateUser.js";
//requestSchema
const example: FastifyPluginAsync = async (fastify, opts): Promise<void> => {

    fastify.route({
        url: '/',
        method: 'get',
        handler: async (request, reply) => {
            reply.send({
                message: 'Uspešno učitani korisnici',
                data: {
                    users: await fastify.UserListService.getUserList()
                }
            })
        },
        schema: {
            tags: ['user'],
            summary: "Pregled korisnika",
            description: "Pregled korisnika",
            response: {
                200: userListResponseSchema
            }
        }
    });

    fastify.route<{ Body: UserType }>({
        url: '/',
        method: 'post',
        // preHandler: async (request, reply, done) => {
        //     const userEmailExists = await fastify.UserRepository.checkDoesEmailExist(request.body.email);
        //     if (userEmailExists) {
        //         return reply.code(422).send({
        //             errors: [
        //                 `E-mail adresa: ${request.body.email} već postoji!`
        //             ]
        //         })
        //     }
        //
        // },
        handler: async (request, reply) => {
            // return reply.status(200)
            //     .send({
            //         message: 'Uspešno kreiran korisnik',
            //         data: {
            //             user: await fastify.UserStoreService.storeUser(request.body)
            //         }
            //     })
        },
        schema: {
            summary: "Kreiranje korisnika",
            description: "Definisanje korisnika",
            tags: ['user'],
            body: User,
            response: {
                200: User,
                // 400: badRequestSchema,
                // 422: badRequestSchema
            },
        },
    })

    fastify.route<{ Params: {id: number}, Body: UserData }>({
        url: '/:id',
        method: ['patch'],
        preHandler: async (request, reply, done) => {
            const userExists = await fastify.UserRepository.checkDoesUserExist(request.params.id)

            if (!userExists) {
                return reply.code(404).send({
                    errors: [
                        `Korisnik nije pronađen`
                    ]
                })
            }
            const userEmailExists = await fastify.UserRepository.checkDoesEmailExistIgnoringUserId(request.body.email, request.params.id);
            if (userEmailExists) {
                return reply.code(422).send({
                    errors: [
                        `E-mail adresa: ${request.body.email} već postoji!`
                    ]
                })
            }

        },
        handler: async (request, reply) => {

            return reply.status(200)
                .send({
                    message: 'Uspešno ažuriran korisnik',
                    data: {
                        user: await fastify.UserUpdateService.updateUser(request.params.id, request.body)
                    }
                })
        },
        schema: {
            summary: "Ažuriranje korisnika",
            description: "Ažuriranje korisnika",
            tags: ['user'],
            body: updateUserRequestSchema,
            response: {
                200: responseSchema,
                400: badRequestSchema,
                422: badRequestSchema
            },
        },
    })

    fastify.route<{ Params: {id: number}}>({
        url: '/:id',
        method: ['get'],
        preHandler: async (request, reply, done) => {
            const userExists = await fastify.UserRepository.checkDoesUserExist(request.params.id)

            if (!userExists) {
                return reply.code(404).send({
                    errors: [
                        `Korisnik nije pronađen`
                    ]
                })
            }
        },
        handler: async (request, reply) => {

            return reply.status(200)
                .send({
                    message: 'Uspešno učitan korisnik',
                    data: {
                        user: await fastify.UserShowService.showUser(request.params.id)
                    }
                })
        },
        schema: {
            summary: "Prikaz detalja korisnika",
            description: "Prikaz detalja korisnika",
            tags: ['user'],
            response: {
                200: responseSchema,
                422: badRequestSchema
            },
        },
    })

    fastify.get(
        '/adad',

        async function (request, reply) {
            // const users = await fastify.UserRepository().getUsers()
            // return users[0].first_name
            // users[0].created_at;

        }
    )
}

export default example;