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
  },
  {
    name: 'Edson Arantes do Nascimento',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Pele_by_John_Mathew_Smith.jpg/220px-Pele_by_John_Mathew_Smith.jpg',
    birth: 'Três Corações, MG, Brasil, 23 de outubro de 1940',
    age: 81,
    height: 1.73,
    foot: 'Ambidestro',
    surName: 'Pelé, O Rei do Futebol, Pérola Negra',
    currentClub: 'Aposentado',
    moreInformation: 'https://pt.wikipedia.org/wiki/Pel%C3%A9'
  },
  {
    name: 'Diego Armando Maradona',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Maradona-Mundial_86_con_la_copa.JPG/240px-Maradona-Mundial_86_con_la_copa.JPG',
    birth: 'Lanús, Província de Buenos Aires, Argentina, 30 de outubro de 1960',
    age: 'Falecido :(',
    height: 1.65,
    foot: 'Canhoto',
    surName: 'Dieguito, El Pibe de Oro, El Diez, Pelusa, Barrilete Cósmico, El Diego, D10s',
    currentClub: 'Falecido :(',
    moreInformation: 'https://pt.wikipedia.org/wiki/Diego_Maradona'
  },
  {
    name: 'Ronaldo Luís Nazário de Lima',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/051119SMcC0014.jpg/220px-051119SMcC0014.jpg',
    birth: 'Rio de Janeiro (RJ), Brasil, 22 de setembro de 1976',
    age: 45,
    height: 1.83,
    foot: 'Direito',
    surName: 'Ronaldinho, Fenômeno',
    currentClub: 'Aposentado',
    moreInformation: 'https://pt.wikipedia.org/wiki/Ronaldo_Naz%C3%A1rio'
  },
  {
    name: 'Romário de Souza Faria',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Foto_oficial_de_Rom%C3%A1rio_%28v._AgSen%29.jpg/250px-Foto_oficial_de_Rom%C3%A1rio_%28v._AgSen%29.jpg',
    birth: 'Rio de Janeiro (RJ), Brasil, 29 de janeiro de 1966',
    age: 56,
    height: 1.67,
    foot: 'Direito',
    surName: 'Baixinho',
    currentClub: 'Aposentado',
    moreInformation: 'https://pt.wikipedia.org/wiki/Rom%C3%A1rio'
  },
  {
    name: 'Arthur Antunes Coimbra',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Zico_2012_3.jpg/200px-Zico_2012_3.jpg',
    birth: 'Rio de Janeiro (RJ), Brasil, 03 de março de 1953',
    age: 69,
    height: 1.72,
    foot: 'Ambidestro',
    surName: 'Galinho de Quintino',
    currentClub: 'Aposentado',
    moreInformation: 'https://pt.wikipedia.org/wiki/Zico'
  },
  {
    name: 'Giorgian Daniel De Arrascaeta Benedetti',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/20171114_AUT_URU_4590.jpg/210px-20171114_AUT_URU_4590.jpg',
    birth: 'Nuevo Berlín, Uruguai, 01 de junho de 1994',
    age: 27,
    height: 1.74,
    foot: 'Destro',
    surName: 'Arraxxxca, Cocho',
    currentClub: 'Mengão Bonitão Campeão',
    moreInformation: 'https://pt.wikipedia.org/wiki/Giorgian_De_Arrascaeta'
  },

]

export function App() {
  return (
    <div className="App">
      <h1>TOP 10 JOGADORES DE FUTEBOL</h1>

        {Players.map(player => (
          <Player player={player} />
        ))} 
    </div>
  );
}
