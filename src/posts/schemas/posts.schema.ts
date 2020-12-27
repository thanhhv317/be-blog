import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Category } from 'src/categories/schemas';
import { User } from 'src/users/schemas';

@Schema({_id: false})
export class Post {

  @Prop({type: Types.ObjectId})
  _id: Types.ObjectId;

  @Prop()
  title: string;

  @Prop()
  slug: string;

  @Prop({type: [Types.ObjectId], ref: Category.name})
  category: Category[];

  @Prop({type: Types.ObjectId, ref: User.name})
  authorId: string; 

  @Prop()
  thumbnail: string;

  @Prop()
  content: string;

  @Prop()
  status: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
