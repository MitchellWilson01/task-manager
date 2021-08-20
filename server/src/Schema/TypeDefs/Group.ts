import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql'

export const GroupType = new GraphQLObjectType({
  name: 'Group',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    userid: { type: GraphQLString }
  })
})
