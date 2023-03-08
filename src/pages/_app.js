import '@/styles/globals.scss';
import React from 'react';
import { useRouter } from "next/router";
import MainLayout from '@/components/layouts/MainLayout';
import RegisterLayout from '@/components/layouts/RegisterLayout';

export const UserContext = React.createContext();

export default function App({ Component, pageProps }) {
 
  const router = useRouter();

  return (
    <UserContext.Provider value="test">
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
    </UserContext.Provider>
  )
}