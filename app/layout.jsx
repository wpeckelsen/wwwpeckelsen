import { Inter } from "next/font/google";

import "./style/globals.scss"


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "wwwpeckelsen",
  description: "Portfolio of Wessel Peckelsen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
