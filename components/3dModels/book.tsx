"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface Book3DModelProps {
  frontCover?: string;
  backCover?: string;
  spine?: string;
  pages?: number;
  width?: number;
  height?: number;
  depth?: number;
}

export default function Book3DModel({
  frontCover,
  backCover,
  spine,
  pages = 300,
  width = 1.5,
  height = 2,
  depth = 0.3,
}: Book3DModelProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const bookRef = useRef<THREE.Group | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [previousMousePosition, setPreviousMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [rotation, setRotation] = useState({ x: 0.2, y: 0.5 });
  const [zoom, setZoom] = useState(5);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    setIsLoading(true);

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      50,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    );
    camera.position.set(0, 0, zoom);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Renderer with transparent background
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true, // Enable transparency
    });
    renderer.setClearColor(0x000000, 0); // Transparent background
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight,
    );
    renderer.shadowMap.enabled = true;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.4);
    directionalLight2.position.set(-5, -5, -5);
    scene.add(directionalLight2);

    // Create book group
    const book = new THREE.Group();
    bookRef.current = book;

    // Texture loader
    const textureLoader = new THREE.TextureLoader();

    // Track loading progress
    const texturesToLoad: Promise<void>[] = [];

    // Book cover (front)
    const coverGeometry = new THREE.BoxGeometry(width, height, 0.05);

    let frontMaterial: THREE.MeshStandardMaterial;
    if (frontCover) {
      const loadPromise = new Promise<void>((resolve, reject) => {
        const frontTexture = textureLoader.load(
          frontCover,
          () => resolve(),
          undefined,
          () => reject()
        );
        frontMaterial = new THREE.MeshStandardMaterial({
          map: frontTexture,
          roughness: 0.7,
          metalness: 0.1,
        });
      });
      texturesToLoad.push(loadPromise);
    } else {
      frontMaterial = new THREE.MeshStandardMaterial({
        color: 0x8b4513,
        roughness: 0.7,
        metalness: 0.1,
      });
    }

    const coverFront = new THREE.Mesh(coverGeometry, frontMaterial!);
    coverFront.position.z = depth / 2;
    coverFront.castShadow = true;
    book.add(coverFront);

    // Book cover (back)
    let backMaterial: THREE.MeshStandardMaterial;
    if (backCover) {
      const loadPromise = new Promise<void>((resolve, reject) => {
        const backTexture = textureLoader.load(
          backCover,
          () => resolve(),
          undefined,
          () => reject()
        );
        backMaterial = new THREE.MeshStandardMaterial({
          map: backTexture,
          roughness: 0.7,
          metalness: 0.1,
        });
      });
      texturesToLoad.push(loadPromise);
    } else {
      backMaterial = new THREE.MeshStandardMaterial({
        color: 0x8b4513,
        roughness: 0.7,
        metalness: 0.1,
      });
    }

    const coverBack = new THREE.Mesh(coverGeometry, backMaterial!);
    coverBack.position.z = -depth / 2;
    coverBack.rotation.y = Math.PI;
    coverBack.castShadow = true;
    book.add(coverBack);

    // Book spine
    const spineGeometry = new THREE.BoxGeometry(0.05, height, depth);

    let spineMaterial: THREE.MeshStandardMaterial;
    if (spine) {
      const loadPromise = new Promise<void>((resolve, reject) => {
        const spineTexture = textureLoader.load(
          spine,
          () => resolve(),
          undefined,
          () => reject()
        );
        spineMaterial = new THREE.MeshStandardMaterial({
          map: spineTexture,
          roughness: 0.8,
        });
      });
      texturesToLoad.push(loadPromise);
    } else {
      spineMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.8,
      });
    }

    const spineLeft = new THREE.Mesh(spineGeometry, spineMaterial!);
    spineLeft.position.x = -width / 2;
    spineLeft.castShadow = true;
    book.add(spineLeft);

    // Right edge
    const spineRight = new THREE.Mesh(spineGeometry, spineMaterial!);
    spineRight.position.x = width / 2;
    spineRight.castShadow = true;
    book.add(spineRight);

    // Top edge
    const topGeometry = new THREE.BoxGeometry(width, 0.05, depth);
    const topMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.8,
    });
    const topEdge = new THREE.Mesh(topGeometry, topMaterial);
    topEdge.position.y = height / 2;
    topEdge.castShadow = true;
    book.add(topEdge);

    // Bottom edge
    const bottomEdge = new THREE.Mesh(topGeometry, topMaterial);
    bottomEdge.position.y = -height / 2;
    bottomEdge.castShadow = true;
    book.add(bottomEdge);

    // Pages
    const pagesGeometry = new THREE.BoxGeometry(
      width - 0.1,
      height - 0.1,
      depth - 0.1,
    );
    const pagesMaterial = new THREE.MeshStandardMaterial({
      color: 0xf5f5dc,
      roughness: 0.9,
    });
    const pagesBlock = new THREE.Mesh(pagesGeometry, pagesMaterial);
    pagesBlock.position.x = 0.025;
    book.add(pagesBlock);

    // Add page lines based on pages count
    const pageLines = Math.min(pages / 15, 30); // Max 30 visible lines
    for (let i = 0; i < pageLines; i++) {
      const lineGeometry = new THREE.PlaneGeometry(width - 0.15, 0.005);
      const lineMaterial = new THREE.MeshBasicMaterial({
        color: 0xd3d3d3,
        side: THREE.DoubleSide,
      });
      const line = new THREE.Mesh(lineGeometry, lineMaterial);
      line.position.set(
        0.025,
        0,
        (depth / 2 - 0.05) * (1 - i / (pageLines / 2)),
      );
      line.rotation.x = Math.PI / 2;
      book.add(line);
    }

    // Add default title if no front cover
    if (!frontCover) {
      const titleGeometry = new THREE.BoxGeometry(
        width * 0.7,
        height * 0.15,
        0.02,
      );
      const titleMaterial = new THREE.MeshStandardMaterial({
        color: 0xffd700,
        metalness: 0.5,
        roughness: 0.3,
      });
      const title = new THREE.Mesh(titleGeometry, titleMaterial);
      title.position.set(0, height * 0.25, depth / 2 + 0.03);
      book.add(title);
    }

    // Set initial rotation
    book.rotation.x = rotation.x;
    book.rotation.y = rotation.y;

    scene.add(book);

    // Wait for all textures to load, then hide loading
    Promise.allSettled(texturesToLoad).finally(() => {
      // Small delay to ensure everything is rendered
      setTimeout(() => {
        setIsLoading(false);
      }, 100);
    });

    // If no textures to load, hide loading immediately
    if (texturesToLoad.length === 0) {
      setTimeout(() => {
        setIsLoading(false);
      }, 100);
    }

    // Animation loop
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current)
        return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      rendererRef.current?.dispose();
    };
  }, [frontCover, backCover, spine, pages, width, height, depth]);

  // Update rotation when state changes
  useEffect(() => {
    if (bookRef.current) {
      bookRef.current.rotation.x = rotation.x;
      bookRef.current.rotation.y = rotation.y;
    }
  }, [rotation]);

  // Update camera zoom
  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.position.z = zoom;
    }
  }, [zoom]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setPreviousMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - previousMousePosition.x;
    const deltaY = e.clientY - previousMousePosition.y;

    setRotation((prev) => ({
      x: prev.x - deltaY * 0.01,
      y: prev.y + deltaX * 0.01,
    }));

    setPreviousMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setZoom((prev) => Math.max(2, Math.min(15, prev + e.deltaY * 0.01)));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      e.preventDefault();
      setIsDragging(true);
      setPreviousMousePosition({
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;

    const deltaX = e.touches[0].clientX - previousMousePosition.x;
    const deltaY = e.touches[0].clientY - previousMousePosition.y;

    setRotation((prev) => ({
      x: prev.x - deltaY * 0.01,
      y: prev.y + deltaX * 0.01,
    }));

    setPreviousMousePosition({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative w-full h-full min-h-100">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-10">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            <p className="text-sm text-muted-foreground">Loading 3D Model...</p>
          </div>
        </div>
      )}

      {/* 3D Canvas */}
      <div
        ref={containerRef}
        className={`w-full h-full cursor-grab active:cursor-grabbing select-none transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ touchAction: "none" }}
      />
    </div>
  );
}