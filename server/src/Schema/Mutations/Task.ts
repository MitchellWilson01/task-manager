import { GraphQLID, GraphQLString, GraphQLBoolean } from 'graphql'

import { TaskType } from '../TypeDefs/Task'
import { MessageType } from '../TypeDefs/Messages'
import { Tasks } from '../../Entities/Tasks'

export const CREATE_TASK = {
  type: TaskType,
  args: {
    name: { type: GraphQLString },
    userid: { type: GraphQLString },
    group: { type: GraphQLString },
    date: { type: GraphQLString },
    time: { type: GraphQLString },
    project: { type: GraphQLString },
    in_progress: { type: GraphQLBoolean },
    completed: { type: GraphQLBoolean },
    notes: { type: GraphQLString }
  },
  async resolve(parent: any, args: any) {
    const { name, userid, group, date, time, project, in_progress, completed, notes } = args
    let newTask = await Tasks.insert({ name, userid, group, date, time, project, in_progress, completed, notes })
    let id = newTask.generatedMaps[0].id
    return { id, name, userid, group, date, time, project, in_progress, completed, notes }
  }
}

export const DELETE_TASK = {
  type: MessageType,
  args: {
    id: { type: GraphQLID }
  },
  async resolve(parent: any, args: any) {
    const id = args.id;
    await Tasks.delete(id);

    return { successful: true, message: 'DELETETION SUCCESSFUL', id }
  },
}

export const UPDATE_TASK = {
  type: TaskType,
  args: {
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
  },
  async resolve(parent: any, args: any) {
    const { id, name, userid, group, date, time, project, in_progress, completed, notes } = args
    await Tasks.update(id, {name, userid, group, date, time, project, in_progress, completed, notes})

    return { id, name, userid, group, date, time, project, in_progress, completed, notes }
  },
}

