import fp from 'fastify-plugin'
import nodemailer, {TransportOptions, SendMailOptions} from 'nodemailer'

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
export default fp(async (fastify) => {
    const transporter = nodemailer.createTransport({
        host: fastify.config.MAIL_HOST,
        port: fastify.config.MAIL_PORT,
        secure: fastify.config.MAIL_ENCRYPTION !== 'tls',
        auth: {
            user: fastify.config.MAIL_USERNAME,
            pass: fastify.config.MAIL_PASSWORD,
        },
    } as TransportOptions);

    const mailOptions = {
        from: {
            address: fastify.config.MAIL_FROM_ADDRESS,
            name: fastify.config.MAIL_FROM_NAME,
        },
    }

    fastify.decorate('mailTransporter', transporter);
    fastify.decorate('mailOptions', mailOptions)
}, {
    dependencies: ['config']
})


declare module 'fastify' {
    export interface FastifyInstance {
        mailTransporter: nodemailer.Transporter,
        mailOptions: SendMailOptions
    }
}
