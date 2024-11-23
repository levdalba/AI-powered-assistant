'use client'

import React from 'react'
import { Canvas } from '@react-three/fiber'

const TouchBackground = () => {
    return (
        <Canvas>
            <ambientLight />
            <mesh>
                <boxBufferGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="hotpink" />
            </mesh>
        </Canvas>
    )
}

export default TouchBackground
