import { Module } from '@nestjs/common';
import { ServerEventsController } from './server-events.controller';
import { ServerEventsService } from './server-events.service';

@Module({
  controllers: [ServerEventsController],
  providers: [ServerEventsService]
})
export class ServerEventsModule {}
