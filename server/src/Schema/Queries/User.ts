import { GraphQLString } from 'graphql'

import { UserType } from '../TypeDefs/User'
import { Users } from '../../Entities/Users'

export const GET_USER = {
  type: UserType,
  args: {
    userid: { type: GraphQLString }
  },
  resolve(parent: any, args: any) {
    const { userid } = args
    return Users.findOne({ userid: userid });
  }
}