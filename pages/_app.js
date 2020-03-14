import App from "next/app";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { StaticConfigProvider } from "../contexts/StaticConfig";
import Logo from "../components/Logo";
import Nav from "../components/Nav";

class SeattleArtBookFair extends App {
  render() {
    const { Component, pageProps } = this.props;
    const currentPage = Component.name.toLowerCase();

    return (
      <HelmetProvider>
        <Helmet
          htmlAttributes={{ lang: "en" }}
          titleTemplate="%s — Seattle Art Book Fair"
          defaultTitle="Seattle Art Book Fair"
        >
        </Helmet>
        <StaticConfigProvider value={{ currentPage }}>
          <div
            className={`${currentPage} fixed inset-0 md:m-lg p-lg overflow-auto`}
          >
            <header className="flex" style={{ height: "226px" }}>
              <a href="/" className="mr-auto">
                <Logo />
              </a>
              <Nav />
            </header>
            <main className="">
              <Component {...pageProps} />
            </main>
            <footer className="grid gap-grid grid-cols-8 mt-lg">
              <div className="col-span-4">Shunpike</div>
              <div className="col-span-4">Contact</div>
            </footer>
          </div>
        </StaticConfigProvider>
      </HelmetProvider>
    );
  }
}

export default SeattleArtBookFair;
