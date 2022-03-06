import { useState } from "react";
import { Button } from "./components/Button";
import { Player } from "./components/Player";

import './styles/global.css'

const Players = [
  {
      name: 'Cristiano Ronaldo dos Santos Aveiro',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/220px-Cristiano_Ronaldo_2018.jpg',
      birth: 'Funchal/Portugal, 05 de fevereiro de 1985',
      age: 37,
      height: 1.85,
      foot: 'Direito',
      surName: 'CR7, Robozão',
      currentClub: 'Manchester United',
      moreInformation: 'https://pt.wikipedia.org/wiki/Cristiano_Ronaldo'
  },
  {
    name: 'Ronaldo de Assis Moreira',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Ronaldinho_Ga%C3%BAcho_em_junho_de_2019.jpg/250px-Ronaldinho_Ga%C3%BAcho_em_junho_de_2019.jpg',
    birth: 'Porto Alegre/Brasil, 21 de março de 1980',
    age: 41,
    height: 1.79,
    foot: 'Direito',
    surName: 'R10, Bruxo, Rei do Drible, Rei dos rolês, Dinho',
    currentClub: 'Aposentado. Ficou em atividade entre 1998 e 2016',
    moreInformation: 'https://pt.wikipedia.org/wiki/Ronaldinho_Ga%C3%BAcho'
  },
  {
    name: 'Lionel Andrés Messi Cuccittini',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lionel_Messi_PSG.jpg/200px-Lionel_Messi_PSG.jpg',
    birth: 'Rosário/Argentina, 24 de junho de 1987',
    age: 34,
    height: 1.69,
    foot: 'Esquerdo',
    surName: 'Leo, D10s, La Pulga Atômica, Messias, ET, Mágico',
    currentClub: 'Paris Saint-Germain',
    moreInformation: 'https://pt.wikipedia.org/wiki/Lionel_Messi'
  },
  {
    name: 'Neymar da Silva Santos Júnior',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Bra-Cos_%281%29_%28cropped%29.jpg/230px-Bra-Cos_%281%29_%28cropped%29.jpg',
    birth: 'Mogi das Cruzes/Brasil, 05 de fevereiro de 1992',
    age: 30,
    height: 1.75,
    foot: 'Direito',
    surName: 'Ney, Menino Ney, Príncipe do Gol, NeyMostro, NeyMito, Adulto Ney, NeyMaradona',
    currentClub: 'Paris Saint-Germain',
    moreInformation: 'https://pt.wikipedia.org/wiki/Neymar'
  }
]

export function App() {
  return (
    <div className="App">
      <h1>Top 10 Jogadores de Futebol</h1>

      <ul>
        {Players.map(player => (
          <Player player={player} />
        ))} 
      </ul>
      
      <Button />
    </div>
  );
}
