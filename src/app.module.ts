import { ConfigModule } from '@nestjs/config';
const envModule = ConfigModule.forRoot({
  isGlobal: true,
});
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppGateway } from './app.gateway';
import { AppService } from './app.service';
import { MailService } from './utils/mail.service';
import { DBService } from './utils/db.service';

@Module({
  imports: [envModule, HttpModule],
  controllers: [AppController],
  providers: [AppGateway, AppService, MailService, DBService],
})
export class AppModule {}
