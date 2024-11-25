'use client'

import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

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
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
