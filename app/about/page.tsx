import React from "react";
import { About } from "../lib/interface";

export default async function About(){
    return (
    <div className="divide-y divide-gray-400 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
            </h1>
        </div>
        <ul>
          <li className="py-4 space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
              <div>
                <img src="./images/logo.png" max-width="100%" width="240"/>
              </div>
                <div className="ml-12 w-max">
                  <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                    Interact Club
                  </h3>
                  <p>
                    A Student-Led Club <br/> 
                    <span className ="text-[#7096d1]">
                        2019-Present</span><br/>
                    <span className="text-gray-500 dark:text-gray-400 line-clamp-2">
                    For everyone and the community.</span>
                </p>
              </div>    
          </li>
          <li className="py-4 space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
              <div>
                <img src="./images/logo.png" max-width="100%" width="240"/>
              </div>
                <div className="ml-12 w-max">
                  <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                    Ginger Bread
                  </h3>
                  <p>
                    Vice President <br/> 
                    <span className ="text-[#7096d1]">
                        2023-2024</span><br/>
                    <span className="text-gray-500 dark:text-gray-400 line-clamp-2">
                        For everyone and the community.</span>
                </p>
              </div>    
          </li>
      </ul>
    </div>
    )
}