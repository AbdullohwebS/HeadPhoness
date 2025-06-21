import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="bg-black text-white py-6">
            <div className="flex items-center justify-between px-4 max-w-6xl mx-auto">

                <Link href="/">
                    <Image
                        src="/assets/shared/desktop/logo.svg"
                        alt="Audio Store Logo"
                        width={143}
                        height={25}
                        className="cursor-pointer"
                    />
                </Link>

                <ul className="hidden md:flex gap-6 text-sm tracking-widest uppercase">
                    <li><Link href="/" className="hover:text-[#D87D4A] transition">Home</Link></li>
                    <li><Link href="/headphones" className="hover:text-[#D87D4A] transition">Headphones</Link></li>
                    <li><Link href="/speakers" className="hover:text-[#D87D4A] transition">Speakers</Link></li>
                    <li><Link href="/earphones" className="hover:text-[#D87D4A] transition">Earphones</Link></li>
                </ul>

                <Link href="/cart" className="hover:text-[#D87D4A] transition">
                    <Image
                        src="/assets/shared/desktop/icon-cart.svg"
                        alt="Audio Store Logo"
                        width={25}
                        height={25}
                        className="cursor-pointer"
                    />
                </Link>
            </div>
        </nav>
    );
}
