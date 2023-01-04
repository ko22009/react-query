import { Html, Head, Main, NextScript } from "next/document";

import manifest from "../public/manifest.json";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="application-name" content="PWA App" />
        <meta name="application-name" content={manifest.name} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={manifest.name} />
        <meta name="description" content={manifest.description} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content={manifest.theme_color} />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
