import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

// Multiple server
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express';
import * as express from 'express'
import * as http from "http"
import { AppInternalModule } from './appInternal.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('HTblog open API')
    .setDescription('The post API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  app.enableCors();
  await app.listen(3000);

  // server 2;
  const serverInternal = express();
  const appInternal = await NestFactory.create<NestExpressApplication>(
    AppInternalModule,
    new ExpressAdapter(serverInternal),
  );
  appInternal.useStaticAssets(join(__dirname, '../../', 'bl/dist/browser/'));
  appInternal.enableCors();
  await appInternal.init();
  http.createServer(serverInternal).listen(4001);
}
bootstrap();
