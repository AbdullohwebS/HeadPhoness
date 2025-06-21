import Card from "@/components/Card";

export const revalidate = 3600

export default async function page({ params }) {
    const { category } = await params;
    const req = await fetch(`https://json-api.uz/api/project/nextjs/products?category=${category}`);
    const { data } = await req.json()
    return <div>
        {data.length > 0 ? <ul>
            {data.map((element) => {
                return <li key={element.id}>
                    <Card {...element} />
                </li>
            })}
        </ul> : <p>Bunday category mavjud emas!</p>}
    </div>
}  