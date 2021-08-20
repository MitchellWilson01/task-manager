import { GraphQLString } from 'graphql'

import { UserType } from '../TypeDefs/User'
import { Users } from '../../Entities/Users'

export const CREATE_USER = {
  type: UserType,
  args: {
    userid: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString }
  },
  async resolve(parent: any, args: any) {
    const { userid, name, email } = args
    await Users.insert({ userid, name, email })
    return args
  }
}

export const UPDATE_NAME = {
  type: UserType,
  args: {
    userid: { type: GraphQLString },
    newName: { type: GraphQLString }
  },
  async resolve(parent: any, args: any) {
    const { userid, newName } = args
    const user = await Users.findOne({userid: userid})
    await Users.update({userid: userid}, {name: newName})
  }
}
