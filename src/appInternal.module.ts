import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { AppInternalController } from './appInternal.controller';
import { AppInternalService } from './appInternal.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/blog'),
  ],
  controllers: [AppInternalController],
  providers: [AppInternalService],
})
export class AppInternalModule {}
