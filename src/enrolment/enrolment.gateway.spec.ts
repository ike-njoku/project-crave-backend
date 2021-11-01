import { Test, TestingModule } from '@nestjs/testing';
import { EnrolmentGateway } from './enrolment.gateway';
import { EnrolmentService } from './enrolment.service';

describe('EnrolmentGateway', () => {
  let gateway: EnrolmentGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnrolmentGateway, EnrolmentService],
    }).compile();

    gateway = module.get<EnrolmentGateway>(EnrolmentGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
