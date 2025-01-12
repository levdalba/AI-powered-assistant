import React from 'react'
import Navbar from './Navbar'

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold">My Website</h1>
                <Navbar />
            </div>
        </header>
    )
}

export default Header
