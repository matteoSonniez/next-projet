import '@/styles/globals.scss'
import Header from '@/components/partials/Header';

export default function App({ Component, pageProps }) {
 
  return (
    <>
      <Header/>
      <Component {...pageProps} />
    </>
  )
}