export default function Exhibitor(props) {
  const { time, location, title, description, handle, url, ...other } = props;

  return (
    <article className="my-lg" {...other}>
      <div className="flex">
        <span className="mr-auto">{time}</span>
        <span>{location}</span>
      </div>

      <h1>{title}</h1>
      <p>{description}</p>

      <div>
        {handle && (
          <a rel="noopener noreferrer" target="_blank" href={handle}>
            {handle}
          </a>
        )}
        <br />
        <a rel="noopener noreferrer" target="_blank" href={url}>
          {url}
        </a>
      </div>
    </article>
  );
}
