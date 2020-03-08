import App from "next/app";
import { StaticConfigProvider } from "../contexts/StaticConfig";
import Logo from "../components/Logo";
import Nav from "../components/Nav";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const currentPage = Component.name.toLowerCase();

    return (
      <StaticConfigProvider value={{ currentPage }}>
        <div className={`${currentPage} fixed inset-0 m-lg p-lg overflow-auto`}>
          <header className="flex" style={{ height: "226px" }}>
            <Logo className="mr-auto" />
            <Nav />
          </header>
          <main className="">
            <Component {...pageProps} />
          </main>
          <footer className="grid grid-cols-8 col-gap-lg mt-lg">
            <div className="col-span-4">Shunpike</div>
            <div className="col-span-4">Contact</div>
          </footer>
        </div>
      </StaticConfigProvider>
    );
  }
}

export default MyApp;
