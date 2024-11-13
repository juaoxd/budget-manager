import { prisma } from '../../../lib/prisma'
import { hash } from 'bcrypt'

export async function createUser(userData: { name?: string; email: string; password: string }) {
  const userExists = await prisma.user.findUnique({
    where: {
      email: userData.email,
    },
  })

  if (userExists) {
    throw new Error('Email already in use')
  }

  const hashedPassword = await hash(userData.password, 10)

  const newUser = await prisma.user.create({
    data: {
      email: userData.email,
      password_hash: hashedPassword,
      name: userData.name,
    },
  })

  if (!newUser) {
    throw new Error('Failed to create user')
  }

  return newUser.id
}
