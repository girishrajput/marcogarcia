import "./globals.css";
// These will work once the folder is moved to the project root

import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Dr. Marco Garcia",
  description: "Professional dental care services in Bakersfield, CA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased text-slate-900">

{/* <MainHome /> */}

        <Header />  
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}