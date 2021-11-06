import { Module } from '@nestjs/common';
import { EnrolmentService } from './enrolment.service';
import { EnrolmentController } from './enrolment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Enrolment, EnrolmentSchema } from './enrolment.schema';

@Module({
  controllers: [EnrolmentController],
  providers: [
    EnrolmentService,
  ],
  imports: [
    MongooseModule.forFeature([
      {name: Enrolment.name, schema: EnrolmentSchema}
    ])
  ]
})
export class EnrolmentModule {}
