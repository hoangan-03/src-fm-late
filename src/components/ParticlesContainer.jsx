import {Particles} from 'react-tsparticles'
import React, {useCallback} from 'react';
import { loadSlim } from "tsparticles-slim";
const ParticlesContainer = () => {
  const particleInit = useCallback(async(engine) =>{
  await loadSlim(engine);
},[]);
  const particalsLoaded = useCallback(async()=> {},[]);

  return<Particles className='w-[100vw] h-full right-0 absolute translate-z-0' id = "tsparticles" init={particleInit} loaded={particalsLoaded}
  options={{
    fullScreen: {enable: false},
    background: {
      color: {
        value: '',
      },
    },
    fpsLimit: 144,
    interactivity: {
      events: {
        onClick:{
          enable: false,
          mode: 'push',
        },
        onHover:{
          enable: true,
          mode: 'repulse'
        },
        resize: true,
      },
      mode:{
        push:{
          quantity: 90
        },
        repulse:{
          distance: 200,
          duration: 0.3,
        }
      }
    },
    particles:{
      color:{
        value: '#e68e2e',
      },
      links:{
        color: '#f5d393',
        distance: 200,
        enable: true,
        opacity: 0.6,
        width: 1
      },
      collisions:{
        enable: true,
      },
      move:{
        direction:'none',
        enable: true,
        outModes:{
          default: 'bounce',
        },
        random: false,
        speed: 1,
        straight: false
      },
      number:{
        density:{
          enable: true,
          area: 1500,
        },
        value: 60
      },
      opacity: {
        value: 0.5
      },
      shape:{
        type: 'circle',
      },
      size:{
        value:{
          min: 5,
          max: 8,
        }
      },
    },
    detectRetina: true,
  }} />
};

export default ParticlesContainer;
