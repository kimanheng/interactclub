import React from "react"

export default async function About(){
    return (
    <div className="divide-y divide-gray-400 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
            </h1>
        </div>
        <ul>
            <li>
                <div className="m-4 space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <div className="mr-6">
                        <img src="/images/logo.png" width="500" border-radius="50%"></img>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">Interact Club</h3>
                        <h4>A Student-Led Club
                            <span className="text-[#7096d1]"> 2019-Present</span></h4>
                        <p className="prose max-w-none text-gray-500 dark:text-gray-400 line-clamp-2">Hii</p>
                    </div>
                </div>
            </li>
            <li>
                <div className="m-4 space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <div className="mr-6">
                        <img src="/images/logo.png" width="500" border-radius="50%"></img>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">Ginger Bread</h3>
                        <h4>President <br></br>
                            <span className="text-[#7096d1]"> 2023-2024</span></h4>
                        <p className="prose max-w-none text-gray-500 dark:text-gray-400 line-clamp-2">I like to eat candies.</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    )
}