// app/layout.jsx
import { Inter } from "next/font/google"
import "./style/globals.scss"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "wwwpeckelsen",
  description: "Portfolio of Wessel Peckelsen",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <div className="container">
          {/* <Header/> */}
          {children}
          <Footer text="wpeckelsen@gmail.com" />
        </div>
      </body>
    </html>
  )
}