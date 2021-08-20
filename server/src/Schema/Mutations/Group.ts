import { GraphQLID, GraphQLString } from 'graphql'

import { GroupType } from '../TypeDefs/Group'
import { MessageType } from '../TypeDefs/Messages'
import { Groups } from '../../Entities/Groups'

export const CREATE_GROUP = {
  type: GroupType,
  args: {
    name: { type: GraphQLString },
    userid: { type: GraphQLString }
  },
  async resolve(parent: any, args: any) {
    const { name, userid } = args
    let newGroup = await Groups.insert({ name, userid })
    let id = newGroup.generatedMaps[0].id
    return { id, name, userid }
  }
}

export const DELETE_GROUP = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const id = args.id;
    await Groups.delete(id);

    return { successful: true, message: 'DELETETION SUCCESSFUL', id };
  },
};
