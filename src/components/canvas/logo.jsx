import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const LogoGltf = () => {
  const logo = useGLTF("./logo/scene.gltf");

  return (
    <>
      <primitive
        object={logo.scene}
        scale={0.12}
        position-y={0}
        rotation-y={0}
      />
      <spotLight
        position={[-20, 50, -10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
    </>
  );
};

const LogoCanvas = () => {
  return (

      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 30,
          near: 0.1,
          far: 200,
          position: [2, 3, 6],
        }}
        
      >
        <Suspense fallback={<CanvasLoader />} >
          <OrbitControls
            autoRotate
            autoRotateSpeed={-0.6}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <LogoGltf />
          <Preload all />
        </Suspense>
      </Canvas>
  );
};

export default LogoCanvas;
