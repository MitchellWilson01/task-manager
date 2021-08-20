import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql'

export const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    userid: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString }
  })
})