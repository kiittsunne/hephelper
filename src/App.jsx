import { useState } from "react";
import sampleData from "./data/sampleData.json";
import Card from "./components/Card";
import Form from "./components/Form";

function App() {
  const [data, setData] = useState(sampleData);
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <div>
        <button
          onClick={() => {
            setShow((prev) => !prev);
          }}
        >
          {show ? "Close" : "Add New"}
        </button>
      </div>
      {show && <Form setData={setData} />}
      <div>
        {data.map((compound) => (
          <Card {...compound} />
        ))}
      </div>
    </div>
  );
}

export default App;
