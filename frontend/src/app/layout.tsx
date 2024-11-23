'use client'

import React from 'react'
import ClientWrapper from './components/ClientWrapper'
import TouchBackground from './components/TouchBackground'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body
                style={{ margin: 0, overflow: 'hidden', position: 'relative' }}
            >
                <ClientWrapper>
                    <TouchBackground />
                </ClientWrapper>
                <div style={{ position: 'relative', zIndex: 1 }}>
                    {children}
                </div>
            </body>
        </html>
    )
}
