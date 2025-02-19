import { useEffect, useState } from "react";
import CustomCard from "../../components/custom-card";
import ButtonBar from "../../components/ButtonBar";
import { getCharacters } from "../../api/functions";
import { Component } from "lucide-react";
import { Github } from "../../components/Github";
import { Web } from "../../components/Web";
import { Youtube } from "../../components/Youtube";
// const Artists = [{id:1,name:"Travis",description:"Nació el 30 de abril de 1991 en Houston, Texas. Creció en Missouri City, una zona suburbana de clase media que limita con el suroeste de Houston. Webster vivió con su abuela, pero luego se mudó a los suburbios, donde su padre tenía su propio negocio.",url:"/fein.jpg",footer:"Fein"},
//   {id:2,name:"Kendrick",description:"Criado en Compton, California, Lamar desarrolló un interés por la música y la poesía a una temprana edad. Inspirado por presenciar en vivo como Tupac y Dr. Dre grababan el video musical de California Love en su ciudad, Lamar decidió perseguir una carrera como un rapero.",url:"/kendrick.jpg",footer:"Pride"},
//   {id:3,name:"Metroo",description:"Criado en St. Louis, Wayne comenzó una carrera de producción en la escuela secundaria y se hizo más conocido por sus exitosas grabaciones con artistas de rap de Atlanta como Future, 21 Savage, Gucci Mane y Migos a mediados de la década de 2010.",url:"/metro.jpg",footer:"Overdue"}]

const pages = [
  {
    id: "1",
    image: "/flappyBird.png",
    name: "Flappy Bird",
    description: "Recreating the famous game 'Flappy Bird'",
    links: [
      {
        name: "Github",
        link: "https://github.com/",
        component: <Github />
      },
      {
        name: "Web",
        link: "https://flappybird.io/",
        component: <Web />
      }
    ]
  },
  {
    id: "2",
    image: "/cards.png",
    name: "Cards",
    description: "Guess The pair of cards!",
    links: [
      {
        name: "Github",
        link: "https://github.com/",
        component: <Github />
      },
      {
        name: "YouTube",
        link: "https://www.youtube.com/watch?v=E8iDAsG0bxM",
        component: <Youtube />
      },
      {
        name: "Web",
        link: "https://www.memo-juegos.com/juegos-de-memoria-online/para-todos/memory-dificil/memory-cartas",
        component: <Web />
      },
    ]
  },
  {
    id: "3",
    image: "/eagleAi.png",
    name: "eagle Ai",
    description: "You can ask it, and it response",
    links: [
      {
        name: "Github",
        link: "https://github.com/",
        component: <Github />
      },
      {
        name: "Web",
        link: "https://www.memo-juegos.com/juegos-de-memoria-online/para-todos/memory-dificil/memory-cartas",
        component: <Web />
      },
    ]
  },
]

const Home = () => {
  const [paginaActual, setPaginaActual] = useState<number>(1);
  const [id, setId] = useState<string | number>("");
  return (

    
    
    <div className="flex flex-col justify-center gap-4 w-full mx-auto">
      <ButtonBar currentPage={paginaActual} setCurrentPage={setPaginaActual} />
      <div className="flex flex-col justify-center sm:flex-row gap-4 sm:flex-wrap sm:w-10/12 mx-auto">
        {pages?.map((x) => (
          <div className="relative" key={x.id}>
            <CustomCard data={x} id={id} setId={setId} />
          </div>
        ))}
      </div>
      <ButtonBar currentPage={paginaActual} setCurrentPage={setPaginaActual} />
    </div>
  );
};

export default Home;
