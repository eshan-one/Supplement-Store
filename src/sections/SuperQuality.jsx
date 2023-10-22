import { natural } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          NATURALTEIN Is The  
          <span className='text-coral-red'> First </span>
          <span className='text-coral-red'>To Make A Difference </span> 
        </h2>
        <ul className='mt-4 lg:max-w-lg info-text'>
        <li className=" text-black">✔ First company make sure you got 100% original product-Transparent supply chain – No middleman</li>        
        <li className=" text-black">✔ First to bring 100% natural ingredients- (No artificial sweeteners or artificial flavors or fillers)</li>
        <li className=" text-black">✔ First and Only Protein certified by cologne list- German Sports University</li>
        <li className=" text-black">✔ First and Only Company having products- Glyphosate residue free certified</li>
        </ul>
        
        <div className='mt-11'>
          <Button label='View details' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={natural}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;