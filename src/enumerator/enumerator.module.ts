import { Module } from '@nestjs/common';
import { EnumeratorService } from './enumerator.service';
import { EnumeratorController } from './enumerator.controller';
import { Enumerator, EnumeratorSchema } from './enumerator.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { EmailModule } from 'src/email/email.module';
import { AuthenticationModule } from 'src/authentication/authentication.module';

@Module({
  controllers: [EnumeratorController],
  providers: [
    EnumeratorService,
  ],
  imports: [
    EmailModule,
    AuthenticationModule,
    MongooseModule.forFeature([
      {name: Enumerator.name, schema: EnumeratorSchema}
    ])
  ]
})
export class EnumeratorModule {}
