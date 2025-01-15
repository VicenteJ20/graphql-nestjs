import { Test, TestingModule } from '@nestjs/testing';
import { ServerEventsService } from './server-events.service';

describe('ServerEventsService', () => {
  let service: ServerEventsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServerEventsService],
    }).compile();

    service = module.get<ServerEventsService>(ServerEventsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
