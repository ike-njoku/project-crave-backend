import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {

  constructor(
    private readonly mailerService: MailerService
  ) {}

  sendNewEnumeratorPasswordAndWelcome(
    enumeratorEmail: string,
    enumeratorPassword: string
    ) {

    this.mailerService.sendMail({
      to: `${enumeratorEmail}`, // list of receivers
      from: 'ikenjokudc@ymail.com', // sender address
      subject: 'Testing Nest MailerModule ✔', // Subject line
      text: '', // plaintext body
      html: `<h2>${enumeratorPassword}</h2>`, // HTML body content
    })
      .then(
      () => console.log(`password sent to ${enumeratorEmail}`)
    )
      .catch(
        (error: any) => console.log(error)
      )

  }
}
