import { Module } from '@nestjs/common';
import { EnrolmentService } from './enrolment.service';
import { EnrolmentGateway } from './enrolment.gateway';

@Module({
  providers: [EnrolmentGateway, EnrolmentService]
})
export class EnrolmentModule {}
