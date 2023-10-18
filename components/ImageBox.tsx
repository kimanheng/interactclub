import Image from 'next/image'

interface Props {
    src: string
    title: string
    description: string
    height: number
    width: number
}

const ImageBox: React.FC<Props> = ({src, title, description, height, width}) => {
    return (
        <div className="flex flex-col mx-4 my-2">
                <Image className="border-2 border-[#7096d1]"
                    src={src} 
                    width={width}
                    height={height} 
                    alt="Image">
                </Image>
                    <div className="text-center mt-4">
                    <h1 className="text-2xl font-medium mb-1">
                        {title}
                    </h1>
                    <div className="font-light text-xl">
                        {description}
                    </div>
                </div>
            </div>
    )
  }

export default ImageBox