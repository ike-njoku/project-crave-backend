import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { EmailService } from './email/email.service';

@Module({
  providers: [EmailService],
  exports: [EmailService],
  imports: [
    MailerModule.forRoot({
      transport: {
        service: 'Yahoo',
        host: 'smtp.mail.yahoo.com',
        port: 587,
        ignoreTLS: true,
        secure: false,
        auth: {
          user: 'ikenjokudc@ymail.com',
          pass: 'zdjqksutpyylozug',
        },
      },
      defaults: {
        from: '"No Reply" <ikenjokudc@ymail.com>',
      }
    })
  ]
})
export class EmailModule { }
