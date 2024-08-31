import { CharacterCards } from "./modules/Home";
import { Routes, Route } from "react-router-dom";
import { IndividualCharacter } from "./modules/IndividualCharacter";

function App() {
  return (
    <div className="App">
      <Routes>
       <Route path= "/" element={<CharacterCards/>}/>
       <Route path="/:id" element={<IndividualCharacter/>}/>
      </Routes>
    </div>
  );
}

export default App;
