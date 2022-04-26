import got from 'got'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  const response = await got('https://api.github.com/repos/mckernanin/next-prisma-esm', {
    headers: {
      Accept: 'application/vnd.github.v3+json'
    }
  }).json();
  res.json(response)
}
