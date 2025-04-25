import Image from "next/image";

import products, { Product } from "@/static/datas";

export default function Home() {
  return (
    <div className="w-full h-vh">
      <h1>Top 10 Outdoor Survival Essentials Every Smart Prepper Should Own</h1>
      {products.map((product: Product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p dangerouslySetInnerHTML={{ __html: product.description }} />
        </div>
      ))}
      {/* <Image
        aria-hidden
        src="/globe.svg"
        alt="Globe icon"
        width={16}
        height={16}
      /> */}
    </div>
  );
}
