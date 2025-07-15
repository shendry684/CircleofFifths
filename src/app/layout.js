// src/app/layout.jsx
import "./globals.css";
import Link from "next/link";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white">
        <header className="p-4 bg-slate-800 flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/scales">Scales</Link>
          <Link href="/chords">Chords</Link>
          <Link href="/glossary">Glossary</Link>
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
