import { NextResponse } from 'next/server'
import { fetchHistoryFromDatabase } from '@/utils/database'

export async function GET() {
    try {
        const history = await fetchHistoryFromDatabase()
        return NextResponse.json({ history })
    } catch (error) {
        console.error('Error fetching history:', error)
        return NextResponse.json(
            { error: 'Failed to fetch history' },
            { status: 500 }
        )
    }
}
