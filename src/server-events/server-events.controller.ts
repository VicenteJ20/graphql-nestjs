import { Controller, Sse } from '@nestjs/common';
import { interval, map, Observable } from 'rxjs';

@Controller('server-events')
export class ServerEventsController {

  private ids: string[] = [
    'id1', 'id2', 'id3', 'id4', 'id5', 
    'id6', 'id7', 'id8', 'id9', 'id10'
  ];


  @Sse('sse')
  sse(): Observable<MessageEvent> {
    
    return interval(2000).pipe(
      map((_) => {
        const randomId = this.ids[Math.floor(Math.random() * this.ids.length)];
        const randomEstado = Math.random() < 0.5;
        return { data: { 
          estado: randomEstado,
          id: randomId
        } } as MessageEvent;
      }),
    );
  }
}
