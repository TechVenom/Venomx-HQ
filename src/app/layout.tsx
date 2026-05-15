import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "VENOMX | The AGI Edge",
  description: "A high-fidelity framework for bridging cognitive reasoning with system-level execution. Engineered for sovereignty and autonomous labor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
    >
      <body className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
