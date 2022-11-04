import Fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'

import { poolRoutes } from './routes/pool'
import { userRoutes } from './routes/user'
import { guessRoutes } from './routes/guess'
import { authRoutes } from './routes/auth'
import { gameRoutes } from './routes/game'

async function bootstrap() {
  const fastify = Fastify({
    logger: true
  })

  await fastify.register(cors, {
    origin: true
  })

  // Em produção esse valor precisa estar em uma variavel ambiente

  await fastify.register(jwt, {
    secret: '5de283e8b48f3f0d2a91f4ac4014f82e'
  })

  await fastify.register(poolRoutes)
  await fastify.register(userRoutes)
  await fastify.register(guessRoutes)
  await fastify.register(authRoutes)
  await fastify.register(gameRoutes)

  await fastify.listen({ port: 3333, host: '0.0.0.0' })
}

bootstrap()