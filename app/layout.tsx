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
    title: "Prepgen",
    description: "Practice AI-powered mock interviews and ace your job search.",
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
      <meta
        name="google-site-verification"
        content="GTRHOBOC5oKzxaX3Ueu8NdyCEdEplHl_ERlAAqIawgg"
      />
      <meta
        name="keywords"
        content="interview preparation, coding questions, technical interviews, HR interviews, PrepGen, programming challenges"
      />
      <meta name="author" content="PrepGen Team" />
      <body
        className={`${monaSans.variable} ${monaSans.variable} antialiased pattern`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
