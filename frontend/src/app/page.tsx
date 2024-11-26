'use client'

import React, { useState } from 'react'

export default function UploadPage() {
    const [image, setImage] = useState<File | null>(null)
    const [imagePreview, setImagePreview] = useState<string | null>(null)
    const [result, setResult] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null
        setImage(file)
        if (file) {
            setImagePreview(URL.createObjectURL(file)) // Generate a preview URL
        } else {
            setImagePreview(null)
        }
    }

    const handleUpload = async () => {
        if (!image) {
            alert('Please select an image')
            return
        }

        setLoading(true)
        setError(null)

        const formData = new FormData()
        formData.append('image', image)

        try {
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            })

            if (!res.ok) {
                throw new Error('Failed to upload or analyze the image')
            }

            const data = await res.json()
            setResult(data.result)
        } catch (err) {
            console.error('Error:', err)
            setError('Failed to analyze the image. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">
                Upload and Analyze an Image
            </h1>

            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="block my-4"
            />

            {imagePreview && (
                <div className="my-4">
                    <p className="font-semibold">Preview:</p>
                    <img
                        src={imagePreview}
                        alt="Preview"
                        className="max-w-sm rounded"
                    />
                </div>
            )}

            <button
                onClick={handleUpload}
                className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
                disabled={loading}
            >
                {loading ? 'Analyzing...' : 'Analyze'}
            </button>

            {error && (
                <div className="text-red-500 mt-4">
                    <p>{error}</p>
                </div>
            )}

            {result && (
                <div className="mt-4 p-4 bg-gray-100 rounded shadow">
                    <h2 className="text-xl font-semibold mb-2">
                        Analysis Result:
                    </h2>
                    <p>{result}</p>
                </div>
            )}
        </div>
    )
}
