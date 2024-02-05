import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';

import CustomNavbar from "@/components/CustomNavbar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
     <ToastContainer/>
     <div><CustomNavbar/></div> 
<div className=""> {children}</div>
       
        <div><Footer/></div>
        </body>
    </html>
  );
}
