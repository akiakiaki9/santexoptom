import Carousel from "./components/carousel/Carousel";
import Categories from "./components/categories/Categories";
import Contacts from "./components/contacts/Contacts";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Categories />
      <Features />
      <Contacts />
      <Footer />
    </div>
  );
};