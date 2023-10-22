import { products } from "../constants";
import { PopularProductCard } from "../components";

const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
          OUR <span className='text-coral-red'> MOST POPULAR</span> PRODUCTS
        </h2>
       
      </div>

      <div  className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 cursor-pointer
      '>
        {products.map((product) => (
          

          <div
          key={product.name}
          className="relative overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >


              <PopularProductCard
              
              key={product.name} {...product} />

           </div>
        ))}

       
      </div>
    </section>
  );
};

export default PopularProducts;