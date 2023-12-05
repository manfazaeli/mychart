"use client";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Suspense } from "react";




export default function RootLayout({ children }) {
  
  
  return (
    <html lang="en">
      <body className=" " >
        <Header />
        <main >
          <Suspense >
              {children}  
          </Suspense>   
        </main>

        {/* <Footer /> */}
      </body>
    </html>
  );
}
