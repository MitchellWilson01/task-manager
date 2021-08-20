import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean } from 'graphql'

export const TaskType = new GraphQLObjectType({
  name: 'Task',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    userid: { type: GraphQLString },
    group: { type: GraphQLString },
    date: { type: GraphQLString },
    time: { type: GraphQLString },
    project: { type: GraphQLString },
    in_progress: { type: GraphQLBoolean },
    completed: { type: GraphQLBoolean },
    notes: { type: GraphQLString }
  })
})