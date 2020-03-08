import { useContext } from "react";
import StaticConfigContext from "../contexts/StaticConfig";

export default function Nav() {
  const { currentPage } = useContext(StaticConfigContext);

  function renderLink({ url, text, override }) {
    const linkText = text.toLowerCase();
    const className =
      linkText === currentPage || override === currentPage ? "font-bold" : "";

    return (
      <a className={`px-sm ${className}`} href={url}>
        {text}
      </a>
    );
  }

  return (
    <nav>
      <ul className="flex">
        <li className="nav__link">
          {renderLink({ url: "/", text: "About", override: "index" })}
        </li>
        <li className="nav__link">
          {renderLink({ url: "/exhibitors", text: "Exhibitors" })}
        </li>
        <li className="nav__link">
          {renderLink({ url: "/programs", text: "Programs" })}
        </li>
        <li className="nav__link">
          {renderLink({ url: "/sponsorship", text: "Sponsorship" })}
        </li>
      </ul>
    </nav>
  );
}
