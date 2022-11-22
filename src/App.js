import { useState, useEffect } from "react";
import Card from "./Card";
import "./App.css";

function App() {
  // const username = useState();
  // username[0]; //This is the value of state
  // username[1](); //This is a function that updates the value
  const [username, setUsername] = useState("AndyC"); //Array destructuring to name the index items

  //Pseudo useState example
  // function useState(initialVal) {
  //   let state = initialVal || undefined;
  //   function setState(newVal) {
  //     state = newVal
  //   };
  //   return [state, setState]
  // }

  //If onLoad, fire callback function
  useEffect(() => {
    console.log("firing");
    if (username === "AndyB") setUsername("Delete Him!");
  }, [username]);

  const arr = [
    { name: "AndyB", content: "asdf" },
    { name: "Gary", content: "qwer" },
  ];

  return (
    <div className="App">
      <header>
        <h1>React Hooks & Props</h1>
      </header>
      <main>
        <h2>{username}</h2>
        {/* onChange will fire our anonymous function everytime the input value changes */}
        <input onChange={(event) => setUsername(event.target.value)} />
        <Card name="Steve" content="This is Steve's Card" />
        <Card name="AndyB" content="This is Andy's Card" />
        <Card
          name={username}
          content="This is dynamic"
          function={setUsername}
        />
        {arr.map((item, index) => {
          return <Card key={index} name={item.name} content={item.content} />;
        })}
      </main>
      <footer>
        <p>Demonstrated by Andy B</p>
      </footer>
    </div>
  );
}

export default App;
