'use client'

import React, { useState } from 'react'

export default function UploadPage() {
    const [image, setImage] = useState<File | null>(null)
    const [result, setResult] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    const handleUpload = async () => {
        if (!image) return alert('Please select an image')
        setLoading(true)

        const formData = new FormData()
        formData.append('image', image)

        try {
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            })
            const data = await res.json()
            setResult(data.result)
        } catch (error) {
            console.error('Error uploading image:', error)
            alert('Failed to analyze the image')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">Upload and Analyze an Image</h1>
            <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files?.[0] || null)}
                className="my-4"
            />
            <button
                onClick={handleUpload}
                className="bg-blue-500 text-white px-4 py-2 rounded"
                disabled={loading}
            >
                {loading ? 'Uploading...' : 'Analyze'}
            </button>
            {result && (
                <div className="mt-4">
                    <h2 className="text-xl font-semibold">Analysis Result:</h2>
                    <p>{result}</p>
                </div>
            )}
        </div>
    )
}
