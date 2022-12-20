import { ThemeProvider } from 'next-themes'
import { fuchsia } from 'tailwindcss/colors';
import NextProgress from "nextjs-progressbar"
import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <NextProgress color={fuchsia[300]} height={10}/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
