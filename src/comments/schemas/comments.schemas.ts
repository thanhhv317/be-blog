import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';


@Schema({_id: false})
export class Comment {

  @Prop({type: Types.ObjectId})
  _id: Types.ObjectId;

  @Prop({default: 'INACTIVE'})
  status: string;

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  comment: string;

  @Prop()
  postId: Types.ObjectId

  @Prop({default: Date.now()})
  createAt: Date

}


export const CommentSchema = SchemaFactory.createForClass(Comment);
