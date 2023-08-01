import { Injectable } from '@nestjs/common';
import { MailService } from './utils/mail.service';
import { DBService } from './utils/db.service';
import { WebhookData } from './utils/type';
import { AppGateway } from './app.gateway';

@Injectable()
export class AppService {
  constructor(
    private readonly mailService: MailService,
    private readonly dbService: DBService,
    private readonly appGateway: AppGateway,
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
      this.mailService
        .sendForRegistrationReceived(email)
        .then((isSent) => {
          if (isSent) {
            this.appGateway.updateEmailSentStatus(email, 'sent');
          } else {
            this.appGateway.updateEmailSentStatus(email, 'failed');
          }
        })
        .catch((error) => new Error(error));
    } catch (e) {
      console.error('Error sending email:', e.message);
    }
  }
}
