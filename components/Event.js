export default function Event(props) {
  const { time, location, title, description, handle, url } = props;

  return (
    <article className="my-lg">
      <div className="flex">
        <span className="mr-auto">{time}</span>
        <span>{location}</span>
      </div>

      <h1>{title}</h1>
      <p>{description}</p>

      <div>
        {handle}
        {url}
      </div>
    </article>
  );
}
