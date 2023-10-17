import React from "react";
import Image from 'next/image'

export default async function About(){
    return (
        <div className="flex flex-col mt-8">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h1 className="text-6xl font-medium text-[#081f3c]">
                  ABOUT <span className="text-[#7096d1]">US</span></h1>
                <p className="text-2xl font-light">student led club by</p>
                <hr className="h-0.5 my-4 bg-[#7096d1] border-none"></hr>
                <p className="text-2xl font-light italic">leaders of 2023-2024</p>
              </div>
          </div>
        </div>
    )
}