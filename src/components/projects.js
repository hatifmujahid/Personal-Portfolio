import React from "react";
import Card from "./card";
import { Octokit } from "@octokit/core";

export default function Projects() {
    
    const octokit = new Octokit({
        auth: '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'
      })
      async function getReponse(){
          const response = await octokit.request('GET /users/{username}/repos', {
            username: 'hatifmujahid',
            
            headers: {
              'X-GitHub-Api-Version': '2022-11-28'
            }
          })
          return response.data
      }
      console.log(getReponse())
      
      
    return (
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32 z-10 relative" style={{zIndex:1000, position:"relative"}}>
        <h1 className="text-center text-5xl font-bold text-white mb-6">Projects</h1>
        <div class="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3 z-10 relative">
          <div class="grid grid-cols-1 gap-4">
            <Card />
            <Card />
          </div>
          <div class="grid grid-cols-1 gap-4">
            <Card />
            <Card />
          </div> 
          <div class="grid grid-cols-1 gap-4">
            <Card />
            <Card />
          </div> 
        </div>
      </div>
    );
  }
  