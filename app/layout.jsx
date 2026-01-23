import { Inter } from "next/font/google";
import Header from "./components/header/Header";
import "./style/globals.scss"


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "wwwpeckelsen",
  description: "Portfolio of Wessel Peckelsen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
