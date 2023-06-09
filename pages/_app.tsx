import '../styles/root.scss';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import CursorManager from '../components/CustomCursor/CursorManager';
import CustomCursor from '../components/CustomCursor';
import { useState } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const [loader, setLoader] = useState(true);
  const router = useRouter();

  return (
    <CursorManager>
      <>
        <CustomCursor />
        <>
          <Header />
          <Component {...pageProps} />
        </>
      </>
    </CursorManager>
  );
}

export default MyApp;
