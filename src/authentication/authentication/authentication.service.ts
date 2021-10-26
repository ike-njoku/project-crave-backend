import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthenticationService {
  constructor(
    private jwt: JwtService
  ) {}
  signJWTToken(tokenContent: any) {
    return this.jwt.sign(tokenContent)
  }
}
