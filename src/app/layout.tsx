import './globals.css';
import { Open_Sans } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DarkModeContext from 'context/DarkModeContext';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: `Tae's blog`,
    template: `Tae's blog | %s`,
  },
  description: `Fullstack developer Tae's blog`,
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={sans.className} suppressHydrationWarning >
      <body className="min-h-screen">
        <div className='flex flex-col w-full max-w-screen-2xl mx-auto min-h-screen'>
        <DarkModeContext >
          <Header />
          <main className='grow'>{children}</main>
          <Footer />
        </DarkModeContext>
        </div>
      </body>
    </html>
  );
}
