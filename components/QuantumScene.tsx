/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Line, Stars } from '@react-three/drei';
import * as THREE from 'three';

interface NetworkNodeProps {
  position: [number, number, number];
  color: string;
}

const NetworkNode: React.FC<NetworkNodeProps> = ({ position, color }) => {
  const ref = useRef<THREE.Mesh>(null);
  const scale = useMemo(() => Math.random() * 0.5 + 0.2, []);
  
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      // Gentle floating independent of group
      ref.current.position.y = position[1] + Math.sin(t + position[0]) * 0.1;
    }
  });

  return (
    <Sphere ref={ref} args={[1, 16, 16]} position={position} scale={scale}>
      <meshStandardMaterial 
        color={color} 
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

const Connections = ({ nodes, color }: { nodes: [number, number, number][], color: string }) => {
    // Create lines between close nodes
    const lines = useMemo(() => {
        const l: [THREE.Vector3, THREE.Vector3][] = [];
        for(let i=0; i<nodes.length; i++) {
            for(let j=i+1; j<nodes.length; j++) {
                const dist = new THREE.Vector3(...nodes[i]).distanceTo(new THREE.Vector3(...nodes[j]));
                if(dist < 4.5) {
                    l.push([new THREE.Vector3(...nodes[i]), new THREE.Vector3(...nodes[j])]);
                }
            }
        }
        return l;
    }, [nodes]);

    return (
        <group>
            {lines.map((line, i) => (
                 <Line
                    key={i}
                    points={line}
                    color={color}
                    transparent
                    opacity={0.2}
                    lineWidth={1}
                 />
            ))}
        </group>
    )
}

const NetworkGroup = () => {
    const groupRef = useRef<THREE.Group>(null);
    
    // Generate random nodes
    const nodes = useMemo(() => {
        const n: [number, number, number][] = [];
        for(let i=0; i<20; i++) {
            n.push([
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 6,
                (Math.random() - 0.5) * 6
            ]);
        }
        return n;
    }, []);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
        }
    });

    return (
        <group ref={groupRef}>
            {nodes.map((pos, i) => (
                <NetworkNode key={i} position={pos} color={i % 2 === 0 ? "#D0BCFF" : "#6750A4"} />
            ))}
            <Connections nodes={nodes} color="#D0BCFF" />
        </group>
    );
}

export const NetworkScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60 dark:opacity-40">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#EADDFF" />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#4F378B" />
        
        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
           <NetworkGroup />
        </Float>
        
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={0.5} />
        <fog attach="fog" args={['#1C1B1F', 5, 20]} /> 
      </Canvas>
    </div>
  );
};

// Export empty component to satisfy any old imports if needed, though App.tsx is updated.
export const HeroScene = NetworkScene;
export const QuantumComputerScene = NetworkScene;