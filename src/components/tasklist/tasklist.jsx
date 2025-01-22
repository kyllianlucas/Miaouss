import React, { useEffect } from "react";
import { useState } from "react";

export default function Tasklist() {
  const [text, setText] = useState("");
  const [tab, setTab] = useState([]);

  useEffect(() => {
    //parsing
  }, []);

  useEffect(() => {
    //save()
  }, [tab]);

  const save = () => {
    //stringify
  };

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const addTable = () => {
    setTab([...tab, { id: Date.now(), value: text }]);
  };
  const deleteFromTab = (id) => {
    setTab(tab.filter((el) => el.id !== id));
  };
  return (
    <>
      <h3>Liste de taches :</h3>
      <ul>
        {tab.map((el) => (
          <li key={el.id}>
            id:{el.id}
            value:{el.value}
            <button onClick={() => deleteFromTab(el.id)}>X</button>
          </li>
        ))}
      </ul>
      <input type="text" onChange={handleInput} value={text} />
      <button onClick={addTable}>add</button>
    </>
  );
}
