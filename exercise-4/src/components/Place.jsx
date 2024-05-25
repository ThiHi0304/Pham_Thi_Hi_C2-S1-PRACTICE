export default function Place(props) {
  return (
    <li key="the place id" className="place-item">
      <button>
        <img src={props.image.src} alt={props.image.alt}/>
        <h3>{props.title}</h3>
      </button>
    </li>
  );
}
