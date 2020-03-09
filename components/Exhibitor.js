export default function Exhibitor(props) {
  const { time, location, title, description, handle, url } = props;

  return (
    <article>
      <div className="flex">
        <span className="mr-auto">{time}</span>
        <span>{location}</span>
      </div>

      <h1>{title}</h1>
      <p>{description}</p>

      <div>
        <a rel="noopener" target="_blank" href={handle}>
          {handle}
        </a>
        <br />
        <a rel="noopener" target="_blank" href={url}>
          {url}
        </a>
      </div>
    </article>
  );
}
