import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LytriX - сервер майнкрафт",
  description: "LytriX SMP - приватный, модовый майнкрафт сервер",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
}
