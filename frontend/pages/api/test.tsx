import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const response = await fetch('http://127.0.0.1:5000')
    const data = await response.text()
    res.status(200).json({ message: data })
}
