import { arrowRight } from "../assets/icons";
import { anshul } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container bg-gold'>
      <div className='flex-1'>
        <img
          src={anshul}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-extrabold'>
            <span className='text-coral-red'>UNLEASHING A NEW ERA OF </span>
            FITNESS
        </h2>
          <p className='mt-4 info-text'>
          USE CODE: <span className="border border-coral-red border-solid pl-3 pr-3">NATURAL</span>
          </p>
          <p className='mt-6 info-text font-semibold'>
          ON ALL NATURAL PRODUCTS

          </p>
          <p className='mt-6 info-text font-bold'>
          TRUE. <span className="text-coral-red">TESTED.</span> TRUSTED.

        
        
        <div className='mt-11 flex flex-wrap gap-4 '>
          <Button label='Shop now'
           backgroundColor='bg-green'
            textColor='text-primary font-bold'
           iconURL={arrowRight} />
          <Button
            label='Learn more'
            backgroundColor='bg-green'
            textColor='text-primary font-bold'
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;