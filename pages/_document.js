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
          content="Experience a New Way to Learn Prompt Engineering with AI Coaching"
          key="description"
        />
        <meta
          property="og:image"
          content="https://cdn.buildspace.so/courses/gpt3-writer/project-og.jpg"
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
