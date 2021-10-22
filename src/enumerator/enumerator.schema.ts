import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EnumeratorDocument = Enumerator & Document;

@Schema()
export class Enumerator  {
  @Prop({required: true})
  firstName: string;

  @Prop({required: true})
  lastName: string;

  @Prop({required: true})
  emailAddress: string;

  @Prop({required: true})
  primaryPhone: string;

  @Prop()
  secondaryPhone: string;
}

export const EnumeratorSchema = SchemaFactory.createForClass(Enumerator);