import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import GlobalNav from "@/components/GlobalNavbar";

// Initialize the fonts
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "AI Chatbot",
  description: "Next.js AI Chatbot with app router",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-background font-primary">
        <GlobalNav />
        {children}
      </body>
    </html>
  );
}
