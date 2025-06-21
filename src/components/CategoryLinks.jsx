import Link from "next/link";
import Image from "next/image";

const categories = [
    {
        name: "HEADPHONES",
        slug: "headphones",
        image: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
    },
    {
        name: "SPEAKERS",
        slug: "speakers",
        image: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
    },
    {
        name: "EARPHONES",
        slug: "earphones",
        image: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
    },
];

export default function CategoryLinks() {
    return (
        <div className="grid gap-6 md:grid-cols-3 my-24 max-w-6xl mx-auto px-4">
            {categories.map((cat) => (
                <div key={cat.slug} className="bg-gray-100 rounded-xl flex flex-col items-center pt-16 pb-6 relative text-center">
                    <Image
                        src={cat.image}
                        alt={cat.name}
                        width={150}
                        height={150}
                        className="absolute -top-10"
                    />
                    <h3 className="text-lg font-bold tracking-widest mb-4 mt-20">{cat.name}</h3>
                    <Link href={`/${cat.slug}`}>
                        <span className="text-sm text-black/50 tracking-widest hover:text-[#D87D4A] transition cursor-pointer">
                            SHOP &rarr;
                        </span>
                    </Link>
                </div>
            ))}
        </div>
    );
}
