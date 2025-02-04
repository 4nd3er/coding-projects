import { useEffect, useState } from "react";
import CustomCard from "../../components/custom-card";
import { useNavigate, useParams } from "react-router-dom";
import { getCharacterById } from "../../api/functions";
import { Button } from "../../components/ui/button";
import { MdArrowBackIos } from "react-icons/md";
export type CharacterType = {
  id: string;
  name: string;
  species: string;
  image: string;
  url?: string;
};
const CharacterDetail = () => {
  const { id } = useParams();
  const [characterData, setcharacterData] = useState<CharacterType>();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("../");
  };
  console.log(id);
  useEffect(() => {
    getCharacterById(id).then((res) => {
      setcharacterData(res);
    });
  }, [id]);

  return (
    <div>
      <Button onClick={handleBack}>
        <MdArrowBackIos />
      </Button>
      <CustomCard data={characterData} />
    </div>
  );
};

export default CharacterDetail;
