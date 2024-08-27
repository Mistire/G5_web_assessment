'use client'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <div className="flex flex-col min-h-screen">

        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </Provider>
  );
}
