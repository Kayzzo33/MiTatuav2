import React, { useRef, useEffect, ReactNode, ErrorInfo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { COLORS } from '../constants';

// 3D Head Model (Lee Perry Smith) - "O Rosto"
// Using a reliable CDN for the standard Three.js example model
const MODEL_URL = 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@master/examples/models/gltf/LeePerrySmith/LeePerrySmith.glb';

const HeadModel = () => {
    const { scene } = useGLTF(MODEL_URL);
    const meshRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (meshRef.current) {
            // Gentle floating rotation
            meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.2;
            meshRef.current.rotation.x = Math.cos(state.clock.getElapsedTime() * 0.2) * 0.05;
        }
    });

    // Apply artistic material to the model
    useEffect(() => {
        scene.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
                (child as THREE.Mesh).material = new THREE.MeshStandardMaterial({
                    color: "#1a1a1a", // Dark graphite look
                    roughness: 0.2,
                    metalness: 0.8,
                });
            }
        });
    }, [scene]);

    return <primitive object={scene} ref={meshRef} scale={0.5} position={[0, 0.5, 0]} />;
};

// Fallback component in case loading fails (network issues)
const FallbackShape = () => (
    <mesh>
        <torusKnotGeometry args={[1, 0.3, 100, 16]} />
        <meshStandardMaterial color="#222" roughness={0.2} metalness={0.8} />
    </mesh>
);

// Error Boundary to prevent crashes if model fails to load
interface ErrorBoundaryProps {
  children?: ReactNode;
  fallback: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ModelErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Three.js model error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
        return this.props.fallback;
    }
    return this.props.children;
  }
}

const ThreeLogo: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile screen width to disable heavy 3D rendering
    // This prevents memory crashes (White Screen) on iOS Safari
    const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Return null on mobile to save memory and prevent crashes
  if (isMobile) return null;

  return (
    <div className="w-full h-full absolute inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 35 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.5} penumbra={1} intensity={5} color={COLORS.accent} />
        <pointLight position={[-10, -5, -10]} intensity={2} color="#4a9eff" />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
             <React.Suspense fallback={<FallbackShape />}>
                <ModelErrorBoundary fallback={<FallbackShape />}>
                    <HeadModel />
                </ModelErrorBoundary>
             </React.Suspense>
        </Float>
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

// Removed global preload to prevent blocking execution on some environments
// useGLTF.preload(MODEL_URL);

export default ThreeLogo;