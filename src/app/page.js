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
    description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
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
    description: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
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
    description: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
  },
];

export default function HeadphonesPage() {
  return (
    <>
      <CategoryHeader title="Headphones" />
      <div className="space-y-10">
        {headphones.map((product, index) => (
          <Card key={product.slug} {...product} />
        ))}
      </div>
    </>
  );
}
