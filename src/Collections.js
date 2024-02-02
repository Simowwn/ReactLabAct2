function Collections(props) {
  const collectiblesClasses = "collection-card";

  return (
    <div className={collectiblesClasses}>
      <div className="">
        <img
          className="collectible-img"
          src={props.collectiblesObj.photoName}
          alt={props.collectiblesObj.name}
        />
        <div className="card-content">
          <h2 className="card-name">{props.collectiblesObj.name}</h2>
          <p>{props.collectiblesObj.body}</p>
          <p>{props.collectiblesObj.pose}</p>
          <p>{props.collectiblesObj.found}</p>
          <hr></hr>
          <p>{props.collectiblesObj.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Collections;
