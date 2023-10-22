
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '@/db/database'
import { ulid } from 'ulidx'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    if (req.method === 'POST') {

        const { username, name, password } = req.body;

        const response = await db.insertInto('User').values({
            uniqueId: ulid(),
            username,
            name,
            password
        }).returning(['uniqueId']).executeTakeFirst();


        res.status(200).json({ uniqueId: response?.uniqueId })
    }

    res.status(200).json({ message: "Method not supported!, edit the API Handler" })
}
