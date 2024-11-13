import { fastify } from 'fastify'

import { userRoutes } from '../modules/users/routes/user-route'

const server = fastify({ logger: true })

server.register(userRoutes, { prefix: '/api/users' })

server.get('/', (req, res) => {
  return 'hello world'
})

server.listen({ port: Number(process.env.PORT) || 3000, host: '0.0.0.0' }, (err) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server running on http://localhost:${process.env.PORT || 3000}`)
})
