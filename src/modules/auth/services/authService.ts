import fp from 'fastify-plugin'
import {AuthServiceInterface} from "./authServiceInterface.js";
export default fp(async (fastify, opts) => {


        class AuthService implements AuthServiceInterface {

            async login(){

            }

            async logout(){

            }

            async autoLogin(){

            }

            async revokeToken(){

            }

            async forgotPassword(){

            }

            async resetPassword(){

            }

            async activateAccount(){

            }
        }

        fastify.decorate('AuthService', new AuthService())
    },
    {dependencies: ['database', 'userRepository']})

declare module 'fastify' {
    export interface FastifyInstance {
        AuthService: AuthServiceInterface
    }
}

