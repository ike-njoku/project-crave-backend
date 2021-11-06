import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnumeratorModule } from './enumerator/enumerator.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MailerModule } from '@nestjs-modules/mailer';
import { EmailModule } from './email/email.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { EnrolmentModule } from './enrolment/enrolment.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/project-crave'),
    MailerModule.forRoot({
      transport: {
        host: 'localhost',
        port: 1025,
        ignoreTLS: true,
        secure: false,
        auth: {
          user: process.env.MAILDEV_INCOMING_USER,
          pass: process.env.MAILDEV_INCOMING_PASS,
        },
      },
      defaults: {
        from: '"No Reply" <no-reply@localhost>',
      },
    }),
    EmailModule,
    AuthenticationModule,
    EnrolmentModule,
    EnumeratorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
