import '~/styles/global.css';

import { Container } from '~/components/Container';
import { Header } from '~/components/Header';
import { Footer } from '~/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body>
        <div className="min-h-screen dark:text-gray-50 dark:bg-gray-900 text-gray-900 bg-white">
          <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8 pt-20">
            <Header />
          </div>
          <main className="py-10 space-y-5">{children}</main>
          <Container>
            <Footer />
          </Container>
        </div>
      </body>
    </html>
  );
}
