import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

@Resolver('GraphQL')
export class GraphQLResolver {
  @Query('hello')
  async hello() {
    return 'Hello World!';
  }

  @Mutation('add')
  async add(@Args('input') input: {
    a: number,
    b: number,
    c: number,
    cadena: string
  }) {
    const { a, b, c, cadena } = input;
    
    return a + b + c + cadena.length
  }

  @Mutation('delete')
  async delete(@Args('input') input: {
    a: number,
    b: number,
    c: number
  }) {
    const { a, b, c } = input;

    return a - b * c;
  }
}