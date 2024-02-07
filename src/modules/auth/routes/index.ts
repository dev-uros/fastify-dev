import {FastifyPluginAsync} from "fastify"
// import {AuthServiceInterface} from "../services/authServiceInterface.js";

const example: FastifyPluginAsync = async (fastify, opts): Promise<void> => {

    fastify.route<{Body: {email: string, password: string}}>({
        url: '/login',
        method: 'post',
        preHandler: async(request, reply, done)=> {
            request.user = await fastify.UserRepository.getUserByEmail(request.body.email);
        },
        handler: (request, reply)=> {

             reply.send(request.user)
        }
    })



}

export default example;