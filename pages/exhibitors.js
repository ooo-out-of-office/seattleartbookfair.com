import Helmet from "react-helmet";

const Exhibitors = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Exhibitors</title>
      </Helmet>
      <section className="grid gap-grid gap-grid grid-cols-4 md:grid-cols-8 ">
        <div className="col-span-4">
          <div>Exhibitors</div>
        </div>
        <div className="col-span-4">
          <div>Exhibitors</div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Exhibitors;
