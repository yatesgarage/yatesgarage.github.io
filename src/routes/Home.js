import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Title from '../Title';
import Model from '../Model';

const primaryText = 'Yates Garage';
const secondaryText = 'TRANSMISSIONS & PERFORMANCE';

function Scene() {
  return (
    <>
      <pointLight position={[0, 10, 0]} intensity={1.6} />
      <pointLight position={[10, 0, 0]} intensity={0.8} />
      <pointLight position={[-10, 0, 0]} intensity={0.8} />
      <pointLight position={[0, 0, 10]} intensity={0.8} />
      <pointLight position={[0, 0, -10]} intensity={0.8} />
      <Model />
      <OrbitControls />
    </>
  );
}

function Home() {
  return (
    <div>
      <div className="app-header">
        <Title title={primaryText} />
        <h1 className="font--primary">{primaryText}</h1>
        <h2>{secondaryText}</h2>
        <p>
          <a
            className="font--link"
            href="https://www.google.com/maps/place/Yates+Garage/@30.0166803,-95.6427716,15z/data=!4m2!3m1!1s0x0:0x5fc080c86ffb8783?sa=X&ved=2ahUKEwiOm7Slw9r4AhUGj2oFHTmVB9IQ_BJ6BAgwEAU"
            title="14833 Grant Rd, Cypress TX - 77429"
            rel="nofollow noreferrer"
            target="_blank"
          >
            <span>14833 Grant Rd, Cypress TX - 77429</span>
          </a>
        </p>
      </div>
      <Canvas style={{ width: '100%', minHeight: '300px' }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Home;
