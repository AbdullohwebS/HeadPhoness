import CategoryHeader from "@/components/Header";
import Card from "@/components/Card";
import CategoryLinks from "@/components/CategoryLinks";
import AboutSection from "@/components/AboutSection";

const speakers = [
    {
        slug: "zx9-speaker",
        name: "ZX9 Speaker",
        image: {
            mobile: "/assets/product-zx9-speaker/mobile/image-product.jpg",
            tablet: "/assets/product-zx9-speaker/tablet/image-product.jpg",
            desktop: "/assets/product-zx9-speaker/desktop/image-product.jpg",
        },
        category: "speakers",
        isNew: true,
        description:
            "Upgrade your sound system with the all new ZX9 speaker. It’s a bookshelf speaker system that offers truly wireless connectivity.",
    },
    {
        slug: "zx7-speaker",
        name: "ZX7 Speaker",
        image: {
            mobile: "/assets/product-zx7-speaker/mobile/image-product.jpg",
            tablet: "/assets/product-zx7-speaker/tablet/image-product.jpg",
            desktop: "/assets/product-zx7-speaker/desktop/image-product.jpg",
        },
        category: "speakers",
        isNew: false,
        description:
            "Stream high quality sound wirelessly with minimal to no loss. The ZX7 bookshelf speaker uses high-end audiophile components.",
    },
];

export default function SpeakersPage() {
    return (
        <>
            <CategoryHeader title="Speakers" />
            <div className="space-y-10 px-4 max-w-6xl mx-auto">
                {speakers.map((product) => (
                    <Card key={product.slug} {...product} />
                ))}
            </div>

            <CategoryLinks />
            <AboutSection />
        </>
    );
}
