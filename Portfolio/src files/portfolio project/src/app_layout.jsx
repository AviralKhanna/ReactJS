import './globals.css';
import { Inter } from 'next/font/google';
import Header from './Components/app_components_Header.js'; // Updated path
import Footer from './Components/app_components_Footer.js'; // Updated path

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Your Name - Professional Portfolio',
  description: 'Showcase of professional work and skills of Your Name',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-50`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
