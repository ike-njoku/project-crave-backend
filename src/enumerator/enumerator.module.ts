import { Module } from '@nestjs/common';
import { EnumeratorService } from './enumerator.service';
import { EnumeratorController } from './enumerator.controller';
import { Enumerator, EnumeratorSchema } from './enumerator.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [EnumeratorController],
  providers: [EnumeratorService],
  imports: [
    MongooseModule.forFeature([
      {name: Enumerator.name, schema: EnumeratorSchema}
    ])
  ]
})
export class EnumeratorModule {}
