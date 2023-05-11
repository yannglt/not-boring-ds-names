import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const website = {
    title: "Not Boring Design System Names by Specify",
    description: "Your design system is the backbone of your brand's visual identity, but a great name can take it to the next level. With the power of GPT-3, we'll help you generate a name that captures your brand's unique characteristics, industry, and personality.",
    url: "",
    image: "",
  }

  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />

        <title>{website.title}</title>
        <meta name="description" content={website.description} />

        <meta property="og:url" content={website.url} />
        <meta property="og:title" content={website.title} />
        <meta property="og:description" content={website.description} />
        <meta property="og:image" content={website.image} />
        <meta property="og:image:alt" content={website.title} />
        <meta property="og:image:width" content="2400" />
        <meta property="og:image:height" content="1260" />
        <meta property="og:site_name" content={website.title} />
        <meta property="og:type" content="website" />

        <meta name="twitter:site" content="@specifyapp" />
        <meta name="twitter:title" content={website.title} />
        <meta name="twitter:description" content={website.description} />
        <meta name="twitter:creator" content="@specifyapp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={website.image} />
        <meta name="twitter:image:alt" content={website.title} />

        <meta name="theme-color" content="#000000" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
