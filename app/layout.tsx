import "./globals.css";
import QueryProvider from "@/components/QueryProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <QueryProvider>
          {children}
      </QueryProvider>
      </body>
    </html>
  );
}
