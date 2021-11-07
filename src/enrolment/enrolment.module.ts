import { Module } from '@nestjs/common';
import { EnrolmentService } from './enrolment.service';
import { EnrolmentController } from './enrolment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Enrolment, EnrolmentSchema } from './enrolment.schema';
import { EnrolmentGatewayGateway } from 'src/web-socket/enrolment-gateway.gateway';

@Module({
  controllers: [EnrolmentController],
  providers: [
    EnrolmentService,
    EnrolmentGatewayGateway
  ],
  imports: [
    MongooseModule.forFeature([
      {name: Enrolment.name, schema: EnrolmentSchema}
    ])
  ]
})
export class EnrolmentModule {}
