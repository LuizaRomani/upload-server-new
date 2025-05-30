import { exportUploads } from '@/app/functions/export-uploads'
import { unwrapEither } from '@/shared/either'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'

export const exportUploadsRoute: FastifyPluginAsyncZod = async server => {
  server.post(
    '/uploads/export',
    {
      schema: {
        summary: 'Export Uploads',
        tag: ['Uploads'],

        querystring: z.object({
          searchQuery: z.string().optional(),
        }),

        response: {
          200: z.object({
            reportUrl: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { searchQuery } = request.query

      const result = await exportUploads({
        searchQuery,
      })

      const { reportUrl } = unwrapEither(result)
      return reply.status(201).send({ reportUrl })
    }
  )
}
