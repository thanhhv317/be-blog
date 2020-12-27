import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { PostsModule } from './posts/posts.module';
import { CategoriesModule } from './categories/categories.module';
import { CommentsModule } from './comments/comments.module';
import { UsersModule } from './users/users.module';
import { AppInternalController } from './appInternal.controller';
import { AppInternalService } from './appInternal.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/blog'),
    PostsModule,
    CategoriesModule,
    CommentsModule,
    UsersModule,
  ],
  controllers: [AppInternalController],
  providers: [AppInternalService],
})
export class AppInternalModule {}
