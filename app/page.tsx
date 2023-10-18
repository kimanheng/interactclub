"use client"

import { Gallery } from "react-grid-gallery";
import { row0 , row1 } from "data/images"

export default function IndexPage() {
    return (
        <div className="flex flex-col mt-8">
             <div className="flex flex-wrap justify-center text-center">
                <div className="w-full lg:w-6/12 px-4">
                  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><h1 className="text-6xl font-medium text-[#081f3c]">
                 INTERACT <span className="text-[#7096d1]">CLUB</span></h1></a>
              </div>
              <div className="flex flex-wrap w-max">
                    <Gallery images={row0} margin={20} rowHeight={300} />
                </div>
                <div className="flex flex-wrap w-max">
                    <Gallery images={row1} margin={20} rowHeight={300} />
                </div>
            </div>
        <h1 className="text-xl font-light text-center text-[#081f3c] inset-x-0 bottom-0 h-16">
                The Interact Club is a student-led club that aims to help those in need and urge others to do the same.
        </h1>
      </div>
    )
}