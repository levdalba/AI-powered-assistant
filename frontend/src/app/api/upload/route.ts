import { NextResponse } from 'next/server'
import { saveToDatabase } from '@/utils/database'

export async function POST(req: Request) {
    const formData = await req.formData()
    const image = formData.get('image') as Blob

    if (!image) {
        return NextResponse.json(
            { error: 'No image uploaded' },
            { status: 400 }
        )
    }

    try {
        // Simulate AI processing (replace with real AI logic)
        const aiResult = 'Sample AI analysis result for the uploaded image'

        // Save to database (replace `saveToDatabase` with real implementation)
        await saveToDatabase({
            imageUrl: 'image-placeholder-url',
            result: aiResult,
        })

        return NextResponse.json({ result: aiResult })
    } catch (error) {
        console.error('Error analyzing image:', error)
        return NextResponse.json(
            { error: 'Failed to analyze image' },
            { status: 500 }
        )
    }
}
