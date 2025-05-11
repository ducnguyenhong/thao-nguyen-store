import { Provider } from '@/components/ui/provider';
import { Footer, Header } from '@/layouts';
import { getMetadata } from '@/utils/meta-data';
import { Lexend_Deca } from 'next/font/google';
import './globals.css';

const fontFamily = Lexend_Deca({ subsets: ['latin', 'vietnamese'] });

export const metadata = getMetadata();

export default function RootLayout({ children }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={fontFamily.className}>
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
