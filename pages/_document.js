import Document, { Head, Main, NextScript } from "next/document";

export default class SeattleArtBookFairDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
          <link href="/styles.css" rel="stylesheet" />
          <link
            href="https://fonts.googleapis.com/css?family=Chivo&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div className="border-white md:border-lg fixed inset-0 pointer-events-none" />
        </body>
      </html>
    );
  }
}
