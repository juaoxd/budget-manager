import { z } from 'zod'

const createUserDtoSchema = z.object({
  name: z.string().optional(),
  email: z.string().email(),
  password: z.string(),
})

export function createUserDto(user: unknown) {
  return createUserDtoSchema.parse(user)
}
