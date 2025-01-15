import { Test, TestingModule } from '@nestjs/testing';
import { ServerEventsController } from './server-events.controller';

describe('ServerEventsController', () => {
  let controller: ServerEventsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServerEventsController],
    }).compile();

    controller = module.get<ServerEventsController>(ServerEventsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
