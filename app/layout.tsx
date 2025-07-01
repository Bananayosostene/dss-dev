import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "DSS | 24/7 Digital Support Solutions",
  description:
    "Providing 24/7 IT support, remote services, and on-site assistance in Kigali, Rwanda.",
  keywords: [
    "IT Support",
    "DSS",
    "Digital Support",
    "Remote Help",
    "Tech Solutions Kigali",
  ],
  authors: [{ name: "DSS Team", url: "https://dss-dev.vercel.app/" }],
  creator: "DSS.dev",
  metadataBase: new URL("https://dss-dev.vercel.app/"),
  openGraph: {
    title: "DSS | Digital Support Solutions",
    description: "Get reliable 24/7 remote and on-site IT support.",
    url: "https://dss-dev.vercel.app/",
    siteName: "DSS",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  other: {
    "google-site-verification": "Z8Zyh_IB34EXGkUIrbpPqFnF4gLwm3S80-TscqYCSMQ",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
