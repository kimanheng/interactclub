import Image from 'next/image'
import jumpscare from 'images/jumpscare.jpg'

export default function Jumpscare() {
    return (
        <div className="absolute top-0 left-0 w-max h-max z-50">
            <Image src={jumpscare} width={1440} height={900} alt="Jumpscare"></Image>
        </div>
    )
}