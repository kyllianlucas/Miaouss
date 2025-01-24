import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

function InputPostMessage() {
  const [text, setText] = useState("");

  return (
    <>
      <div className="grid grid-cols-6 gap-5 w-full items-center justify-center">
        <div className="col-span-5">
          <Textarea
            type="textarea"
            placeholder="Rédigez votre post..."
            rows="7"
          />
        </div>
        <Button>Envoyer</Button>
      </div>
    </>
  );
}

export default InputPostMessage;
