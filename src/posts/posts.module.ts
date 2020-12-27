import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PostSchema } from './schemas/posts.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'posts', schema: PostSchema }])
  ],
  providers: [PostsService],
  controllers: [PostsController],
  exports: [PostsService]
})
export class PostsModule {}
