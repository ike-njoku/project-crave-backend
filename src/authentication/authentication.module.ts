import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication/authentication.service';

@Module({
  providers: [AuthenticationService]
})
export class AuthenticationModule {}
