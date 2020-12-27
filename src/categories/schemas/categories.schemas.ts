import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({_id: false})
export class Category {

  @Prop({type: Types.ObjectId})
  _id: Types.ObjectId;

  @Prop()
  status: string;

  @Prop()
  name: string;

  @Prop()
  description: string;

}

export const CategorySchema = SchemaFactory.createForClass(Category);
