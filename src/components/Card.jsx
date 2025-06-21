import Image from "next/image";
import Link from "next/link";

export default function Card({
    slug = "xx99-mark-one-headphones",
    name = "XX99 Mark I Headphones",
    image = {
        "mobile": "/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg",
        "tablet": "/assets/product-xx99-mark-one-headphones/tablet/image-product.jpg",
        "desktop": "/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg"
    },
    category = "headphones",
    isNew = false,
    description = "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
}) {
    return (
        <div className="flex flex-col lg:flex-row items-center gap-10 my-16 px-4 max-w-6xl mx-auto">
            <div className="w-full lg:w-1/2">
                <Image
                    src={image.desktop}
                    alt={name}
                    width={540}
                    height={560}
                    className="rounded-lg w-full"
                />
            </div>

            <div className="w-full lg:w-1/2 text-center lg:text-left">
                {isNew && (
                    <p className="text-sm tracking-[0.5em] text-[#D87D4A] mb-4">
                        NEW PRODUCT
                    </p>
                )}
                <h2 className="text-3xl md:text-4xl font-bold uppercase mb-6">{name}</h2>
                <p className="text-gray-500 mb-6">{description}</p>
                <Link
                    href={`/${category}/${slug}`}
                    className="inline-block bg-[#D87D4A] text-white uppercase text-sm tracking-widest py-3 px-6 hover:bg-[#FBAF85] transition"
                >
                    See Product
                </Link>
            </div>
        </div>
    );
}
