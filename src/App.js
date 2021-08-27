import { useState, useEffect } from "react";
import Buttons from "./Buttons";
import Table from "./Table";
import "./index.css";

function App() {
  const [category, setCategory] = useState("users");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/${category}`
        );
        const listItems = await response.json();
        setItems(listItems);

        console.log(listItems);
      } catch (err) {
        console.log(err.stack);
      }
    };
    fetchItems();
  }, [category]);

  return (
    <div className="App">
      <Buttons
        users="users"
        posts="posts"
        comments="comments"
        category={category}
        setCategory={setCategory}
      />
      {/* <List items={items} /> */}
      <Table items={items} />
    </div>
  );
}

export default App;
