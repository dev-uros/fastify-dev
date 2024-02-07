import app from './app.js'
import closeWithGrace from "close-with-grace";

app
    .listen({host: app.config.APP_IP, port: +app.config.APP_PORT})
    .catch(async (err) => {
        await app.db.destroy();
        app.log.error(err)
        process.exit(1)
    })

closeWithGrace(async ({ err }) => {
    if (err) {
        app.log.error({ err }, 'server closing due to error')
    }
    app.log.info('shutting down gracefully')
    await app.db.destroy();
    await app.close()
})