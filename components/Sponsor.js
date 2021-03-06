export default function Sponsor(props) {
  const { url, imgSrc, name } = props;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="m-sm">
      <img src={imgSrc} alt={name} />
    </a>
  );
}
