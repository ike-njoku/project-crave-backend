import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ServerResponseDTO } from 'src/shared-interfaces/server-response-dto.dto';
import { EnrolmentGatewayGateway } from 'src/web-socket/enrolment-gateway.gateway';
import { CreateEnrolmentDto } from './dto/create-enrolment.dto';
import { UpdateEnrolmentDto } from './dto/update-enrolment.dto';
import { Enrolment, EnrolmentDocument } from './enrolment.schema';

@Injectable()
export class EnrolmentService {

  constructor(
    private enrolmentGateway: EnrolmentGatewayGateway,
    @InjectModel(Enrolment.name) private enrolmentModel: Model<EnrolmentDocument>
  ) {}
  async create(createEnrolmentDto: CreateEnrolmentDto) {
    try {
      console.log(createEnrolmentDto);
    let response: ServerResponseDTO  = {
      status: 'fail',
      message: '',
      data: undefined
    }
    
    let existingEnrolment = await this.enrolmentModel.exists({BVN: createEnrolmentDto.BVN});
    if (existingEnrolment) {
      response.status = 'fail';
      response.message = 'Enrolment Already Exists';
      response.data = null;
      console.log('Enrolment already Exists')
      return response;
    }
   
    const newEnrolment = new this.enrolmentModel(createEnrolmentDto);
    await newEnrolment.save()
      .then(
        () => {
          response.status = 'success';
          response.message = 'Enrolment was successful';
          response.data = newEnrolment;
          console.log(response.message);
         this.enrolmentGateway.handleMessage('newEnrolment', newEnrolment)
          return response;
        }
      )
      .catch((error: any) => {
        console.log(error)
      })
      
    } catch (error) {
      console.log(error)
    }
  }

  findAll() {
    return `This action returns all enrolment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} enrolment`;
  }

  update(id: number, updateEnrolmentDto: UpdateEnrolmentDto) {
    return `This action updates a #${id} enrolment`;
  }

  remove(id: number) {
    return `This action removes a #${id} enrolment`;
  }
}
