'use client'

export default function Home() {
    return (
        <div
            style={{
                position: 'relative',
                zIndex: 2,
                color: 'white',
                textAlign: 'center',
                paddingTop: '20vh',
            }}
        >
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>
                Welcome to AI-Powered Assistant
            </h1>
            <p style={{ fontSize: '1.5rem' }}>
                Unleash the power of AI with stunning visuals!
            </p>
        </div>
    )
}
