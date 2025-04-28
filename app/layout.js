import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./section/Header";
import Footer from "./section/Footer";
import { FaWhatsappSquare } from "react-icons/fa";

const montserrat = Montserrat({
  variable: "--font-mont",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Enforca",
  description:
    "Enforca Technologies is an international software development company registered in the USA, UK, and Nigeria. We specialize in building high-performance websites, web applications, and mobile apps, delivering end-to-end digital solutions for startups, SMEs, and enterprises. Through structured internship and SIWES programs, we empower future innovators by providing real-world project experience, mentorship, and professional growth opportunities.",
  icons: {
    icon: "favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-400 antialiased relative`}>
        <Header />
        {children}
        <div className="cursor-pointer fixed right-0 bottom-20">
          <a href="https://wa.me/+97470640796" target="_blank">
            <FaWhatsappSquare className="size-12 text-primary" />
          </a>
        </div>
        <Footer />
      </body>
    </html>
  );
}
