import "./globals.css";
import CustomNavbar from "@/components/CustomNavbar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
     <div ><CustomNavbar/></div> 

        {children}
        <div><Footer/></div>
        </body>
    </html>
  );
}
