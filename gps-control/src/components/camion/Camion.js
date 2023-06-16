import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import modelo from '../../assets/camion23D.glb';

export default function ModelViewer() {
  const containerRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    const light = new THREE.AmbientLight(0xffffff);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    const controls = new OrbitControls(camera, renderer.domElement);
    const loader = new GLTFLoader();

    directionalLight.position.set(1, 1, 1);
    controls.enableRotate = true;
    controls.enableZoom = false;
    controls.enablePan = false;
    renderer.setSize(window.innerWidth / 3, window.innerHeight/3);
    containerRef.current.appendChild(renderer.domElement);
    camera.position.set(100, 0, 270);
    scene.background = null;
    scene.add(light);
    scene.add(directionalLight);

    loader.load(modelo, (gltf) => {
      scene.add(gltf.scene);
    }, undefined, (error) => {
      console.error(error);
    });
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      controls.update();
    };
    animate();
  }, []);

  return <div ref={containerRef}></div>;
}
