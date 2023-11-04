import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />

        <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v2.9.1/mapbox-gl.css' rel='stylesheet' />
        {/* https://api.whatsapp.com/send?phone=Tu-n%C3%B9mero-aqu%C3%AD */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}