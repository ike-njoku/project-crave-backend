import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';

@WebSocketGateway({
  cors: ['http://localhost:4201/']
})
export class EnrolmentGatewayGateway {

  @WebSocketServer()
  server;

  @SubscribeMessage('newEnrolment')
  handleMessage(@MessageBody() message: any, payload: any): any {
    let emitMessage = this.server.emit('newEnrolment', payload);
    if (emitMessage) {
      console.log('emitted message');
      console.table({
        'message': message,
        payload: payload
      })
      console.log(payload);
    }
  }
}
