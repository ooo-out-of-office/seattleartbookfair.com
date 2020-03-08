import Document, { Head, Main, NextScript } from "next/document";

export default class SeattleArtBookFairDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <link href="/styles.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div className="border-white border-lg fixed inset-0 pointer-events-none" />
        </body>
      </html>
    );
  }
}
