import CategoryHeader from "@/components/Header";
import Card from "@/components/Card";

const earphones = [
    {
        slug: "yx1-earphones",
        name: "YX1 Wireless Earphones",
        image: {
            mobile: "/assets/product-yx1-earphones/mobile/image-product.jpg",
            tablet: "/assets/product-yx1-earphones/tablet/image-product.jpg",
            desktop: "/assets/product-yx1-earphones/desktop/image-product.jpg",
        },
        category: "earphones",
        isNew: true,
        description: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    },
];

export default function EarphonesPage() {
    return (
        <>
            <CategoryHeader title="Earphones" />
            <div className="space-y-10">
                {earphones.map((product) => (
                    <Card key={product.slug} {...product} />
                ))}
            </div>
        </>
    );
}
