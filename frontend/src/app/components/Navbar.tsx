import React from 'react'

const Navbar: React.FC = () => {
    return (
        <nav className="mt-4">
            <ul className="flex space-x-4">
                <li>
                    <a href="#" className="text-white hover:text-gray-400">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" className="text-white hover:text-gray-400">
                        About
                    </a>
                </li>
                <li>
                    <a href="#" className="text-white hover:text-gray-400">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
