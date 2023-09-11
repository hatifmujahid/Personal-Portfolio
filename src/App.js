
import './App.css';
import Timeline from './components/timeline';
import React, { useRef, useEffect} from 'react'
import { Parallax, ParallaxLayer} from '@react-spring/parallax'

function App() {
  const parallax = useRef(null)
  const url = (name, wrap = false) =>
    `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
  return (
    <div >
    <div style={{ width: '100%', height: '100%', background: '#000000'}}>
      <Parallax pages={3} ref={parallax} style={{background: '#000000'}}>
        <ParallaxLayer offset={0} speed={1} className="parallax-layer" style={{backgroundColor:"#000000"}}>
                <section class="h-screen w-screen flex items-center justify-center" >
                <div class="py-8 px-4 max-w-screen-xl text-center lg:py-16">
                    <h1 class="pb-4 font-extrabold tracking-tight text-transparent text-7xl lg:text-8xl bg-clip-text bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60">
                      <span style={{display: "inline-block", "vertical-align": "top","max-width": "700px"}}>
                      Hey, My name is
                      </span>                
                     <br></br> Hatif Mujahid
                    </h1>
                    <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.herokuapp.com?font=&size=35&pause=1000&color=B0B0B0&center=true&vCenter=true&width=800&height=80&lines=Welcome+to+my+Portfolio!;MERN+%7C+Next+JS+%7C+Nest+JS+Developer;Cyber+Security+Enthusiast;Exploring+AI%2FML" alt="Typing SVG" /></a>
                  </div>
              </section>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={0.3} style={{ backgroundColor: '#111111'}} >
                <section class=" dark:bg-gray-900 flex items-center justify-center h-full">
                    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16 ">
                        <div class="flex flex-col justify-center slide-in-courses-heading">
                            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Why Choose Us?</h1>
                            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">At our core, we are driven by a genuine commitment to our clients' success. Our unwavering dedication and heartfelt passion enable us to empower individuals with the essential skills required to thrive in the real world. We foster an environment of enjoyment and enthusiasm, ensuring that learning is both engaging and rewarding. Customer satisfaction lies at the heart of our priorities, valuing their needs above all else.</p>
                        </div>
                    </div>
                </section>

            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={0.8} style={{ backgroundColor: '#222222'}} >
                <section class=" dark:bg-gray-900 flex items-center justify-center h-full">
                    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16 ">
                        <div class="flex flex-col justify-center slide-in-courses-heading">
                            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Our Mission</h1>
                            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Our motto is to genuinely, sincerely and passionately help our clients develop the necessary skills needed for the real world out there, and have fun while doing it. For us, customers come first; profits later.</p>
                        </div>
                    </div>
                </section>
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
            <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
                <img alt=''  src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                <img alt='' src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                <img alt='' src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
                <img alt='' src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                <img alt='' src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
                <img alt='' src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                <img alt='' src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
                <img alt='' src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
                <img alt='' src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
                <img alt='' src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
                <img alt='' src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                <img alt='' src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
            </ParallaxLayer>
        </Parallax>  
      </div>
    </div>
  );
}

export default App;
