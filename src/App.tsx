import React from "react";
import { News } from "./components/News";
import post1 from "../src/assets/images/post-1.png";
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <News
        image={post1}
        alt={''}
        date={"11 de fevereiro de 2021"}
        title={"Começando no reactJS em 2022"}
        resume={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean."
        }
      />
    </div>
  );
}

export default App;
