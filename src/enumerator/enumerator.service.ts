import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthenticationService } from 'src/authentication/authentication/authentication.service';
import { EmailService } from 'src/email/email/email.service';
import { ServerResponseDTO } from 'src/shared-interfaces/server-response-dto.dto';
import { CreateEnumeratorDto } from './dto/create-enumerator.dto';
import { SignInEnumeratorDto } from './dto/sign-in-enumerator.dto';
import { UpdateEnumeratorDto } from './dto/update-enumerator.dto';
import { Enumerator, EnumeratorDocument } from './enumerator.schema';

@Injectable()
export class EnumeratorService {

  constructor(
    private emailService: EmailService,
    private authService: AuthenticationService,
    @InjectModel(Enumerator.name) private enumeratorModel: Model<EnumeratorDocument>
  ) {

  }

  async create(createEnumeratorDto: CreateEnumeratorDto) {
    let response: ServerResponseDTO = {
      status: 'success',
      message: '',
      data: ''
    }

    // search and find existing enumerator
    const existingEnumerator = await this.enumeratorModel.findOne({ emailAddress: createEnumeratorDto.emailAddress });

    if (existingEnumerator) {
      response.message = 'Enumerator already Exists'
      response.status = 'fail';
      response.data = null;
      console.log(response)
      return response;
    }

    const newEnumerator = new this.enumeratorModel(createEnumeratorDto);
    await newEnumerator.save().then(() => console.log('saved')).catch((error:any) => console.log(error));
    try {
      if (newEnumerator) {
        const enumeratorPassword = Math.random().toString(36).slice(-8);
        await this.emailService.sendNewEnumeratorPasswordAndWelcome(
          newEnumerator.emailAddress,
          createEnumeratorDto.firstName,
          enumeratorPassword
        )

        await this.enumeratorModel.findOneAndUpdate({emailAddress: newEnumerator.emailAddress}, {$set: {password: enumeratorPassword}}, {new: true}, (error, document) => {
          if (error) console.log(error)
          else console.log(document)
        });

        response.data = null;
        response.message = 'Your account has been created Successfully';
        response.status = 'success'
        return response;
      }

      else {
        response.data = null;
        response.message = 'Could not create account. Please retry';
        response.status = 'fail'
        return response
      }

    } catch (error) {
      console.log(error)
    }

  }

  async signInEnumerator(enumerator: SignInEnumeratorDto) {
    let response: ServerResponseDTO = {
      status: 'success',
      message: '',
      data: ''
    }

    const existingEnumerator = await this.enumeratorModel.findOne({emailAddress: enumerator.emailAddress})
    if (existingEnumerator.password === enumerator.password) {
      const signedToken = await this.authService.signJWTToken(
        {
          userName: existingEnumerator.emailAddress,
          role: existingEnumerator.role
        }
      )

      if(signedToken) {
        response.status = 'success';
        response.message = `Signed in as ${existingEnumerator.emailAddress}`;
        response.data = signedToken
      }
      else {
        response.status = 'fail';
        response.message = `Could not sign JWT token`;
        response.data = null;
      }
    }
    else {
      response.status = 'fail';
      response.message = 'Invalid Credentials';
      response.data = null;
    }

    return response;
  }

  async findAll() {
    try {
      return await this.enumeratorModel.find()
    } catch (error) {
      console.log(error)
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} enumerator`;
  }

  findOneByEmail(email: string) {
    return this.enumeratorModel.findOne({ emailAddress: email })
  }

  update(id: number, updateEnumeratorDto: UpdateEnumeratorDto) {
    return `This action updates a #${id} enumerator`;
  }

  remove(id: number) {
    return `This action removes a #${id} enumerator`;
  }
}
