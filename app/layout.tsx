import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = process.env.GITHUB_ACTIONS === "true"
  ? "https://abdalla7ramadan57-a11y.github.io/social-clip-studio/"
  : "https://social-clip-studio-ar.abdalla7-ramadan57.chatgpt.site/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Social Clip Studio — من الرابط إلى التايملاين",
  description: "Social Clip Studio تساعد على التعلّم وصناعة الكورسات من روابط YouTube وتنظيم الدروس والـPlaylists — بسعر 500 جنيه.",
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
  },
  openGraph: {
    title: "Social Clip Studio — نظّم دروسك وابنِ كورسك",
    description: "تنظيم دروس YouTube والـPlaylists وصناعة محتوى الكورسات — بسعر 500 جنيه.",
    url: siteUrl,
    siteName: "Social Clip Studio",
    locale: "ar_EG",
    type: "website",
    images: [{ url: `${basePath}/og.png`, width: 1734, height: 907, alt: "Social Clip Studio — 500 جنيه" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Clip Studio — نظّم دروسك وابنِ كورسك",
    description: "تنظيم دروس YouTube والـPlaylists وصناعة محتوى الكورسات — بسعر 500 جنيه.",
    images: [`${basePath}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
