import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({_id: false})
export class User {

  @Prop({type: Types.ObjectId})
  _id: Types.ObjectId;

  @Prop()
  status: string;

  @Prop()
  username: string;

  @Prop()
  level: number;

  @Prop()
  fullname: string;

}

export const UserSchema = SchemaFactory.createForClass(User);
