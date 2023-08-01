import { Injectable } from '@nestjs/common';
import { MailService } from './utils/mail.service';
import { DBService } from './utils/db.service';
import { WebhookData } from './utils/type';

@Injectable()
export class AppService {
  constructor(
    private readonly mailService: MailService,
    private readonly dbService: DBService,
  ) {}

  async savetoDB(data: WebhookData) {
    try {
      return this.dbService.saveObjectToCollection(data);
    } catch (e) {
      console.error('Error saving to DB:', e.message);
    }
  }

  async sendEmail(email: string) {
    try {
      return this.mailService.sendForRegistrationReceived(email);
    } catch (e) {
      console.error('Error sending email:', e.message);
    }
  }
}
