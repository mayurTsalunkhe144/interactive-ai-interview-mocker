import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export async function generateMetadata() {
  return {
    title: "AI Mock Interview Platform",
    description: "Practice AI-powered mock interviews and ace your job search.",
    other: {
      "google-site-verification": "W5cIYmHjQWGx8gun7Ru9L4QGXEQD1EaQURHqDXVWrlA",
    },
  };
}

// export const metadata: Metadata = {
//   title: "Ai-interview_mocker",
//   description: "Ai interview mocker",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${monaSans.variable} ${monaSans.variable} antialiased pattern`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
