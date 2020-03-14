import { Helmet } from "react-helmet-async";
import exhibitors from "../__data__/exhibitors.json";
import Exhibitor from "../components/Exhibitor";

const Exhibitors = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Exhibitors</title>
      </Helmet>
      <div>
        <ul className="flex flex-auto flex-row flex-wrap text-sm">
          {exhibitors.map(e => {
            return (
              <li key={e.name} style={{ width: "20%" }}>
                <a href={`#${e.name.toLowerCase().replace(/\s/gi, "-")}`}>
                  {e.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <section className="grid gap-grid gap-grid grid-cols-4 md:grid-cols-8 ">
        <div className="col-span-4">
          {exhibitors.map(e => {
            return (
              <Exhibitor
                id={`${e.name.toLowerCase().replace(/\s/gi, "-")}`}
                time={e.time}
                location={e.location}
                title={e.name}
                description={e.description}
                handle={e.handle}
                url={e.url}
              />
            );
          })}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Exhibitors;
