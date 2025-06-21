import CategoryHeader from "@/components/Header";
import Card from "@/components/Card";

const headphones = [
    {
        slug: "xx99-mark-two-headphones",
        name: "XX99 Mark II Headphones",
        image: {
            mobile: "/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg",
            tablet: "/assets/product-xx99-mark-two-headphones/tablet/image-product.jpg",
            desktop: "/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg",
        },
        category: "headphones",
        isNew: true,
        description:
            "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience with superior sound.",
    },
    {
        slug: "xx99-mark-one-headphones",
        name: "XX99 Mark I Headphones",
        image: {
            mobile: "/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg",
            tablet: "/assets/product-xx99-mark-one-headphones/tablet/image-product.jpg",
            desktop: "/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg",
        },
        category: "headphones",
        isNew: false,
        description:
            "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles.",
    },
    {
        slug: "xx59-headphones",
        name: "XX59 Headphones",
        image: {
            mobile: "/assets/product-xx59-headphones/mobile/image-product.jpg",
            tablet: "/assets/product-xx59-headphones/tablet/image-product.jpg",
            desktop: "/assets/product-xx59-headphones/desktop/image-product.jpg",
        },
        category: "headphones",
        isNew: false,
        description:
            "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable design delivers great comfort.",
    },
];

export default function HeadphonesPage() {
    return (
        <>
            <CategoryHeader title="Headphones" />
            <div className="space-y-10 px-4 max-w-6xl mx-auto">
                {headphones.map((product) => (
                    <Card key={product.slug} {...product} />
                ))}
            </div>
        </>
    );
}
