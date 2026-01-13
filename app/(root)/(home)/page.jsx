<<<<<<< HEAD

const page = () => {
  return (
    <div className="">
     
    
=======
import Navbar from "@/components/root/navbar";
import Footer from "@/components/root/footer ";
import Banner from "./components/banner";
const page = () => {
  return (
    <div className="">
      <Navbar className="fixed" />
      <Banner/>
      <Footer/>
    </div>
  );
};

export default page;
