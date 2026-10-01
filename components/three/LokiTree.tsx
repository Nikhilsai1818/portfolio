"use client";
import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function LokiTree() {
  const groupRef = useRef<THREE.Group>(null!);
  const particlesRef = useRef<THREE.InstancedMesh>(null!);
  const prefersReduced = useReducedMotion();

  // Generate curves for the tree
  const branches = useMemo(() => {
    const lines = [];
    const numTrunks = 16;
    const numBranchesPerTrunk = 3;
    
    for (let i = 0; i < numTrunks; i++) {
      const angleOffset = (i / numTrunks) * Math.PI * 2;
      for (let j = 0; j < numBranchesPerTrunk; j++) {
        const points = [];
        const height = 10;
        const segments = 40;
        
        let currentPos = new THREE.Vector3(
          Math.cos(angleOffset) * 0.3,
          -height / 2,
          Math.sin(angleOffset) * 0.3
        );
        
        points.push(currentPos.clone());
        
        const branchOutHeight = height * 0.3 + (Math.random() * height * 0.3);
        const randomBranchAngle = Math.random() * Math.PI * 2;
        const branchSpread = 2 + Math.random() * 3;

        for (let k = 1; k <= segments; k++) {
          const t = k / segments; // 0 to 1
          const y = -height / 2 + t * height;
          
          // Twist
          const twist = angleOffset + t * Math.PI * 6;
          let radius = 0.3 + t * 0.2; // Base trunk radius
          
          if (y > branchOutHeight) {
             // Branch out
             const branchT = (y - branchOutHeight) / (height - branchOutHeight);
             radius += branchT * branchSpread;
          }
          
          const x = Math.cos(twist + (y > branchOutHeight ? randomBranchAngle : 0)) * radius;
          const z = Math.sin(twist + (y > branchOutHeight ? randomBranchAngle : 0)) * radius;
          
          // Add some noise
          const noiseX = (Math.random() - 0.5) * 0.4;
          const noiseZ = (Math.random() - 0.5) * 0.4;
          
          points.push(new THREE.Vector3(x + noiseX, y, z + noiseZ));
        }
        lines.push(points);
      }
    }
    return lines;
  }, []);

  // Generate particles for magic dust
  const particleCount = 300;
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particleData = useMemo(() => {
    return Array.from({ length: particleCount }, () => ({
      pos: new THREE.Vector3(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 12
      ),
      speed: 0.01 + Math.random() * 0.02,
      phase: Math.random() * Math.PI * 2,
    }));
  }, [particleCount]);

  useFrame(({ clock }) => {
    if (groupRef.current && !prefersReduced) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.05;
      groupRef.current.position.y = -1 + Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
    }
    
    if (particlesRef.current && !prefersReduced) {
      const time = clock.getElapsedTime();
      particleData.forEach((data, i) => {
        data.pos.y += data.speed;
        if (data.pos.y > 6) data.pos.y = -6;
        
        const x = data.pos.x + Math.sin(time + data.phase) * 0.1;
        const z = data.pos.z + Math.cos(time + data.phase) * 0.1;
        
        dummy.position.set(x, data.pos.y, z);
        dummy.scale.setScalar(0.5 + Math.sin(time * 2 + data.phase) * 0.5);
        dummy.updateMatrix();
        particlesRef.current.setMatrixAt(i, dummy.matrix);
      });
      particlesRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1, 0]}>
      {branches.map((points, i) => (
        <Line
          key={i}
          points={points}
          color={i % 3 === 0 ? "#c9a84c" : (i % 2 === 0 ? "#3db554" : "#1e4d24")}
          lineWidth={Math.random() * 1.5 + 0.5}
          transparent
          opacity={0.4 + Math.random() * 0.5}
        />
      ))}
      
      <instancedMesh ref={particlesRef} args={[undefined, undefined, particleCount]}>
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshStandardMaterial
          color="#c9a84c"
          emissive="#3db554"
          emissiveIntensity={4}
          transparent
          opacity={0.8}
        />
      </instancedMesh>
    </group>
  );
}
