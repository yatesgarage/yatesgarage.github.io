import { Suspense, useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';
import BuildCircleSharpIcon from '@mui/icons-material/BuildCircleSharp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Title from '../Title';

function Loader() {
  return (
    <BuildCircleSharpIcon sx={{ fontSize: 120 }} className="rotate" />
  )
}

function Scene() {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, '/scenes/scene.gltf');

  useFrame((state, delta) => (ref.current.rotation.y += 0.005));

  return (
    <>
      <ambientLight />
      <pointLight position={[0, 20, 10]} intensity={2} />
      <pointLight position={[20, 10, 0]} intensity={2} />
      <pointLight position={[10, 0, 20]} intensity={2} />
      <pointLight position={[0, 20, -10]} intensity={2} />
      <primitive
        ref={ref}
        position={[0, 1, 0]}
        object={gltf.scene}
      />
      <OrbitControls enableZoom={false} />
    </>
  )
}

function Home() {
  return (
    <div>
      <div className="app-header">
        <Title title="Yates Garage" />
        <h1 className="font--primary">Yates Garage</h1>
        <h2>{'TRANSMISSIONS & PERFORMANCE'}</h2>
        <p>
          <a
            className="font--link"
            href="https://www.google.com/maps/place/Yates+Garage/@30.0166803,-95.6427716,15z/data=!4m2!3m1!1s0x0:0x5fc080c86ffb8783?sa=X&ved=2ahUKEwiOm7Slw9r4AhUGj2oFHTmVB9IQ_BJ6BAgwEAU"
            title="14833 Grant Rd, Cypress TX - 77429"
            rel="nofollow noreferrer"
            target="_blank"
          >
            <LocationOnIcon />
            <span>14833 Grant Rd, Cypress TX - 77429</span>
          </a>
        </p>
      </div>
      <Suspense fallback={<Loader />}>
        <Canvas> 
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
}

export default Home;
