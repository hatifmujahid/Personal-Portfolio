
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
    }, 2000);
    setTimeout(() => {
      document.getElementById('section').style.opacity =1;
    }, 2100);
  }, []);
  const url = (name, wrap = false) =>
    `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
  return (
    <div>
      {isLoading ? ( // Show loading screen if isLoading is true
        <Loading />
      ) : (
        // Show the main content when isLoading is false
        <div style={{ width: '100%', height: '100%', background: "radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)" }}>
          <Parallax pages={3} ref={parallax} style={{ background: '#000000' }}>
            <ParallaxLayer offset={0} speed={1} className="parallax-layer" style={{ backgroundColor: '#000000' }}>
              <section class="h-screen w-screen flex items-center justify-center opacity-0 ease-in duration-100 mt-10" id='section'>
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
                  <a href='https://drive.google.com/drive/u/0/folders/1UdVm925vWWpmej-7-SAfG9TX6o4ehk-7'>
                    <button type="button" class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2">
                      <svg class="w-4 h-4 mr-2 -ml-1 text-[#626890]" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="ethereum" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
                      My resume
                    </button>    
                  </a>
                </div>
              </section>
            </ParallaxLayer>
                <Buttons />
            <ParallaxLayer offset={1} speed={0.3} style={{ backgroundColor: '#000000' }}>
              <h1 class="text-center text-5xl font-bold text-white">Timeline</h1>
              <Timeline />
            </ParallaxLayer>
            
            <ParallaxLayer offset={2} speed={0.8} style={{ backgroundColor: '#000000' }}>
              <Projects />
              
            </ParallaxLayer>
            {/* <ParallaxLayer
              offset={0}
              speed={0}
              factor={3}
              
              style={{
                backgroundImage: url('stars', true),
                backgroundSize: 'cover',
                zIndex: 0,
                position: 'absolute',
              }}
            /> */}
            <ParallaxLayer offset={0.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
              <img alt='' src={url('satellite4')} style={{ width: '15%', marginLeft: '75%' }} />
            </ParallaxLayer>
            
          </Parallax>
        </div>
      )}
    </div>
  );
}

export default App;
