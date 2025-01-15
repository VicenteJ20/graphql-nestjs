import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { GraphQLResolver } from './graphql/resolvers/graphql.resolver';
import { EventsGateway } from './events/events.gateway'; // Importa el gateway
import { ServerEventsModule } from './server-events/server-events.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        //outputAs: 'class', // Esto es opcional y se puede ajustar según las necesidades del equipo de desarrollo o el proyecto asociado.
      }
    }),
    ServerEventsModule,
  ],
  controllers: [AppController],
  providers: [AppService, GraphQLResolver, EventsGateway], // Añade el gateway a los providers
})
export class AppModule {}
