import { GeistSans } from "geist/font/sans";
import Header from "@/components/Header";
import "./globals.css";

const logoAlt = "Muse Logo";
const options = ["Projects", "About", "Connect"];
const logoSrc =
  "https://ygrygectjhacikpwtrna.supabase.co/storage/v1/object/public/Pictures/Lib/HeaderLogo.png?t=2024-02-20T16%3A15%3A12.685Z";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Muse Webiste",
  description: "Muse editorial a student led editorial",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="text-foreground bg-black text-white">
        <Header logoAlt={logoAlt} logoSrc={logoSrc} options={options} />
        <main className="flex min-h-screen flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
