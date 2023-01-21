import React from "react";
import { Canvas  } from "react-three-fiber";
import { Suspense } from "react";
import "./sphere.css";

function Three () {
    return (
        <>
            <mesh>
                <sphereGeometry args={[1, 32, 32]}/>
                <meshPhongMaterial color="#c96fa0" args={[]}/>
            </mesh>
        </>
    )
}

const Sphere = () => {
    return (
        <Canvas id="three-canvas-container">
            <Suspense fallback={null}>
            <Three />
            </Suspense>
        </Canvas>
    )
}

export default Sphere;
