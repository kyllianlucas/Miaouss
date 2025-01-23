import React from "react";
import { useEffect, useState } from "react";
import Display from "./display";
import MyButton from "./myButton";

function Incrementeur() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log(value);

    return () => {
      console.log("unmount");
    };
  }, []);

  return (
    <>
      <h3>Mon incrementeur :</h3>
      <Display value={value} />
      <MyButton setValue={setValue} value={value} />
    </>
  );
}

export default Incrementeur;
