// src/app/layout.tsx
import "./globals.css";
import SideNav, { NavItem } from "@/components/sidenav";

const items: NavItem[] = [
  { title: "Om meg", path: "/" },
  { title: "CV", path: "/cv" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no">
      <body className="flex min-h-screen">
        <SideNav items={items} />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
