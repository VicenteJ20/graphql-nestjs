import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { Server, ServerOptions } from 'socket.io';

class CustomIoAdapter extends IoAdapter {
  createIOServer(port: number, options?: ServerOptions): Server {
    return super.createIOServer(port, {
      ...options,
      cors: {
        origin: '*', // Permitir acceso desde cualquier origen
        methods: ['GET', 'POST'], // Métodos permitidos
        credentials: true, // Permitir envío de cookies
      },
    }) as Server;
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*', // Permitir acceso desde cualquier origen
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
    credentials: true, // Permitir envío de cookies
  });

  app.useWebSocketAdapter(new CustomIoAdapter(app));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
