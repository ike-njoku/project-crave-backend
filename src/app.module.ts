import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnumeratorModule } from './enumerator/enumerator.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    EnumeratorModule,
    MongooseModule.forRoot('mongodb://localhost/project-crave')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
