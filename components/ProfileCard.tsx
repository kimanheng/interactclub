import Image from 'next/image'

export default function ProfileCard() {
    return (
        <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col">
                        <Image className="rounded-2xl drop-shadow-md"
                            src="" width={400} height={400} alt="profile"></Image>
                    <div className="text-center mt-6">
                      <h1 className="text-2xl font-medium mb-1">
                                President
                      </h1>
                    <div className="font-light text-xl mb-2">
                        Ginger Bread
                    </div>
                  </div>
              </div>
            </div>
        </div>
    )
}