import PropertyCard from "@/components/card/PropertyCard";
import { getProducts } from "@/util/action";

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <h1 className="text-3xl">HomePage</h1>

<section className='mt-4 gap-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {products &&
        Object.values(products).map((product) =>{
         return <PropertyCard key={product.id} property={product} />;
        } 
          // <div key={product.id}>
          //   <div className="text-red-600">{product.title}</div>
          //   <div>{product.description}</div>
          //   <div>{product.thumbnail}</div>
          // </div>
    )}
    </section>
    </>
  );
}
