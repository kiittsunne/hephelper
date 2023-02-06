import { useState, useEffect } from "react";
// import sampleData from "./data/sampleData.json";
import Card from "./components/Card";
import Form from "./components/Form";

// constants
const ENDPOINT = "http://localhost:5000/api/compounds";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getCompounds = async () => {
      const allCompounds = await (
        await fetch(ENDPOINT, { method: "GET" })
      ).json();
      setData(allCompounds);
    };
    getCompounds();
  }, []);
  const handleSetData = async (data) => {
    const newCompound = await (
      await fetch(ENDPOINT, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
    ).json();

    if (!newCompound._id) {
      console.log(newCompound);
    } else {
      setData((prev) => [...prev, data]);
    }
  };
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
      {show && <Form handleSetData={handleSetData} />}
      <div>
        {data.map((compound) => (
          <Card {...compound} />
        ))}
      </div>
    </div>
  );
}

export default App;
