import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthenticationService } from './authentication/authentication.service';
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' });

@Module({
  providers: [
    AuthenticationService,
  ],
  imports: [
    JwtModule.register({
      secret: 'asfdfaccada',
      signOptions: { expiresIn: '3603s' },
    }),
  ],
  exports: [AuthenticationService]
  
})
export class AuthenticationModule {}
