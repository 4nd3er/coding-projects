import { useEffect, useState } from "react";
import CustomCard from "../../components/custom-card";

import ButtonBar from "../../components/ButtonBar";
import { getCharacters } from "../../api/functions";
import { CharacterType } from "../character-detail";

function Init() {
    const [paginaActual, setPaginaActual] = useState<number>(1);
  const [personajes, setpersonajes] = useState<CharacterType[]>([]);
  const [id, setId] = useState<string | number>("");
  useEffect(() => {
    getCharacters(paginaActual).then((res) => {
      setpersonajes(res);
    });
  }, [paginaActual]);
  return (
    <div className="flex flex-col justify-center gap-4 w-full mx-auto">
   
    <div className="flex flex-col justify-center sm:flex-row gap-4 sm:flex-wrap sm:w-10/12 mx-auto">
      {personajes?.map((x) => (
        <div className="relative" key={x.id}>
          <CustomCard data={x} id={id} setId={setId} />
        </div>
      ))}
    </div>
   
  </div>
  )
}

export default Init