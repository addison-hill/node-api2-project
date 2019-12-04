import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  console.log(posts);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/posts")
      .then(res => {
        setPosts(res.data);
        console.log("res", res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>Lord of the Rings Fan Club</h1>
      {posts.map(post => (
        <div>
          <h2>{post.title}</h2>
          <h3>{post.contents}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
