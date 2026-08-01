import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Social Clip Studio — من الرابط إلى التايملاين",
  description: "Social Clip Studio يجمع تنزيل الفيديو وSocial Workspace وFlow Studio وB-Roll Studio داخل بيئة المونتاج.",
  icons: {
    icon: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/favicon.svg`,
    shortcut: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/favicon.svg`,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
