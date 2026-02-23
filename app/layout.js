import Providers from "./providers";
import "./globals.css";

export const metadata = {
  title: "Todo Dashboard",
  description: "RoundTechSquare Assignment",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}