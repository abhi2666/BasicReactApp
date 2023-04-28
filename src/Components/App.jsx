// This will contain all the components that you have created
// and we will import this into our index.js rather than exporting
// each component one by one
import React from "react";
import Heading from "./Heading";
import List from "./List";

function App() {
  // we can modify the code here easily to add more headings or lists
  // by just creating a new Heading or List tag (self closing tag).
  return (
    <div>
      <Heading />
      <List />
    </div>
  );
}

export default App;
