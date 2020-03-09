import { useState } from "react";
import Helmet from "react-helmet";
import exhibitors from "../__data__/exhibitors.json";
import Exhibitor from "../components/Exhibitor";

const Exhibitors = () => {
  const [currentExhibitor, setCurrentExhibitor] = useState(exhibitors[0]);

  return (
    <React.Fragment>
      <Helmet>
        <title>Exhibitors</title>
      </Helmet>
      <div className="sticky top-0">
        <ul className="flex flex-row flex-wrap text-sm">
          {exhibitors.map(e => {
            return (
              <li key={e.name} className="mr-sm mb-sm">
                <span
                  className={
                    e.name === currentExhibitor.name ? "underline" : null
                  }
                  onClick={() => {
                    setCurrentExhibitor(e);
                  }}
                >
                  {e.name}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <section className="grid gap-grid gap-grid grid-cols-4 md:grid-cols-8 ">
        <div className="col-span-4">
          <Exhibitor
            time={currentExhibitor.time}
            location={currentExhibitor.location}
            title={currentExhibitor.name}
            description={currentExhibitor.description}
            handle={currentExhibitor.handle}
            url={currentExhibitor.url}
          />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Exhibitors;
