import '@/styles/globals.scss';
import { useRouter } from "next/router";
import MainLayout from '@/components/layouts/MainLayout';
import RegisterLayout from '@/components/layouts/RegisterLayout';

export default function App({ Component, pageProps }) {
 
  const router = useRouter();

  return (
    <>
      {
        router.pathname.startsWith("/auth") ? (
          <RegisterLayout>
            <Component {...pageProps} />
          </RegisterLayout>
        )
          : (
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          )
      }
    </>
  )
}