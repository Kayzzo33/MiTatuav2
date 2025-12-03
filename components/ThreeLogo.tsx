import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';
import { COLORS } from '../constants';

const LogoMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} scale={1.8}>
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
        <MeshDistortMaterial 
          color={COLORS.accent} 
          envMapIntensity={1} 
          clearcoat={1} 
          clearcoatRoughness={0} 
          metalness={0.9} 
          roughness={0.1}
          distort={0.4}
          speed={2}
          wireframe={true} // Tattoos are lines, wireframe fits perfectly
        />
      </mesh>
    </Float>
  );
};

const ThreeLogo: React.FC = () => {
  return (
    <div className="w-full h-full absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color={COLORS.accent} />
        <spotLight position={[-10, -10, -10]} angle={0.3} penumbra={1} intensity={1} color="blue" />
        <LogoMesh />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default ThreeLogo;