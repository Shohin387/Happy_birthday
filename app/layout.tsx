import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Balloons from '@/public/png.png'
import HeartBAllons from '@/public/OIP (4).png'
import RedBllon from '@/public/OIP (2).png'
import HeartBallon from '@/public/OIP (3).png'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Happy birthday",
  openGraph: {
    title: "Сайт для поздравления Эли",
    description: "Привет Эля, Этот сайт был разработан Кириллом для поздравления тебя с днем рождения. Исключительно для тебя!!!",
    siteName: 'Эля Продакшн',
    images: [
      {
        width: 1200,
        height: 630,
        url: '/photos/Elya.jpg',
        alt: 'Это Эля'
      }
    ]
  },
  description: "This app for Eliya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Image className="fixed top-1/4 balloonsAnim"  width={350} height={300} alt="balls" src={Balloons}/>
         <Image className="fixed top-1/3 left-3/10 balloonHeartAnim"  width={200} height={200} alt="Heart" src={HeartBallon}/>
        {children}
        <Image className="fixed top-1/2 left-7/10 balloonsHeartAnim"  width={350} height={300} alt="Heart" src={HeartBAllons}/>
        <Image className="fixed z-10 top-1/3 left-6/10 balloonAnim"  width={100} height={100} alt="Heart" src={RedBllon}/>
       
      </body>
    </html>
  );
}
