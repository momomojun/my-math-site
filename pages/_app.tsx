import type { AppProps } from 'next/app'
import 'nextra-theme-docs/style.css'
import 'katex/dist/katex.min.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
