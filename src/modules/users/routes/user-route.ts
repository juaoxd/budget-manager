import { FastifyInstance, FastifyPluginOptions } from 'fastify'
import { createUserController } from '../controllers/create-user-controller'
import { getAllUsersController } from '../controllers/get-all-users-controller'
import { getUserController } from '../controllers/get-user-controllers'

export const userRoutes = (fastify: FastifyInstance, options: FastifyPluginOptions, done: () => void) => {
  fastify.post('/register', createUserController)
  fastify.get('/', getAllUsersController)
  fastify.get('/:userId', getUserController)
  done()
}
