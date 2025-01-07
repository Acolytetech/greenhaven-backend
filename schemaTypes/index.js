import about from "./about/about";
import contactForm from "./about/contactForm";
import fourthAbout from "./about/fourthAbout";
import SecondAbout from "./about/SecondAbout";
// import thirdAbout from "./about/thirdAbout";
import { Footer } from "./Footer";
import { GetQuoteResponse } from "./Getquoteresponse";
import { Herosection } from "./Herosection";
import { Navbar } from "./Navbar";
import { Ourproducts } from "./Ourproducts";
import { AllCategory } from "./product_category/AllCategory";
import { ProductDetail } from "./product_category/ProductDetail";
import { ProductList } from "./product_category/ProductList";
import { Instagrampost } from "./socialMedia/Instagrampost";
import { Subscription } from "./Subscription";
import { Subscriptiontext } from "./Subscriptioncontent";
import { Testimonial } from "./Testimonial";
import { Whychooseus } from "./whychooes";

export const schemaTypes = [Navbar,Herosection,Whychooseus,Testimonial,Subscriptiontext,Ourproducts,Subscription,Footer,
    about,contactForm,fourthAbout,SecondAbout,AllCategory,ProductList,ProductDetail,Instagrampost,GetQuoteResponse]
