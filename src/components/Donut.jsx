import { useGLTF } from "@react-three/drei";
import { useRef } from "react"
import { useFrame } from "@react-three/fiber";

const Donut = (props) => {
  const donutRef = useRef();

  const donut = useGLTF("/models/donut.glb");
  useFrame((state, delta) => {
    donutRef.current.rotation.x += 0.01
    donutRef.current.rotation.y += 0.01
  })
  return (
    <mesh
      scale={props.scale}
      position={props.position}
      ref={donutRef}
    >
      <primitive
        object={donut.scene}
      />
    </mesh>
  )
}

export default Donut;

