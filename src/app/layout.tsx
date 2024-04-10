import { Open_Sans } from 'next/font/google'

import { GlobalStyle } from '../GlobalStyle/GlobalStyle'

const openSans = Open_Sans({
  weight: ['300', '400', '600', '700'],
  style: ['normal'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-open-sans',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <GlobalStyle />
      <html lang="ru" className={openSans.className}>
        <link rel="icon" href="/favicon-32x32.png" />
        <body>{children}</body>
      </html>
    </>
  )
}
