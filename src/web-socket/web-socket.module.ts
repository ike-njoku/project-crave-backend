import { Module } from '@nestjs/common';
import { EnrolmentGatewayGateway } from './enrolment-gateway.gateway';

@Module({
  providers: [EnrolmentGatewayGateway]
})
export class WebSocketModule {}
