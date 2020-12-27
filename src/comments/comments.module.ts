import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsService } from 'src/posts/posts.service';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { CommentSchema } from './schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'comments', schema: CommentSchema }])
  ],
  providers: [CommentsService],
  controllers: [CommentsController]
})
export class CommentsModule {}
