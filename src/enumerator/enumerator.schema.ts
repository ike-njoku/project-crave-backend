import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role } from 'src/authentication/roles.enum';

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

  @Prop()
  password: string

  @Prop()
  id: string

  @Prop()
  enumerations: number;

  @Prop({default: 'Enumerator'})
  role: Role
}

export const EnumeratorSchema = SchemaFactory.createForClass(Enumerator);