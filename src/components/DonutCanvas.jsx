import { OrbitControls, Preload } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import Donut from "./Donut"
import Blob from "./Blob"

const DonutCanvas = () => {

  return (
    <Canvas
      className="bg-[#de9bdc]"
      frameloop="always"
      shadows
      camera={{position: [20, 10, 0], fov: 90}}
      gl={{preserveDrawingBuffer: true}}
    >
      <directionalLight position={[0, 10, 0]} rotation={[0,Math.Pi,0]} intensity={5} />
      <directionalLight position={[10, 0 , 0]} rotation={[0,0,Math.Pi]} intensity={5} />
      <directionalLight position={[-10, 0 , 0]} rotation={[0,0,-Math.Pi]} intensity={5} />
      <directionalLight position={[0, -10, 0]} rotation={[0,-Math.Pi,0]} intensity={5} />
      {/* <Plane position={[0,0,0]} rotation={[-Math.PI/2,0,0]} scale={[100, 100, 100]}>
        <meshStandardMaterial color={"#de9bdc"}/>
      </Plane> */}
      <Suspense>
        <OrbitControls
          enableZoom={true}
          enableDamping={true}
        />
        <Donut 
          scale={[70, 70, 70]}
          position={[0, 0, 0]}
        />
        <Blob
          scale={[3, 3, 3]}
          position={[0, 0, 15]} 
        />
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default DonutCanvas