import { GraphQLList, GraphQLString } from 'graphql'

import { GroupType } from '../TypeDefs/Group'
import { Groups } from '../../Entities/Groups'

export const GET_GROUPS = {
  type: new GraphQLList(GroupType),
  args: {
    userid: { type: GraphQLString }
  },
  resolve(parent: any, args: any) {
    const { userid } = args
    return Groups.find({ userid: userid });
  }
}