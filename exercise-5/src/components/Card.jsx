export default function Card(props) {
    return (   
      <li>
        <button>
          <img src={props.image}/>
          <h3>{props.name}</h3>
          <p>{props.class}</p>
        </button>
      </li>
    );
  }

  
  
  