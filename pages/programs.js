import Helmet from "react-helmet";
import eventData from "../__data__/event.json";
import Event from "../components/Event";

const day1events = Array.from(new Array(3), () => eventData);
const day2events = Array.from(new Array(3), () => eventData);

const Programs = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Programs</title>
      </Helmet>
      <section className="grid gap-grid grid-cols-4 md:grid-cols-8 ">
        <div className="col-span-4">
          <h2 className="border-b mb-sm pb-sm text-base">Saturday May 9</h2>
          {day1events.map(e => {
            return (
              <Event
                time={e.time}
                location={e.location}
                title={e.title}
                description={e.description}
                handle={e.handle}
                url={e.url}
              />
            );
          })}
        </div>
        <div className="col-span-4">
          <h2 className="border-b mb-sm pb-sm text-base">Sunday May 10</h2>
          {day2events.map(e => {
            return (
              <Event
                time={e.time}
                location={e.location}
                title={e.title}
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

export default Programs;
