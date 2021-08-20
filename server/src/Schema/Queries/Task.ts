import { GraphQLID, GraphQLList, GraphQLString } from 'graphql'

import { TaskType } from '../TypeDefs/Task'
import { Tasks } from '../../Entities/Tasks'

export const GET_TASKS = {
  type: new GraphQLList(TaskType),
  args: {
    userid: { type: GraphQLString }
  },
  resolve(parent: any, args: any) {
    const { userid } = args
    return Tasks.find({ userid: userid });
  }
}

export const GET_TASK = {
  type: TaskType,
  args: {
    id: { type: GraphQLID }
  },
  resolve(parent: any, args: any) {
    const { id } = args
    return Tasks.findOne({ id: id });
  }
}

export const GET_PROJECT_TASKS = {
  type: new GraphQLList(TaskType),
  args: {
    project: { type: GraphQLString }
  },
  resolve(parent: any, args: any) {
    const { project } = args
    return Tasks.find({ project: project });
  }
}