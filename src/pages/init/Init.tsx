import { useEffect, useState } from "react";
import CustomCard from "../../components/custom-card";

import ButtonBar from "../../components/ButtonBar";
import { getCharacters } from "../../api/functions";
import { CharacterType } from "../character-detail";
import { ImagePlus } from "lucide-react";

function Init() {

  const Images=[
    {
      src:"/fein.jpg",
      num:(Math.random()*100).toFixed()
    },
    {
      src:"/metroo.jpg",
      num:(Math.random()*100).toFixed()
    }
 ,
 {
   src:"/metro.jpg" ,
   num:(Math.random()*100).toFixed()
 },
 {
  src:"/kendrick.jpg",
  num:(Math.random()*100).toFixed()
 }

  ]
    const [paginaActual, setPaginaActual] = useState<number>(1);
  const [personajes, setpersonajes] = useState<CharacterType[]>([]);
  const [id, setId] = useState<string | number>("");
  useEffect(() => {
    getCharacters(paginaActual).then((res) => {
      setpersonajes(res);
    });
  }, [paginaActual]);
  return (

    
    <div className="flex flex-col justify-center items-center gap-4 w-full mx-auto">
   <h1 className="font-irish text-[70px] mt-20">
JOIN TO COMMUNITY OF CODING
   </h1>
    <div className="flex justify-center items-center max-h-1/2 min-w-screen ">
      {Images?.map((x,index) => (
        <div className="relative" key={index}>
          <img src={x.src} alt="" className="w-[200px]" style={{transform: `translateY(${x.num}px)translateX(${x.num}px) `}} />
        </div>
      ))}
    </div>
   
  </div>
  )
}

export default Init