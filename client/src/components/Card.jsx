import React from "react";

const Card = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>
        Abbreviation: {props.abbreviation} |{" "}
        <span>Chemical Formula: {props.chemicalFormula}</span> | HEP:
        <span>{props.hep}</span>
      </p>
      <p>
        <span style={{ fontStyle: "italic" }}>{props.publication.journal}</span>
        , <span style={{ fontWeight: "bold" }}>{props.publication.year}</span>,{" "}
        {props.publication.volume}, {props.publication.pageNumber}
      </p>
    </div>
  );
};

export default Card;
