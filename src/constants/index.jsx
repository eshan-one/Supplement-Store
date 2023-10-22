import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { chocolate, caramel, vanilla, person1, person2, person3, creatine, omega, raw_whey, whey_isolate, } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: chocolate,
        bigShoe: chocolate,
    },
    {
        thumbnail: caramel,
        bigShoe: caramel,
    },
    {
        thumbnail: vanilla,
        bigShoe: vanilla,
    },
];

export const statistics = [
    { value: '10+', label: 'Products' },
    { value: '5+', label: 'Countries' },
    { value: '25k+', label: 'Happy Customers' },
];

export const products = [
    {
        imgURL: creatine,
        name: "NATURALTEIN Creapure Creatine Monohydrate Powder (100% Pure)",
        price: "₹1,150.00 – ₹2,050.00",
    },
    {
        imgURL: raw_whey,
        name: "NATURALTEIN – Whey Protein Concentrate Unflavoured (1 Kg , 24 G Protein)",
        price: "₹2,390.00 – ₹4,690.00",
    },
    {
        imgURL: omega ,
        name: "NATURALTEIN – Omega 3 Triple Strength (60 Capsules)",
        price: "₹890.00 – ₹1,590.00",
    },
    {
        imgURL: whey_isolate,
        name: "NATURALTEIN – 100% Natural Whey Protein Isolate – Chocolate (24 G Protein)",
        price: "₹3,490.00 – ₹6,580.00",
    },
];











export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Support Hours (10am-6pm)",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: person1,
        customerName: 'Shivam Mavi',
        rating: "#ISupportNaturaltein",
        feedback: "As a cricketer, we have to keep our fitness above everything. NATURALTEIN protein powders  helped me keep up with my fitness. I fully trust NATURALTEIN because they are made from natural ingredients with no artificial sweeteners or preservatives. I highly recommend  my fans to get NATURALTEIN"
    },
    {
        imgURL: person2,
        customerName: 'Dhruv Jurel',
        rating: "#ISupportNaturaltein",
        feedback: "I tried many brands before, but my body loves NATURALTEIN protein powders. As a young cricketer, I have to make a mark and my fitness plays a crucial role. With NATURALTEIN, I have no worries about my body getting the protein it deserves. I applaud team NATURALTEIN for creating a natural protein that I can count on."
    },

    {
        imgURL: person3,
        customerName: 'Aditi Chauhan',
        rating: "#ISupportNaturaltein",
        feedback: "It gives me immense pleasure to announce my association with NATURALTEIN.\n As an athlete, for me, two of the most crucial factors that help better my performance are fitness & nutrition.\n I'm relieved that NATURALTEIN protein has got my back so that I can take Indian football to the next level."
        
    }
];











export const footerLinks = [
    {
        title: "Information",
        links: [
            { name: "Protein O Pedia", link: "/" },
            { name: "Meet Beegee", link: "/" },
            { name: "Glyphosate", link: "/" },
            { name: "Cancellation and Refund", link: "/" },
            { name: "Terms and Conditions", link: "/" },
            { name: "Shipping and Delivery", link: "/" },
        ],
    },

    {
        title: "OUR PRODUCTS",
        links: [
            { name: "Whey Protein Isolate", link: "/" },
            { name: "Supplements", link: "/" },
            { name: "Glyphosate", link: "/" },
            { name: "Whey Protein Concentrate", link: "/" },
            { name: "Gym Accessories", link: "/" },
            { name: "Super Saver Combos", link: "/" },
        ],
    },

    {
        title: "ABOUT US",
        links: [
            { name: "Blog", link: "/" },
            { name: "Our Shop", link: "/" },
            { name: "Authenticity", link: "/" },
           
        ],
    },

    {
        title: "MORE",
        links: [
            { name: "My Account", link: "/" },
            { name: "Check Out", link: "/" },
            { name: "Cart", link: "/" },
            { name: "Order Cancellation", link: "/" },
            { name: "Giving Backs", link: "/" },
            { name: "Contact Us", link: "/" },
        ],
    },

    // 




    
    {
        title: "For Shipment Query",
        links: [
            { name: "02067265896", link: "mailto:customer@nike.com" },
            { name: "Info@naturaltein.in", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo"  },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];