import {Job, Queue, Worker} from 'bullmq';
import fp from "fastify-plugin";

export default fp(async (fastify, opts) => {

    const welcomeEmailQueue = new Queue('WelcomeEmailQueue');

    const sendEmailWorker = new Worker('WelcomeEmailQueue', async (job: Job) => {
        await fastify.mailTransporter.sendMail({...fastify.mailOptions, ...job.data, html:`<!doctype html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><title></title><!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]--><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style type="text/css">#outlook a { padding:0; }
          body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }
          table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }
          img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }
          p { display:block;margin:13px 0; }</style><!--[if mso]>
        <noscript>
        <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
        </xml>
        </noscript>
        <![endif]--><!--[if lte mso 11]>
        <style type="text/css">
          .mj-outlook-group-fix { width:100% !important; }
        </style>
        <![endif]--><!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css"><style type="text/css">@import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);</style><!--<![endif]--><style type="text/css">@media only screen and (min-width:480px) {
        .mj-column-per-100 { width:100% !important; max-width: 100%; }
.mj-column-px-600 { width:600px !important; max-width: 600px; }
.mj-column-px-400 { width:400px !important; max-width: 400px; }
      }</style><style media="screen and (min-width:480px)">.moz-text-html .mj-column-per-100 { width:100% !important; max-width: 100%; }
.moz-text-html .mj-column-px-600 { width:600px !important; max-width: 600px; }
.moz-text-html .mj-column-px-400 { width:400px !important; max-width: 400px; }</style><style type="text/css"></style></head><body style="word-spacing:normal;"><div><!-- Company Header --><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#f0f0f0" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#f0f0f0;background-color:#f0f0f0;margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f0f0f0;background-color:#f0f0f0;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tbody><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;font-style:italic;line-height:1;text-align:left;color:#626262;">Aktiviranje korisničkog naloga</div></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--><!-- Image Header --><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><v:rect style="width:600px;" xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false"><v:fill origin="0.5, 0" position="0.5, 0" src="https://images.ctfassets.net/7thvzrs93dvf/wpImage18536/5bad272ce24d9ce3b6b76a78ada6fa7b/abstract-pyrimid-upsplash.png?w=900&h=225&q=90&fm=png" type="tile" size="1,1" aspect="atmost" /><v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0"><![endif]--><div style="background:url(https://images.ctfassets.net/7thvzrs93dvf/wpImage18536/5bad272ce24d9ce3b6b76a78ada6fa7b/abstract-pyrimid-upsplash.png?w=900&h=225&q=90&fm=png) center top / contain repeat;background-position:center top;background-repeat:repeat;background-size:contain;margin:0px auto;max-width:600px;"><div style="line-height:0;font-size:0;"><table align="center" background="https://images.ctfassets.net/7thvzrs93dvf/wpImage18536/5bad272ce24d9ce3b6b76a78ada6fa7b/abstract-pyrimid-upsplash.png?w=900&h=225&q=90&fm=png" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:url(https://images.ctfassets.net/7thvzrs93dvf/wpImage18536/5bad272ce24d9ce3b6b76a78ada6fa7b/abstract-pyrimid-upsplash.png?w=900&h=225&q=90&fm=png) center top / contain repeat;background-position:center top;background-repeat:repeat;background-size:contain;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-px-600 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tbody><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Helvetica Neue;font-size:40px;line-height:1;text-align:center;color:#ffffff;">Super kul aplikacija</div></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div></div><!--[if mso | IE]></v:textbox></v:rect></td></tr></table><![endif]--><!-- Intro text --><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#fafafa" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#fafafa;background-color:#fafafa;margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fafafa;background-color:#fafafa;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:400px;" ><![endif]--><div class="mj-column-px-400 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tbody><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Helvetica Neue;font-size:20px;font-style:italic;line-height:1;text-align:left;color:#626262;">Dobro došli u našu super kul aplikaciju!</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#525252;">Kako bi ste aktivirali vaš korisnički nalog, pritisnite dugme ispod i pratite instrukcije na ekranu!</div></td></tr><tr><td align="center" vertical-align="middle" style="font-size:0px;padding:10px 25px;word-break:break-word;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;"><tr><td align="center" bgcolor="#F45E43" role="presentation" style="border:none;border-radius:3px;cursor:auto;mso-padding-alt:10px 25px;background:#F45E43;" valign="middle"><a href="#" style="display:inline-block;background:#F45E43;color:#ffffff;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:3px;" target="_blank">Aktiviraj nalog</a></td></tr></table></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--> <!-- Side image --><!-- Icons --></div></body></html>`});
    }, {
        connection: {
            host: 'localhost',
            port: 6379,
        },
    });




    const gracefulShutdown = async (signal: 'SIGINT' | 'SIGTERM') => {
        console.log(`Received ${signal}, closing server...`);
        await sendEmailWorker.close();
        // Other asynchronous closings
        process.exit(0);
    }

    process.on('SIGINT', () => gracefulShutdown('SIGINT'));

    process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));




    fastify.decorate('welcomeEmailQueue', welcomeEmailQueue);
    fastify.decorate('sendNewUserEmail', async (mailConfig: { to: string, subject: string, text: string }) => {
        await welcomeEmailQueue.add('welcome email', mailConfig, {
            removeOnComplete: 1000,
            removeOnFail: 5000,
            backoff: 1000,
            attempts: 3,
            jobId: `${Date.now()}-${Math.random().toString(36).substring(7)}`
        })
    })
}, {
    name: 'cron-test',
    dependencies: ['database']
})

declare module 'fastify' {
    export interface FastifyInstance {
        welcomeEmailQueue: Queue,

        sendNewUserEmail(mailConfig: { to: string, subject: string, text: string }): Promise<void>
    }
}
