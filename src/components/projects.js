import React from "react";
import Card from "./card";
import './projects.css'
import { useState, useEffect } from 'react';
import { AnimatePresence } from "framer-motion";

export default function Projects() {
    
    return (
      <div className="px-6 space-y-8 max-w-7xl max-[500px]:scale-75 md:space-y-16 md:pt-10 lg:pt-10 mb-20">
        <div class="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3 ">
          <div class="grid grid-cols-1 gap-4">
            <Card name="hatifmujahid.com" description="The webiste you're looking at" link="https://github.com/hatifmujahid/portfolio"/>
            <Card name="Inventory Managment System" description="Inventory Management portal using PERN stack" link="https://github.com/hatifmujahid/Inventory-Management-System-PERN"/>
            {/* <Card name="Brainy Bananas" description="A website made for client deployed on vercel" link="https://brainybananas.vercel.app"/> */}
            
          </div>
          <div class="grid grid-cols-1 gap-4">
            <Card name="Pwned Password" description="Data structures project to search in 20Gb data in 24 seconds" link="https://github.com/hatifmujahid/DS-Project.cpp"/>
            <Card name="Client Server TCP" description="Client server chat app using computer networks and python" link="https://github.com/hatifmujahid/client_server_tcp"/>
            {/* <Card name="Testing using CMake" description="Tested a C++ program using CMake" link="https://github.com/hatifmujahid/SE_testing_using_CMAKE"/> */}
          </div> 
          <div class="grid grid-cols-1 gap-4">
            <Card name="Weather App" description="Weather website made using WeatherAPI and deployd on vercel" link="https://weatherapp-nu-beryl.vercel.app"/>
            <Card name="Piano Tiles Aim bot" description="Simple bot made using python" link="https://github.com/hatifmujahid/image_recog_bots"/>
            {/* <Card name="Spam-Mail-Classification" description="📧🚫 Spam Email Classifier using KNN in Python. Identify spam emails with accuracy using KNN algorithm. 🕵️‍♂️🔍✉️" link="https://github.com/hatifmujahid/Spam-Mail-Classification"/> */}
          </div>          
        </div>
      </div>
    );
  }
  