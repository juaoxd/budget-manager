import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { getUser } from '../useCases/get-user'

const paramsSchema = z.object({
  userId: z.string(),
})

export async function getUserController(request: FastifyRequest, reply: FastifyReply) {
  const { params } = request

  const { userId } = paramsSchema.parse(params)

  const user = await getUser(userId)

  return reply.status(200).send({ user })
}
