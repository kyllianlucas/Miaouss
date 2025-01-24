import { useState, useEffect } from "react";
import "./App.css";
import { postsServices } from "./services/postsServices";
import { useAuth } from "./authProvider";

function App() {
  const [posts, setPosts] = useState([]);
  const { login, user } = useAuth();
  useEffect(() => {
    postsServices.getAll().then((res) => setPosts(res.documents));
    const unsub = postsServices.listen(setPosts);

    return () => {
      unsub();
    };
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email: "a@a.fr", password: "testtest" });
    const post = {
      content: e.target[0].value,
      users: user,
    };
    console.log(post);
    postsServices.post(post);
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
          return (
            <li style={{ color: "black" }} key={val.$id}>
              {val.content}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
