import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnumeratorModule } from './enumerator/enumerator.module';

@Module({
  imports: [EnumeratorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
