import "../app/globals.css"; // Import Tailwind CSS styles
import { Sora } from "next/font/google";
import { ThemeProvider } from "@/providers/themeProvider";
import "@radix-ui/themes/styles.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
