'use client'

import React, { useEffect, useState } from 'react'

export default function HistoryPage() {
    const [history, setHistory] = useState([])

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const res = await fetch('/api/history')
                const data = await res.json()
                setHistory(data.history)
            } catch (error) {
                console.error('Error fetching history:', error)
            }
        }
        fetchHistory()
    }, [])

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">Analysis History</h1>
            <ul className="mt-4">
                {history.map((item: any, index: number) => (
                    <li key={index} className="border-b py-2">
                        <p>
                            <strong>Image:</strong> {item.imageUrl}
                        </p>
                        <p>
                            <strong>Result:</strong> {item.result}
                        </p>
                        <p>
                            <strong>Uploaded At:</strong> {item.uploadedAt}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
