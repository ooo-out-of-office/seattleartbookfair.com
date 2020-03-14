import App from "next/app";
import { Helmet, HelmetProvider } from "react-helmet-async";
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
        ></Helmet>
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
            <footer className="grid gap-grid grid-cols-8 mt-lg py-grid">
              <div className="col-span-8 md:col-span-2">
                <p>May 8–10, 2020</p>
                <p>
                  Washington Hall
                  <br />
                  153 14th Ave
                  <br />
                  Seattle, WA 98122
                </p>
                <p>
                  The Seattle Art Book Fair is powered by{" "}
                  <a href="http://www.shunpike.org/">Shunpike</a>.
                </p>
              </div>
              <div className="col-span-8 md:col-start-5 md:col-span-4">
                <a href="mailto:info@seattleartbookfair.org">
                  info@seattleartbookfair.org
                </a>

                <ul>
                  <li>
                    <a href="https://www.instagram.com/seattleartbookfair">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/SeaArtBookFair">Twitter</a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/seattleartbookfair">
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
            </footer>
          </div>
        </StaticConfigProvider>
      </HelmetProvider>
    );
  }
}

export default SeattleArtBookFair;
