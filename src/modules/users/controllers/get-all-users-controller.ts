import { FastifyReply, FastifyRequest } from 'fastify'
import { getAllUsers } from '../useCases/get-all-users'

export async function getAllUsersController(request: FastifyRequest, reply: FastifyReply) {
  const users = await getAllUsers()

  return reply.status(200).send(users)
}
