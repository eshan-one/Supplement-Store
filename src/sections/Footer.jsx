import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href='/'>
            <img
              src={footerLogo}
              alt='logo'
              width={150}
              height={46}
              className='m-0'
            />
          </a>

          <p className='mt-6 text-base font-semibold leading-7 font-montserrat text-white-400 sm:max-w-sm'>We are committed to bring to you the highest grade
             of products which are tested, certified, authentic
            and made with natural ingredients. 
             NATURALTEIN Is The First To Make A Difference</p>
          <ui className='mt-6 text-base font-semibold leading-7 font-montserrat text-white-400 sm:max-w-sm'>

            <li>✔First company make sure you got 100%
              original product-Transparent supply chain – No middleman
            </li>

            <li>✔First to bring 100% natural ingredients –
             (No artificial sweeteners or artificial flavors or fillers)
            </li>

            <li>✔First and Only Protein certified by cologne
               list – German Sports University</li>

            <li>✔First and Only Company having products – 
              Glyphosate residue free certified</li>

          </ui>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon) => (
              <div
                className='flex justify-center items-center w-12 h-12 bg-white rounded-full cursor-pointer'
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className='mt-3 font-montserrat text-base font-semibold leading-normal text-white-400 hover:text-slate-gray'
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>© 2022 NATURALTEIN.in</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;