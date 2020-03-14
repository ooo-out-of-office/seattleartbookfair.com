const Index = () => {
  return (
    <React.Fragment>
      <section className="grid gap-grid grid-cols-4 md:grid-cols-8 ">
        <aside className="col-span-2 md:col-start-7">
          <h2>Mary 8—10, 2020</h2>
          <div>
            Friday 5 PM–8 PM <br />
            Saturday 11 AM–6 PM <br />
            Sunday 11 AM–5 PM
          </div>
        </aside>
        <div className="col-span-4 md:col-span-6 md:row-start-1">
          <p className="text-md lg:text-lg">
            The Seattle Art Book Fair is a free, weekend-long festival that
            celebrates all kinds of art books. The inaugural fair will feature
            local, national, and international artists, designers, and
            organizations working in independent and experimental publishing.
            Alongside the fair there will be talks, workshops, and special
            projects to help expand the dialogue in contemporary arts
            publishing.
          </p>
        </div>
        <div className="col-span-4">
          <h2>About Art Books</h2>
          <p>
            Art books are a broad category of publications by artists,
            designers, and makers that reflect on books or periodicals as a
            medium and publishing as an artistic practice. Art books often
            combine type, images, and materials in thoughtful ways that push the
            possibilities of what books can be.
          </p>
        </div>
        <div className="col-span-4">
          <h2>SABF 2020 Team</h2>
          <p>
            Art books are a broad category of publications by artists,
            designers, and makers that reflect on books or periodicals as a
            medium and publishing as an artistic practice. Art books often
            combine type, images, and materials in thoughtful ways that push the
            possibilities of what books can be.
          </p>
        </div>
        <div className="col-span-4">
          <h2>Powered by Shunpike</h2>
          <p>
            Seattle Art Book Fair is powered by Shunpike, an organization
            empowering artists through equitable access to vital expertise,
            opportunities, and business services.
          </p>
        </div>
        <div className="col-span-4">
          <h2>Get Involved</h2>
          <p>
            Interested in volunteering with Seattle Art Book Fair? Get in touch
            at{" "}
            <a href="mailto:info@seattleartbookfair.org">
              info@seattleartbookfair.org
            </a>
            .
          </p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Index;
