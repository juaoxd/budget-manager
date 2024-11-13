import { FastifyInstance, FastifyPluginOptions } from 'fastify'
import { createUserController } from '../controllers/create-user-controller'

export const userRoutes = (fastify: FastifyInstance, options: FastifyPluginOptions, done: () => void) => {
  fastify.post('/register', createUserController)
  done()
}
