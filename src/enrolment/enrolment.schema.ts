import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type enumeratorGender = 'male' | 'female';
export type EnrolmentDocument = Enrolment & Document;

@Schema()
export class Enrolment  { 
  @Prop({required: true})
  firstName: string;

  @Prop({required: true})
  lastName: string;

  @Prop({required: true})
  gender: enumeratorGender;

  @Prop({required: true})
  occupation: string;

  @Prop({required: true})
  bankName: string;

  @Prop({required: true})
  accountNumber: string;

  @Prop({required: true}) 
  BVN: string;

  @Prop() 
  NIN: string;

  @Prop({required: true}) 
  stateOfOrigin: string;

  @Prop({required: true}) 
  LGA: string;

  @Prop({required: true}) 
  city: string;

  @Prop({required: true}) 
  address: string;

  @Prop({required: true}) 
  emailAddress: string;

  @Prop({required: true}) 
  primaryPhoneNumber: string;

  @Prop({required: true}) 
  secondaryPhoneNumber: string;
}