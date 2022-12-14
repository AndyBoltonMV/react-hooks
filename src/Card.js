function Card(props) {
  return (
    <>
      <h3>{props.name}</h3>
      <p>{props.content}</p>
      <input onChange={(event) => props.function(event.target.value)} />
    </>
  );
}

export default Card;
