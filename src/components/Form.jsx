import React, { useState } from "react";

const publicationStyle = {
  margin: ".15em",
  marginBottom: ".2em",
  flex: "1",
};

const Form = (props) => {
  const cmpdTemplate = {
    name: "",
    abbreviation: "",
    chemicalFormula: "",
    hep: "",
    publication: {
      journal: "",
      year: "",
      volume: "",
      pageNumber: "",
    },
  };
  const [input, setInput] = useState(cmpdTemplate);
  const handleInput = (e) => {
    console.log(e.target.id);
    e.preventDefault();
    let { id, value } = e.target;
    setInput((prev) => ({ ...prev, [id]: value }));
  };
  const handlePublicationInput = (e) => {
    console.log(input);
    e.preventDefault();
    let { id, value } = e.target;
    setInput((prev) => ({
      ...prev,
      publication: { ...prev.publication, [id]: value },
    }));
  };

  return (
    <div
      style={{
        margin: "1em 0",
        marginBottom: "2em",
        height: "18em",
        width: "25em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <h3>Add New Compound</h3>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        value={input.name}
        onChange={handleInput}
      />
      <input
        type="text"
        name="abbreviation"
        id="abbreviation"
        placeholder="Abbreviation"
        value={input.abbreviation}
        onChange={handleInput}
      />
      <input
        type="text"
        name="chemicalFormula"
        id="chemicalFormula"
        placeholder="Chemical Formula"
        value={input.chemicalFormula}
        onChange={handleInput}
      />
      <input
        type="text"
        name="hep"
        id="hep"
        placeholder="HEP"
        value={input.hep}
        onChange={handleInput}
      />
      <p style={{ margin: "0.25em" }}>Publication</p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          name="journal"
          id="journal"
          placeholder="Journal"
          style={publicationStyle}
          value={input.publication.journal}
          onChange={handlePublicationInput}
        />
        <input
          type="text"
          name="year"
          id="year"
          placeholder="Year"
          style={publicationStyle}
          value={input.publication.year}
          onChange={handlePublicationInput}
        />
        <input
          type="text"
          name="volume"
          id="volume"
          placeholder="Volume"
          style={publicationStyle}
          value={input.publication.volume}
          onChange={handlePublicationInput}
        />
        <input
          type="text"
          name="pageNumber"
          id="pageNumber"
          placeholder="Page Numbers"
          style={publicationStyle}
          value={input.publication.pageNumber}
          onChange={handlePublicationInput}
        />
      </div>
      <button
        onClick={() => {
          props.setData((prev) => [...prev, input]);
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Form;
