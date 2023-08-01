import { Body, Controller, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { WebhookData } from './utils/type';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/webhook')
  async sendEmail(@Res() response: Response, @Body() data: WebhookData) {
    console.log('Received Payload:', data);
    this.appService.savetoDB(data);
    this.appService.sendEmail(data.payload.email);
    return response.sendStatus(200);
  }
}
