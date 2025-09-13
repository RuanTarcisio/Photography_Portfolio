import "./globals.css";
import Header from "@/components/Header";
import { Marcellus, Urbanist, Bebas_Neue, Dancing_Script, Permanent_Marker } from "next/font/google";

const marcellus = Marcellus({
  variable: "--font-marcellus",
  weight: ["400"],
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  weight: [
    "100", "200", "300", "400",
    "500", "600", "700", "800", "900",
  ],
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: ["400"], // só tem esse
  subsets: ["latin"],
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const permanent = Permanent_Marker({
  variable: "--font-dancing",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: 'Smile_Photo',
  description: 'Uma galeria de imagens com busca por tags e formatos',
  icons: {
    icon: '/camera.svg',
  },
  openGraph: {
    title: 'Smile_Photo',
    description: 'Veja, busque e gerencie suas imagens com facilidade.',
    url: 'https://fotografadosorriso.app',
    siteName: 'ImageLite',
    type: 'website',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} ${marcellus.variable} ${bebas.variable} ${dancing.variable} ${permanent.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
