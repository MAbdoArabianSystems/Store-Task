import "./globals.css";

import NavBar from "../layouts/common/navbar";
import Footer from "../layouts/common/footer";
import PopupSale from "../components/PopupSale";

export const metadata = {
  title: "Store App",
  description: "Store APP || Application || Shopping Now...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <NavBar />
        {children}
        <PopupSale />
        <Footer />
      </body>
    </html>
  );
}
