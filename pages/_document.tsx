import { Html, Head, Main, NextScript } from 'next/document';
export default function Document() {
  const isProduction = process.env.NODE_ENV === 'production';

  return (
    <Html lang='en' title='interior studio'>
      <Head title='casa lari'  lang='en'>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
