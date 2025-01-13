import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['./src/**/*.graphql'],
  path: join(process.cwd(), 'src/graphql.ts'),
  watch: true, // Configurado por defecto para que una vez ejecutemos este archivo quede en modo escucha a nuevos cambios en el schema de GraphQL.
});