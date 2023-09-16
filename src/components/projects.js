import React from "react";
import Card from "./card";
import './projects.css'
import { useState, useEffect } from 'react';

export default function Projects() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const contactSection = document.querySelector('.contact-section');
        const rect = contactSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
          window.removeEventListener('scroll', handleScroll);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on initial load in case the section is already visible
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
      <div className={`contact-section px-6 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-10 ${isVisible ? 'slide-in-contact-us' : ''}`}>
        <h1 className="text-center text-5xl font-bold text-white mb-6">Projects</h1>
        <div class="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3 ">
          <div class="grid grid-cols-1 gap-4">
            <Card name="hatifmujahid.com" description="The webiste you're looking at" link="https://github.com/hatifmujahid/portfolio"/>
            <Card name="Inventory Managment System" description="Inventory Management portal using PERN stack" link="https://github.com/hatifmujahid/Inventory-Management-System-PERN"/>
            <Card name="Brainy Bananas" description="A website made for client deployed on vercel" link="https://brainybananas.vercel.app"/>
            
          </div>
          <div class="grid grid-cols-1 gap-4">
            <Card name="Pwned Password" description="Data structures project to search in 20Gb data in 24 seconds" link="https://github.com/hatifmujahid/DS-Project.cpp"/>
            <Card name="Client Server TCP" description="Client server chat app using computer networks and python" link="https://github.com/hatifmujahid/client_server_tcp"/>
            <Card name="Testing using CMake" description="Tested a C++ program using CMake" link="https://github.com/hatifmujahid/SE_testing_using_CMAKE"/>
            

            
          </div> 
          <div class="grid grid-cols-1 gap-4">
            <Card name="Weather App" description="Weather website made using WeatherAPI and deployd on vercel" link="https://weatherapp-nu-beryl.vercel.app"/>
            <Card name="Piano Tiles Aim bot" description="Simple bot made using python" link="https://github.com/hatifmujahid/image_recog_bots"/>
            <Card name="Spam-Mail-Classification" description="📧🚫 Spam Email Classifier using KNN in Python. Identify spam emails with accuracy using KNN algorithm. 🕵️‍♂️🔍✉️" link="https://github.com/hatifmujahid/Spam-Mail-Classification"/>
          </div>          
        </div>
      </div>
    );
  }
  