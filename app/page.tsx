"use client"

import ImageBox from "components/ImageBox";
import React from "react"
import { row0 , row1 } from "data/images"

export default function IndexPage() {
    return (
        <div className="flex flex-col mt-8">
             <div className="flex flex-wrap justify-center text-center">
                <div className="w-full lg:w-6/12 px-4">
                  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><h1 className="text-6xl font-medium text-[#081f3c]">
                 INTERACT <span className="text-[#7096d1]">CLUB</span></h1></a>
              </div>
              <div className="flex flex-wrap mt-8 w-full">
              <div className="justify-center md:scale-95 md:flex">{row0.map((row) => <ImageBox src={row.src} width={row.width} height={row.height}></ImageBox>)}

                    </div></div>
                    <div className="flex flex-wrap w-full">
                        <div className="justify-center md:scale-95 md:flex">{row1.map((row) => <ImageBox src={row.src} width={row.width} height={row.height}></ImageBox>)}
                    </div></div>
                </div>
        <h1 className="text-xl font-light text-center text-[#081f3c] inset-x-0 bottom-0 h-16">
                The Interact Club is a student-led club that aims to help those in need and urge others to do the same.
        </h1>
      </div>
    )
}
