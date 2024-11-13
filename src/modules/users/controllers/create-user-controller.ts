import { FastifyReply, FastifyRequest } from 'fastify'
import { createUserDto } from '../dto/create-user-dto'
import { createUser } from '../useCases/create-user'

export async function createUserController(request: FastifyRequest, reply: FastifyReply) {
  const { body } = request

  const userData = createUserDto(body)

  const userId = await createUser(userData)

  return reply.status(201).send({ userId })
}
