import Provider from '@components/Provider';
import Navbar from '@components/globals/Navbar';
import '@styles/globals.css';
import { Poppins } from '@next/font/google';
import Footer from '@components/globals/Footer';

export const metadata = {
  title: 'PromptPal',
  description: 'Discover and share AI prompts',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicon/apple-touch-icon.png',
    },
  ],
}

const mainFont = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-main-font',
});

const layout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className={`${mainFont.variable} font-sans flex flex-col min-h-screen`}>
            <Navbar />
            <div className='app'>
              {children}
            </div>
            <Footer />
          </main>
        </Provider>
      </body>
    </html>
  )
}

export default layout
