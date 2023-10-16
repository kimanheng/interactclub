import Link from "next/link";
import Themebutton from "./ThemeButton";

export default function Navbar() {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex justify-between items-center w-full">
          <Link href="/">
            <h1 className="text-2xl font-medium">
              Interact <span className="text-[#7096d1]">Club</span>
            </h1>
          </Link>
          <div className ="flex">
            <Link href="/whatwedo"><p className="mr-4 text-xl font-bold italic">what we do</p></Link>
            <Link href="/about"><p className="mr-4 text-xl font-bold italic">about us</p></Link>
            <Themebutton />
          </div>
        </div>
      </div>
    </div>
  );
}
