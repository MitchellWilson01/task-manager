import express from 'express'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql'
import { createConnection } from 'typeorm'

import { schema } from './Schema'
import { Users } from './Entities/Users'
import { Groups } from './Entities/Groups'
import { Projects } from './Entities/Projects'
import { Tasks } from './Entities/Tasks'

const main = async () => {
  await createConnection({
    type: 'mysql',
    database: 'quark',
    username: 'root',
    password: 'rootpassword',
    logging: true,
    synchronize: false,
    entities: [Users, Groups, Projects, Tasks]
  }) 

  const app = express()

  app.use(cors())
  app.use(express.json())
  app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
  }))

  app.listen(3001, () => {
    console.log('Server running on 3001')
  })
} 

main().catch(error => console.log(error))