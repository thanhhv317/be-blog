import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { CategorySchema } from './schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'categories', schema: CategorySchema }])
  ],
  providers: [CategoriesService],
  controllers: [CategoriesController]
})
export class CategoriesModule {}
