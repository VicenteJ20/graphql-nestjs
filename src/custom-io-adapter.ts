import { IoAdapter } from '@nestjs/platform-socket.io';
import { ServerOptions } from 'socket.io';

export class CustomIoAdapter extends IoAdapter {
  createIOServer(port: number, options?: ServerOptions): any {
    return super.createIOServer(port, {
      ...options,
      cors: {
        origin: '*', // Permitir acceso desde cualquier origen
        methods: ['GET', 'POST'], // Métodos permitidos
        credentials: true, // Permitir envío de cookies
      },
    });
  }
}
