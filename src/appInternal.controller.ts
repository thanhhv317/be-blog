import { Controller, Get, Res } from '@nestjs/common';
import { resolve } from 'path';
import { AppInternalService } from './appInternal.service';

@Controller()
export class AppInternalController {

  constructor(private readonly appService: AppInternalService) {}

  @Get('*')
  root(@Res() res) {
    return res.sendFile(resolve('../bl/dist/browser/index.html'));;
  }
}
