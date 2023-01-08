import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          property="og:title"
          content="Prompt Engineering for Boomers"
          key="title"
        />
        <meta
          property="og:description"
          content="Learn Prompt Engineering with AI Coaching"
          key="description"
        />
        <meta
          property="og:image"
          content="https://external-preview.redd.it/hfuRA8PDnoG_yJMXSSJNvFKE9mw3_yOgvEFbgPsM9gE.jpg?auto=webp&s=1b7182206a93b98daa9caf1c3fad1b3049ec7dd8"
          // backup below
          // https://i.guim.co.uk/img/media/3aab8a0699616ac94346c05f667b40844e46322f/0_123_5616_3432/master/5616.jpg?width=620&quality=45&dpr=2&s=none
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
