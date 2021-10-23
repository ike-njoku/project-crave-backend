import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ServerResponseDTO } from 'src/shared-interfaces/server-response-dto.dto';
import { CreateEnumeratorDto } from './dto/create-enumerator.dto';
import { UpdateEnumeratorDto } from './dto/update-enumerator.dto';
import { Enumerator, EnumeratorDocument } from './enumerator.schema';

@Injectable()
export class EnumeratorService {

  constructor(
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
    const existingEnumerator = await this.enumeratorModel.findOne({emailAddress: createEnumeratorDto.emailAddress});

    if (existingEnumerator) {
      response.message = 'Enumerator already Exists'
      response.status = 'fail';
      response.data = null;
      console.log(response)
      return response;
    }
    
    const newEnumerator = new this.enumeratorModel(createEnumeratorDto);
    await newEnumerator.save();
    if (newEnumerator) {
      console.log('successfully created new enumerator');
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
  }

  findAll() {
    return `This action returns all enumerator`;
  }

  findOne(id: number) {
    return `This action returns a #${id} enumerator`;
  }

  update(id: number, updateEnumeratorDto: UpdateEnumeratorDto) {
    return `This action updates a #${id} enumerator`;
  }

  remove(id: number) {
    return `This action removes a #${id} enumerator`;
  }
}
