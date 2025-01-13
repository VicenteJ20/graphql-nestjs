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
    b: number
  }) {
    const { a, b } = input;
    return a + b;
  }
}