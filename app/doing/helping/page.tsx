import React from "react";
import ImageBox from "components/ImageBox"

export default async function Helping(){
    return (
        <div className="flex flex-col mt-8">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <h1 className="text-6xl font-medium text-[#081f3c]">
                  HOW WE <span className="text-[#7096d1]">HELP</span></h1>
                <p className="text-2xl mt-2">working with NGOS, we are able to:</p>
              </div>
          </div>
          <div className="flex flex-wrap justify-center mt-8">
           <ImageBox src={"https://media.discordapp.net/attachments/1163526744570081310/1163801856271712277/image.png?ex=6540e5f0&is=652e70f0&hm=42575306659ee1df8c7cdfece8be5cc18bd928348a658d4e5e5af5c308904bc8&=&width=560&height=400"} title={"Hello"} description={"this is bye"} width={400} height={360}/>
           <ImageBox src={"https://media.discordapp.net/attachments/1163526744570081310/1163801856271712277/image.png?ex=6540e5f0&is=652e70f0&hm=42575306659ee1df8c7cdfece8be5cc18bd928348a658d4e5e5af5c308904bc8&=&width=560&height=400"} title={"Hello"} description={"this is bye"} width={400} height={360}/>
           <ImageBox src={"https://media.discordapp.net/attachments/1163526744570081310/1163801856271712277/image.png?ex=6540e5f0&is=652e70f0&hm=42575306659ee1df8c7cdfece8be5cc18bd928348a658d4e5e5af5c308904bc8&=&width=560&height=400"} title={"Hello"} description={"this is bye"} width={400} height={360}/>
           <ImageBox src={"https://media.discordapp.net/attachments/1163526744570081310/1163801856271712277/image.png?ex=6540e5f0&is=652e70f0&hm=42575306659ee1df8c7cdfece8be5cc18bd928348a658d4e5e5af5c308904bc8&=&width=560&height=400"} title={"Hello"} description={"this is bye"} width={400} height={360}/>
           <ImageBox src={"https://media.discordapp.net/attachments/1163526744570081310/1163801856271712277/image.png?ex=6540e5f0&is=652e70f0&hm=42575306659ee1df8c7cdfece8be5cc18bd928348a658d4e5e5af5c308904bc8&=&width=560&height=400"} title={"Hello"} description={"this is bye"} width={400} height={360}/>
           <ImageBox src={"https://media.discordapp.net/attachments/1163526744570081310/1163801856271712277/image.png?ex=6540e5f0&is=652e70f0&hm=42575306659ee1df8c7cdfece8be5cc18bd928348a658d4e5e5af5c308904bc8&=&width=560&height=400"} title={"Hello"} description={"this is bye"} width={400} height={360}/>
        </div>
        </div>
    )
}