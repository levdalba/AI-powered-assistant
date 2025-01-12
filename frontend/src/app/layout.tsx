'use client'

import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Head from './head'

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
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
