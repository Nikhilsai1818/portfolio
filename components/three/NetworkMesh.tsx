"use client";
import React, { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useTheme } from "@/contexts/ThemeContext";

interface Node {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
}

function fibonacciSphere(count: number, radius: number): THREE.Vector3[] {
  const points: THREE.Vector3[] = [];
  const goldenRatio = (1 + Math.sqrt(5)) / 2;
  for (let i = 0; i < count; i++) {
    const theta = Math.acos(1 - (2 * (i + 0.5)) / count);
    const phi = (2 * Math.PI * i) / goldenRatio;
    points.push(
      new THREE.Vector3(
        radius * Math.sin(theta) * Math.cos(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(theta)
      )
    );
  }
  return points;
}

function buildEdges(positions: THREE.Vector3[], maxDist: number): [number, number][] {
  const edges: [number, number][] = [];
  for (let i = 0; i < positions.length; i++) {
    for (let j = i + 1; j < positions.length; j++) {
      if (positions[i].distanceTo(positions[j]) < maxDist) {
        edges.push([i, j]);
      }
    }
  }
  return edges;
}

interface PacketState {
  edgeIndex: number;
  t: number;
  speed: number;
}

export default function NetworkMesh({ nodeCount = 42, radius = 2.8 }: { nodeCount?: number; radius?: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const groupRef = useRef<THREE.Group>(null!);
  const prefersReduced = useReducedMotion();
  const { variant } = useTheme();
  
  const isThor = variant === "thor";

  const positions = useMemo(() => fibonacciSphere(nodeCount, radius), [nodeCount, radius]);
  const edges = useMemo(() => buildEdges(positions, radius * 0.59), [positions, radius]);

  // Packet state
  const packets = useRef<PacketState[]>(
    Array.from({ length: prefersReduced ? 0 : 18 }, (_, i) => ({
      edgeIndex: Math.floor(Math.random() * Math.max(edges.length, 1)),
      t: Math.random(),
      speed: 0.003 + Math.random() * 0.004,
    }))
  );

  const packetMeshRef = useRef<THREE.InstancedMesh>(null!);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const tmpVec = useMemo(() => new THREE.Vector3(), []);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    if (!prefersReduced) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.04;
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.02) * 0.1;
    }

    // Update node instances (slight breathing scale)
    if (meshRef.current) {
      for (let i = 0; i < positions.length; i++) {
        dummy.position.copy(positions[i]);
        const scale = 1 + 0.12 * Math.sin(clock.getElapsedTime() * 0.8 + i * 1.2);
        dummy.scale.setScalar(scale);
        dummy.updateMatrix();
        meshRef.current.setMatrixAt(i, dummy.matrix);
      }
      meshRef.current.instanceMatrix.needsUpdate = true;
    }

    // Update packet positions
    if (packetMeshRef.current && edges.length > 0) {
      const pkts = packets.current;
      for (let i = 0; i < pkts.length; i++) {
        const pkt = pkts[i];
        pkt.t += pkt.speed;
        if (pkt.t > 1) {
          pkt.t = 0;
          pkt.edgeIndex = Math.floor(Math.random() * edges.length);
        }
        const [a, b] = edges[pkt.edgeIndex];
        tmpVec.lerpVectors(positions[a], positions[b], pkt.t);
        dummy.position.copy(tmpVec);
        dummy.scale.setScalar(0.06);
        dummy.updateMatrix();
        packetMeshRef.current.setMatrixAt(i, dummy.matrix);
      }
      packetMeshRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Nodes */}
      <instancedMesh
        ref={meshRef}
        args={[undefined, undefined, positions.length]}
        frustumCulled={false}
      >
        <sphereGeometry args={[0.055, 10, 10]} />
        <meshStandardMaterial
          color={isThor ? "#c5c6c7" : "#c9a84c"}
          emissive={isThor ? "#c5c6c7" : "#c9a84c"}
          emissiveIntensity={isThor ? 2.5 : 1.5}
          roughness={0.1}
          metalness={0.7}
        />
      </instancedMesh>

      {/* Edges */}
      {edges.map(([a, b], i) => (
        <Line
          key={i}
          points={[positions[a], positions[b]]}
          color={isThor ? "#00d2ff" : "#1a3a1a"}
          lineWidth={isThor ? 1.2 : 0.6}
          transparent
          opacity={isThor ? 0.75 : 0.55}
        />
      ))}

      {/* Data packets */}
      {packets.current.length > 0 && (
        <instancedMesh
          ref={packetMeshRef}
          args={[undefined, undefined, packets.current.length]}
          frustumCulled={false}
        >
          <sphereGeometry args={[1, 6, 6]} />
          <meshStandardMaterial
            color={isThor ? "#ffffff" : "#3db554"}
            emissive={isThor ? "#00d2ff" : "#3db554"}
            emissiveIntensity={isThor ? 4 : 3}
            transparent
            opacity={0.9}
          />
        </instancedMesh>
      )}
    </group>
  );
}
