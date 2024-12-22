import Providers from "./components/Providers";
import { M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";

const mPlusRounded = M_PLUS_Rounded_1c({
  variable: "--font-m-plus-rounded",
  subsets: ["latin"],
  weight: ["700"], // Ajuste selon les poids nécessaires
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${mPlusRounded.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
