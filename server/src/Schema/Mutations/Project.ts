import { GraphQLID, GraphQLString } from 'graphql'

import { ProjectType } from '../TypeDefs/Project'
import { MessageType } from '../TypeDefs/Messages'
import { Projects } from '../../Entities/Projects'

export const CREATE_PROJECT = {
  type: ProjectType,
  args: {
    name: { type: GraphQLString },
    userid: { type: GraphQLString }
  },
  async resolve(parent: any, args: any) {
    const { name, userid } = args
    let newProject = await Projects.insert({ name, userid })
    let id = newProject.generatedMaps[0].id
    return { id, name, userid }
  }
}

export const DELETE_PROJECT = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const id = args.id;
    await Projects.delete(id);

    return { successful: true, message: 'DELETETION SUCCESSFUL', id };
  },
};