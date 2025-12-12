import type { Metadata } from "next";
import "./resources/styles/globals.css";
import NavBarWrapper from "./components/navbarWrapper";
export const metadata: Metadata = {
  title: "Bycey Excavations",
  description: "Bycey Excavations provides professional earthmoving, excavation, and waterpipe replacement services across Victoria, Australia. Safe, reliable, and efficient solutions for residential, commercial, and municipal projects.",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="vZLXFrB9nDHb9eFf8TPWLKy433Ec0L9V1jCwH7tEMk4" />
      </head>
      <body>
        <NavBarWrapper />
        {children}
      </body>
    </html>
  );
}
