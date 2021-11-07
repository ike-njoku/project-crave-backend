import { Test, TestingModule } from '@nestjs/testing';
import { EnrolmentGatewayGateway } from './enrolment-gateway.gateway';

describe('EnrolmentGatewayGateway', () => {
  let gateway: EnrolmentGatewayGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnrolmentGatewayGateway],
    }).compile();

    gateway = module.get<EnrolmentGatewayGateway>(EnrolmentGatewayGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
