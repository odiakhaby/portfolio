import { useCallback, useMemo } from 'react';
import Particles, { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const engineInit = async (engine) => {
  await loadSlim(engine);
};

function Particle() {
  const particlesLoaded = useCallback(async (container) => {}, []);

  const options = useMemo(
    () => ({
      fpsLimit: 120,
      particles: {
        number: {
          value: 160,
          density: {
            enable: true,
            area: 1500,
          },
        },
        move: {
          direction: 'none',
          enable: true,
          speed: 2,
          straight: false,
          outModes: { default: 'out' },
        },
        size: {
          value: { min: 1, max: 3 },
        },
        opacity: {
          value: 0.7,
        },
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          resize: { enable: true },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <ParticlesProvider init={engineInit}>
      <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />
    </ParticlesProvider>
  );
}

export default Particle;
