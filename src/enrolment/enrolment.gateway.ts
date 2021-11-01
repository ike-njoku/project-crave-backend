import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { EnrolmentService } from './enrolment.service';
import { CreateEnrolmentDto } from './dto/create-enrolment.dto';
import { UpdateEnrolmentDto } from './dto/update-enrolment.dto';

@WebSocketGateway()
export class EnrolmentGateway {
  constructor(private readonly enrolmentService: EnrolmentService) {}

  @SubscribeMessage('createEnrolment')
  create(@MessageBody() createEnrolmentDto: CreateEnrolmentDto) {
    return this.enrolmentService.create(createEnrolmentDto);
  }

  @SubscribeMessage('findAllEnrolment')
  findAll() {
    return this.enrolmentService.findAll();
  }

  @SubscribeMessage('findOneEnrolment')
  findOne(@MessageBody() id: number) {
    return this.enrolmentService.findOne(id);
  }

  @SubscribeMessage('updateEnrolment')
  update(@MessageBody() updateEnrolmentDto: UpdateEnrolmentDto) {
    return this.enrolmentService.update(updateEnrolmentDto.id, updateEnrolmentDto);
  }

  @SubscribeMessage('removeEnrolment')
  remove(@MessageBody() id: number) {
    return this.enrolmentService.remove(id);
  }
}
