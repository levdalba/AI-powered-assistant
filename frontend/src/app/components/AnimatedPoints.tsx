'use client'

import React, { useRef } from 'react'
import { Points, PointMaterial } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const AnimatedPoints = () => {
    const pointsRef = useRef<THREE.Points>(null)

    const particles = React.useMemo(() => {
        const points = Array.from({ length: 5000 }, () => [
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
        ]).flat()
        return new Float32Array(points)
    }, [])

    useFrame(({ mouse }) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.x = mouse.y * 0.2
            pointsRef.current.rotation.y = mouse.x * 0.2
        }
    })

    return (
        <Points
            ref={pointsRef}
            positions={particles as unknown as Float32Array}
            stride={3}
        >
            <PointMaterial
                transparent
                color="#00ffcc"
                size={0.05}
                sizeAttenuation
                depthWrite={false}
            />
        </Points>
    )
}

export default AnimatedPoints
