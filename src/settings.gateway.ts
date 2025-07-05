import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: ['http://localhost:4200', 'https://d-web-care.onrender.com'],
    credentials: true,
  },
})
export class SettingsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  handleConnection(client: any) {
    console.log(`🔌 Client verbunden: ${client.id}`);
  }

  handleDisconnect(client: any) {
    console.log(`❌ Client getrennt: ${client.id}`);
  }

  broadcastSettingsUpdate() {
    this.server.emit('settings-updated');
  }
}
