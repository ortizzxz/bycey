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
        <meta
          name="google-site-verification"
          content="zRN_OgbeO74xrxowX_tOSRK8jdRW6U1xGltxfoQ6Ts0"
        />
      </head>
      <body>
        <NavBarWrapper />
        {children}
      </body>
    </html>
  );
}
