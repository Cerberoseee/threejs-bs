import { useGLTF } from "@react-three/drei";
import { useRef } from "react"
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

const Blob = (props) => {
  const ref = useRef();

  const blob = useGLTF("/models/blob.glb");
  useFrame((state, delta) => {
    ref.current.position.lerp(new Vector3(
      ref.current.position.x, 
      ref.current.position.y + Math.sin(state.clock.getElapsedTime() * 100) * 3,
      ref.current.position.z
    ), 0.01);    
  })
  return (
    <mesh
      scale={props.scale}
      rotation={props.rotation}
      position={props.position}
      ref={ref}
    >
      <primitive
        object={blob.scene}
      />
    </mesh>
  )
}

export default Blob;