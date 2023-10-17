import React from "react";
import Image from 'next/image'
import p2022 from 'images/gingerbread.jpg'
import ProfileCard from 'components/ProfileCard'

export default async function About(){
    return (
        <div className="flex flex-col mt-8">
            <div className="flex flex-wrap justify-center text-center">
              <div className="w-full lg:w-6/12 px-4">
                <h1 className="text-6xl font-medium text-[#081f3c]">
                  ABOUT <span className="text-[#7096d1]">US</span></h1>
                <p className="text-2xl font-light">student led club by</p>
                <hr className="h-0.5 my-4 bg-[#7096d1] border-none"></hr>
              </div>
          </div>
          <p className="text-center text-2xl font-light italic mb-6">leaders of year 2023-2024</p>
          <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col">
                        <Image className="border-2 border-black"
                            src={p2022} width={400} height={400} alt="profile"></Image>
                    <div className="text-center mt-4">
                      <h1 className="text-2xl font-medium mb-1">
                                President
                      </h1>
                    <div className="font-light text-xl mb-2">
                        Ginger Bread
                    </div>
                  </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4 ">
                  <div className="flex flex-col">
                        <Image className="border-2 border-black"
                            src={p2022} width={400} height={400} alt="profile"></Image>
                    <div className="text-center mt-4">
                      <h1 className="text-2xl font-medium mb-1">
                                Vice President
                      </h1>
                    <div className="font-light text-xl mb-2">
                        Ginger Bread
                    </div>
                  </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col">
                        <Image className="border-2 border-black"
                            src={p2022} width={400} height={400} alt="profile"></Image>
                    <div className="text-center mt-4">
                      <h1 className="text-2xl font-medium mb-1">
                                Treasurer
                      </h1>
                    <div className="font-light text-xl mb-2">
                        Ginger Bread
                    </div>
                  </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col">
                        <Image className="border-2 border-black"
                            src={p2022} width={400} height={400} alt="profile"></Image>
                    <div className="text-center mt-4">
                      <h1 className="text-2xl font-medium mb-1">
                                Media Manager
                      </h1>
                    <div className="font-light text-xl mb-2">
                        Ginger Bread
                    </div>
                  </div>
              </div>
            </div>
        </div>
        <p className="text-center text-2xl font-light italic mb-6">leaders of year 2022-2023</p>
          <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col">
                        <Image className="border-2 border-black"
                            src={p2022} width={400} height={400} alt="profile"></Image>
                    <div className="text-center mt-4">
                      <h1 className="text-2xl font-medium mb-1">
                                President
                      </h1>
                    <div className="font-light text-xl mb-2">
                        Ginger Bread
                    </div>
                  </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col">
                        <Image className="border-2 border-black"
                            src={p2022} width={400} height={400} alt="profile"></Image>
                    <div className="text-center mt-4">
                      <h1 className="text-2xl font-medium mb-1">
                                Vice President
                      </h1>
                    <div className="font-light text-xl mb-2">
                        Ginger Bread
                    </div>
                  </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col">
                        <Image className="border-2 border-black"
                            src={p2022} width={400} height={400} alt="profile"></Image>
                    <div className="text-center mt-4">
                      <h1 className="text-2xl font-medium mb-1">
                                Treasurer
                      </h1>
                    <div className="font-light text-xl mb-2">
                        Ginger Bread
                    </div>
                  </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col">
                        <Image className="border-2 border-black"
                            src={p2022} width={400} height={400} alt="profile"></Image>
                    <div className="text-center mt-4">
                      <h1 className="text-2xl font-medium mb-1">
                                Media Manager
                      </h1>
                    <div className="font-light text-xl mb-2">
                        Ginger Bread
                    </div>
                  </div>
              </div>
            </div>
        </div>
        <p className="text-center text-2xl font-light italic mb-6">leaders of year 2021-2022</p>
          <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col">
                        <Image className="border-2 border-black"
                            src={p2022} width={400} height={400} alt="profile"></Image>
                    <div className="text-center mt-4">
                      <h1 className="text-2xl font-medium mb-1">
                                President
                      </h1>
                    <div className="font-light text-xl mb-2">
                        Ginger Bread
                    </div>
                  </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col">
                        <Image className="border-2 border-black"
                            src={p2022} width={400} height={400} alt="profile"></Image>
                    <div className="text-center mt-4">
                      <h1 className="text-2xl font-medium mb-1">
                                Vice President
                      </h1>
                    <div className="font-light text-xl mb-2">
                        Ginger Bread
                    </div>
                  </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col">
                        <Image className="border-2 border-black"
                            src={p2022} width={400} height={400} alt="profile"></Image>
                    <div className="text-center mt-4">
                      <h1 className="text-2xl font-medium mb-1">
                                Treasurer
                      </h1>
                    <div className="font-light text-xl mb-2">
                        Ginger Bread
                    </div>
                  </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col">
                        <Image className="border-2 border-black"
                            src={p2022} width={400} height={400} alt="profile"></Image>
                    <div className="text-center mt-4">
                      <h1 className="text-2xl font-medium mb-1">
                                Media Manager
                      </h1>
                    <div className="font-light text-xl mb-2">
                        Ginger Bread
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
    )
}