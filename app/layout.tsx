import type { Metadata } from "next";
import "./resources/styles/globals.css";
import NavBarWrapper from "./components/navbarWrapper";
export const metadata: Metadata = {
  title: "Bycey Excavations",
  description: "Earthmoving, Excavation and Watermain Replacement in Victoria",
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
