export default function Header({ title }) {
    return (
        <section className="bg-black text-white py-24">
            <h2 className="text-3xl md:text-4xl font-bold text-center uppercase tracking-widest">
                {title}
            </h2>
        </section>
    );
}
