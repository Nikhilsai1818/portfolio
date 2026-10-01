"use client";
import React, { useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function generateLightning(start: THREE.Vector3, end: THREE.Vector3, segments: number, offset: number): THREE.Vector3[] {
  let points = [start, end];
  for (let i = 0; i < segments; i++) {
    const newPoints = [];
    for (let j = 0; j < points.length - 1; j++) {
      const p1 = points[j];
      const p2 = points[j + 1];
      const mid = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
      // Displace mid
      const displacement = new THREE.Vector3(
        (Math.random() - 0.5) * offset,
        (Math.random() - 0.5) * offset,
        (Math.random() - 0.5) * offset
      );
      mid.add(displacement);
      newPoints.push(p1, mid);
    }
    newPoints.push(points[points.length - 1]);
    points = newPoints;
    offset *= 0.55; // Reduce offset for finer details
  }
  return points;
}

export default function ThorLightning() {
  const groupRef = useRef<THREE.Group>(null!);
  const prefersReduced = useReducedMotion();
  
  // Create multiple bolts
  const bolts = useMemo(() => {
    const allBolts = [];
    for (let i = 0; i < 8; i++) {
      const start = new THREE.Vector3((Math.random() - 0.5) * 15, 10, (Math.random() - 0.5) * 5 - 2);
      const end = new THREE.Vector3((Math.random() - 0.5) * 15, -10, (Math.random() - 0.5) * 5 - 2);
      const mainPath = generateLightning(start, end, 5, 4);
      allBolts.push({ points: mainPath, type: 'main' });
      
      // Add branches
      for (let b = 0; b < 4; b++) {
        const branchStartIdx = Math.floor(Math.random() * (mainPath.length - 1));
        const branchStart = mainPath[branchStartIdx];
        const branchEnd = new THREE.Vector3(
           branchStart.x + (Math.random() - 0.5) * 6,
           branchStart.y - Math.random() * 6 - 2,
           branchStart.z + (Math.random() - 0.5) * 6
        );
        allBolts.push({ points: generateLightning(branchStart, branchEnd, 4, 2), type: 'branch' });
      }
    }
    return allBolts;
  }, []);

  const [activeBoltIdx, setActiveBoltIdx] = useState(0);

  useFrame(({ clock }) => {
    if (prefersReduced) return;
    const time = clock.getElapsedTime();
    // Slow down flashing: Strike every 2 seconds, lasting for a brief moment with a flicker
    const cycle = time % 2.0;
    if (cycle < 0.3) {
      // Flicker effect during the active window
      if (Math.floor(time * 20) % 2 === 0) {
        // Keep the same bolt active for the duration of this strike
        setActiveBoltIdx(Math.floor(time / 2.0) % 8);
      } else {
        setActiveBoltIdx(-1);
      }
    } else {
      setActiveBoltIdx(-1);
    }
  });

  return (
    <group ref={groupRef}>
      {bolts.map((bolt, i) => {
        // Find which main bolt this belongs to (1 main + 4 branches = 5)
        const mainBolt = Math.floor(i / 5); 
        const isActive = mainBolt === activeBoltIdx || prefersReduced;
        
        return (
          <Line
            key={i}
            points={bolt.points}
            color={Math.random() > 0.5 ? "#0022ff" : "#0000aa"}
            lineWidth={bolt.type === 'main' ? (isActive ? 5 : 1.5) : (isActive ? 2.5 : 0.8)}
            transparent
            opacity={isActive ? (0.8 + Math.random() * 0.2) : 0}
          />
        );
      })}
    </group>
  );
}
