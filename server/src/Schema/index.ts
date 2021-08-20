import { GraphQLObjectType, GraphQLSchema } from "graphql"

import { GET_USER } from "./Queries/User"
import { GET_GROUPS } from './Queries/Group'
import { GET_PROJECTS, GET_PROJECT } from './Queries/Project'
import { GET_PROJECT_TASKS, GET_TASK, GET_TASKS } from './Queries/Task'
import { CREATE_USER, UPDATE_NAME } from './Mutations/User'
import { CREATE_GROUP, DELETE_GROUP } from './Mutations/Group'
import { CREATE_PROJECT, DELETE_PROJECT } from "./Mutations/Project"
import { CREATE_TASK, DELETE_TASK, UPDATE_TASK } from './Mutations/Task'

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    getUser: GET_USER,
    getGroups: GET_GROUPS,
    getProjects: GET_PROJECTS,
    getProject: GET_PROJECT,
    getTasks: GET_TASKS,
    getTask: GET_TASK,
    getProjectTasks: GET_PROJECT_TASKS
  }
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser: CREATE_USER,
    updateName: UPDATE_NAME,
    createGroup: CREATE_GROUP,
    deleteGroup: DELETE_GROUP,
    createProject: CREATE_PROJECT,
    deleteProject: DELETE_PROJECT,
    createTask: CREATE_TASK,
    deleteTask: DELETE_TASK,
    updateTask: UPDATE_TASK
  }
})

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})