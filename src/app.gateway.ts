import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway(3080)
export class AppGateway {
  @WebSocketServer()
  server: Server;

  async updateEmailSentStatus(email: string, status: string) {
    const result = this.server.sockets.emit('email_sent_status', {
      email,
      status,
    });
    console.log('email_sent_status emmited:', result);
  }
}
