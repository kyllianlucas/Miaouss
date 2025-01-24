import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { postsServices } from "@/services/postsServices";
import { useAuth } from "@/authProvider";
import { useEffect } from "react";

function InputPostMessage({ user }) {
  const [text, setText] = useState("");

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const addPost = async () => {
    try {
      await postsServices.post({
        content: text,
        users: user,
        creationDate: Date.now(),
      });
      setText("");
    } catch (error) {
      console.log(error);
      const notify = () =>
        toast("Une erreur est survenue lors de la création du post");
    }
  };

  return (
    <>
      <div className="grid grid-cols-6 gap-5 w-full items-center justify-center">
        <div className="col-span-5">
          <Textarea
            type="textarea"
            placeholder="Rédigez votre post..."
            rows="7"
            onChange={handleInput}
            value={text}
          />
        </div>
        <Button onClick={addPost}>Envoyer</Button>
      </div>
    </>
  );
}

export default InputPostMessage;
