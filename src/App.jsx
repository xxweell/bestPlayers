import { useState } from "react";
import { Button } from "./components/Button";
import { Player } from "./components/Player";

import './styles/global.css'

const Players = 
  {
      name: 'Cristiano Ronaldo dos Santos Aveiro',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/220px-Cristiano_Ronaldo_2018.jpg',
      birth: 'Funchal, 05 de fevereiro de 1985',
      age: 37,
      height: 1.85,
      foot: 'Direito',
      surName: 'CR7, Robozão',
      currentClub: 'Manchester United',
      moreInformation: 'https://pt.wikipedia.org/wiki/Cristiano_Ronaldo'
  }

export function App() {
  return (
    <div className="App">
      <Player player={Players} />
      <Button />
    </div>
  );
}
