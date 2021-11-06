import { enumeratorGender } from "../enrolment.schema";

export class CreateEnrolmentDto {
  firstName: string;
  lastName: string;
  gender: enumeratorGender;
  occupation: string;
  bankName: string;
  accountNumber: string;
  BVN: string;
  NIN?: string;
  stateOfOrigin: string;
  LGA: string;
  city: string;
  address: string;
  emailAddress: string;
  primaryPhoneNumber: string;
  secondaryPhoneNumber: string;
}
