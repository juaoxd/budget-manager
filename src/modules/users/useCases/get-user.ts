import { prisma } from '../../../lib/prisma'

export async function getUser(userId: string) {
  const user = await prisma.user.findUnique({
    select: {
      id: true,
      name: true,
      email: true,
      created_at: true,
    },
    where: {
      id: userId,
    },
  })

  if (!user) {
    throw new Error('User not found')
  }

  return user
}
