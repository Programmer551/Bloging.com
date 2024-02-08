import Navbar from "../../components/shared/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactUs from "../../components/shared/contact-us";
import Footer from "../../components/shared/Footer";
export default function RootLayout({ children }) {
  return (
    <div className='flex h-screen flex-col'>
      <main className=''>
        <ToastContainer />
        <Navbar />
        {children}
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
}
