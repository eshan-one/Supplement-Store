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
        <h1 className='text-4xl  font-palanquin font-extrabold text-primary'>
          <span  > UNLEASHING A NEW ERA OF  </span>
          FITNESS 
          <br/> <h2>USE CODE: <span className="border border-white border-solid pl-5 pr-5">NATURAL</span>
          </h2> 

          <br />
           <h2 className="text-black">ON ALL NATURAL PRODUCTS</h2>

           <br /> <h1 className="text-matt">TRUE. <span className="text-primary">TESTED.</span>TRUSTED</h1>
        </h1> 

        
        
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