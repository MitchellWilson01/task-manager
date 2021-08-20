import { GraphQLID, GraphQLList, GraphQLString } from 'graphql'

import { ProjectType } from '../TypeDefs/Project'
import { Projects } from '../../Entities/Projects'

export const GET_PROJECTS = {
  type: new GraphQLList(ProjectType),
  args: {
    userid: { type: GraphQLString }
  },
  resolve(parent: any, args: any) {
    const { userid } = args
    return Projects.find({ userid: userid });
  }
}

export const GET_PROJECT = {
  type: ProjectType,
  args: {
    id: { type: GraphQLID }
  },
  resolve(parent: any, args: any) {
    const { id } = args
    return Projects.findOne({ id: id });
  }
}