
import './App.css';
import Timeline from "./components/timeline";
import React, { useRef, useEffect, useState} from 'react'
import { Parallax, ParallaxLayer} from '@react-spring/parallax'
import Loading from './components/loading';
import Buttons from './components/buttons';
import Projects from './components/projects';

function App() {
  const parallax = useRef(null)
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); 
    }, 1000);
    setTimeout(() => {
      document.getElementById('section').style.opacity =1;
    }, 1200);
  }, []);
  const url = (name, wrap = false) =>
    `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
  return (
    <div>
      {isLoading ? ( // Show loading screen if isLoading is true
        <Loading />
      ) : (
        // Show the main content when isLoading is false
        <div style={{ width: '100%', height: '100%', background: '#000011' }}>
          <Parallax pages={3} ref={parallax} style={{ background: '#000000' }}>
            <ParallaxLayer offset={0} speed={1} className="parallax-layer" style={{ backgroundColor: '#000020' }}>
              <section class="h-screen w-screen flex items-center justify-center opacity-0 ease-in duration-100" id='section'>
                <div class="py-8 px-4 max-w-screen-xl text-center lg:py-16">
                  <h1 class="pb-4 font-extrabold tracking-tight text-transparent text-7xl lg:text-8xl bg-clip-text bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60">
                    <span style={{ display: 'inline-block', 'vertical-align': 'top', 'max-width': '700px' }}>
                      Hey, My name is
                    </span>
                    <br></br> Hatif Mujahid
                  </h1>
                  <a href="https://git.io/typing-svg">
                    <img
                      src="https://readme-typing-svg.herokuapp.com?font=&size=35&pause=1000&color=B0B0B0&center=true&vCenter=true&width=800&height=80&lines=Welcome+to+my+Portfolio!;MERN+%7C+Next+JS+%7C+Nest+JS+Developer;Cyber+Security+Enthusiast;Exploring+AI%2FML"
                      alt="Typing SVG"
                    />
                  </a>    
                </div>
              </section>
            </ParallaxLayer>
                <Buttons />
            <ParallaxLayer offset={1} speed={0.3} style={{ backgroundColor: '#000000' }}>
              <h1 class="text-center text-5xl font-bold text-white">Timeline</h1>
              <Timeline />
            </ParallaxLayer>
            
            <ParallaxLayer offset={2} speed={0.8} style={{ backgroundColor: '#000030' }}>
              <Projects />
            </ParallaxLayer>
            <ParallaxLayer
              offset={0}
              speed={0}
              factor={3}
              style={{
                backgroundImage: url('stars', true),
                backgroundSize: 'cover',
              }}
            />
            <ParallaxLayer offset={0.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
              <img alt='' src={url('satellite4')} style={{ width: '15%', marginLeft: '75%' }} />
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
              <img alt='' src={url('cloud')} style={{ opacity:40, display: 'block', width: '20%', marginLeft: '55%' }} />
            </ParallaxLayer>
            <ParallaxLayer offset={1.80} speed={0.5} style={{ opacity: 0.1 }}>
              <img alt='' src={url('cloud')} style={{ opacity:40, display: 'block', width: '20%', marginLeft: '70%' }} />
              <img alt='' src={url('cloud')} style={{ opacity:40, display: 'block', width: '20%', marginLeft: '40%' }} />
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
              <img alt='' src={url('cloud')} style={{ opacity:40, display: 'block', width: '10%', marginLeft: '10%' }} />
              <img alt='' src={url('cloud')} style={{ opacity:40, display: 'block', width: '20%', marginLeft: '75%' }} />
              <img alt='' src={url('cloud')} style={{ opacity:40, display: 'block', width: '25%', marginLeft: '30%' }} />


            </ParallaxLayer>
            <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
              <img alt='' src={url('cloud')} style={{ opacity:40, display: 'block', width: '20%', marginLeft: '60%' }} />
            </ParallaxLayer>
            <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
              <img alt='' src={url('cloud')} style={{ opacity:40, display: 'block', width: '20%', marginLeft: '5%' }} />
              <img alt='' src={url('cloud')} style={{ opacity:40, display: 'block', width: '15%', marginLeft: '75%' }} />
            </ParallaxLayer>
          </Parallax>
        </div>
      )}
    </div>
  );
}

export default App;
