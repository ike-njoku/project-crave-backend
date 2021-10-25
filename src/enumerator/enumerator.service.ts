import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EmailService } from 'src/email/email/email.service';
import { ServerResponseDTO } from 'src/shared-interfaces/server-response-dto.dto';
import { CreateEnumeratorDto } from './dto/create-enumerator.dto';
import { UpdateEnumeratorDto } from './dto/update-enumerator.dto';
import { Enumerator, EnumeratorDocument } from './enumerator.schema';

@Injectable()
export class EnumeratorService {

  constructor(
    private emailService: EmailService,
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
    const existingEnumerator = await this.enumeratorModel.findOne({ emailAddress: createEnumeratorDto.emailAddress }, (error, document) => {
      if (document) console.log(document)
      else console.log(error)
    });

    if (existingEnumerator) {
      response.message = 'Enumerator already Exists'
      response.status = 'fail';
      response.data = null;
      console.log(response)
      return response;
    }

    const newEnumerator = new this.enumeratorModel(createEnumeratorDto);
    await newEnumerator.save();
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
