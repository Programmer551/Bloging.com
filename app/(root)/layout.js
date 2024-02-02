import Navbar from "../../components/shared/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function RootLayout({ children }) {
  return (
    <div className='flex h-screen flex-col'>
      <Navbar />
      <main className='flex-1'>{children}</main>
      <ToastContainer />
    </div>
  );
}
