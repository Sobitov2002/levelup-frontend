import Navbar from "@/components/root/navbar";
import Footer from "@/components/root/footer ";
export default function RootLayout({ children }) {
  return (
    <div className="w-full min-h-screen">
    
        <Navbar className />
        <div className="min-h-[60vh] mt-[8vh]">{children}</div>
        <div className="">
          <Footer />
        </div>
    
    </div>
  );
}
