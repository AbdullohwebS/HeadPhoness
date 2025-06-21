import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 my-32 grid gap-10 lg:grid-cols-2 items-center text-center lg:text-left">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold uppercase mb-6">
          Bringing you the <span className="text-[#D87D4A]">best</span> audio gear
        </h2>
        <p className="text-gray-500">
          Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones,
          speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to
          browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who
          make Audiophile the best place to buy your portable audio equipment.
        </p>
      </div>

      <Image
        src="/assets/shared/desktop/image-best-gear.jpg"
        alt="Best Gear"
        width={540}
        height={588}
        className="rounded-lg w-full"
      />
    </section>
  );
}
