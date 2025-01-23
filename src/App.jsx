import { useState, useEffect } from "react";
import "./App.css";
import { postsServices } from "./services/postsServices";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postsServices.getAll().then((res) => setPosts(res.documents));
    const unsub = postsServices.listen(setPosts);

    return () => {
      unsub();
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    //postsServices.post(e)
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>message</h1>
        <input type="text" />
        <button>envoyer</button>
      </form>
      <ul>
        {posts.map((val) => {
          return <li key={val.id}>{val}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
