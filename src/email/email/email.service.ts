import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {

  constructor(
    private readonly mailerService: MailerService
  ) {}

  sendNewEnumeratorPasswordAndWelcome(
    enumeratorEmail: string,
    enumeratorFirstName: string,
    enumeratorPassword: string
    ) {

    console.log(enumeratorFirstName)
    this.mailerService.sendMail({
      to: `${enumeratorEmail}`, // list of receivers
      from: `NoReply@ProjectCRAVE <ikenjokudc@ymail.com>`, // sender address
      subject: 'Welcome to CRAVE', // Subject line
      text: '', // plaintext body
      html: `
      Welcome, ${enumeratorFirstName}. You have signed up to be a data enumerator on the CRAVE project. <br>
      Your login password is:
      <h2>${enumeratorPassword}</h2>
      `, // HTML body content
    })
      .then(
      () => console.log(`password sent to ${enumeratorEmail}`)
    )
      .catch(
        (error: any) => console.log(error)
      )

  }
}
