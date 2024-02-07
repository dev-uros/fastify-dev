import fp from 'fastify-plugin'
import * as dotenv from 'dotenv';
interface Config extends dotenv.DotenvParseOutput{
    APP_IP: string
    APP_PORT: string
    DATABASE_NAME: string,
    DATABASE_HOST: string,
    DATABASE_USER: string,
    DATABASE_PASSWORD: string,
    DATABASE_PORT: string,
    MAIL_HOST: string,
    MAIL_PORT: string
    MAIL_USERNAME: string
    MAIL_PASSWORD: string
    MAIL_ENCRYPTION: string
    MAIL_FROM_ADDRESS: string
    MAIL_FROM_NAME: string
}
export default fp(async (fastify, opts) => {
    fastify.decorate('config', dotenv.config().parsed as Config);
}, {
    name: 'config'
})


declare module 'fastify' {
    export interface FastifyInstance {
        config: Config
    }
}
