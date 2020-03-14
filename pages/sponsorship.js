import { Helmet } from "react-helmet-async";
import sponsorData from "../__data__/sponsor.json";
import Sponsor from "../components/Sponsor";

const exampleSponsors = Array.from(new Array(10), () => sponsorData);

const Sponsorship = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Sponsorship</title>
      </Helmet>
      <section className="grid gap-grid grid-cols-4 md:grid-cols-8 ">
        <div className="col-span-4">
          <h2>Thank you to our sponsors:</h2>
          <p>
            Diam tellus pulvinar odio a elementum placerat risus penatibus
            nullam donec enim nulla ornare est mattis dui diam nisl, posuere dui
            sit nunc, molestie sed mi nunc turpis natoque dui amet nisl vitae,
            mattis elit eget et, sit amet diam
          </p>

          <h2>Special thanks</h2>
          <p>
            Lorem ipsum, Lorem ipsum, Lorem ipsum dolor, Lorem ipsum, Lorem
            ipsum, Lorem ipsum dolor, Lorem ipsum, Lorem ipsum, Lorem ipsum
            dolor, Lorem ipsum, Lorem ipsum dolor, Lorem ipsum, Lorem ipsum,
            Lorem ipsum dolor
          </p>

          <h2>Interested in sponsoring the SABF?</h2>
          <p>
            Get in touch at{" "}
            <a href="mailto:info@seattleartbookfair.org">
              info@seattleartbookfair.org
            </a>{" "}
            or see our sponsorship packet here.
          </p>
        </div>
        <div className="col-span-4 flex flex-wrap space-between">
          {exampleSponsors.map(s => {
            return <Sponsor url={s.url} imgSrc={s.imgSrc} name={s.name} />;
          })}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Sponsorship;
