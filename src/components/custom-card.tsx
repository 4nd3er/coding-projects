import { Link } from "react-router-dom";
import { CharacterType } from "../pages/character-detail";
import { Card } from "./ui/card";

const CustomCard = ({
  data,
  id,
  setId,
}: {
  data: CharacterType | undefined;
  id: string | number;
  setId: (string: string) => void;
}) => {
  const handleMouseEnter = () => {
    setId(data?.id ?? "");
  };
  const handleMouseLeave = () => {
    setId("");
  };
  return (
    <div
      className="relative w-[350px] sm:w-[420px] mx-auto hover:scale-105 overflow-hidden transition"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card className="bg-gradient-to-r from-cyan-500 to-blue-500 overflow-hidden">
        <img src={data?.image} className="mx-auto w-full" alt="" />
        <div
          className={`text-white z-20 absolute bottom-3 left-4 transition font-semibold ${
            data?.id === id
              ? "translate-y-0"
              : "translate-y-[calc(100%_-_2rem)]"
          } flex flex-col gap-4`}
        >
          <p className="text-white font-semibold">{data?.name}</p>
          <p className={`text-sm h-auto pr-2 text-white text-pretty`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. tis ad
            ratione adipisci, iure rerum, dolor culpa, asperiores rem
            praesentium dolores? Id non reiciendis sunt?
          </p>
          <div className="flex gap-4">
            <Link to="#" target="_blank" className="text-white border font-semibold">
            GitHub
            </Link>
            <Link to="#" target="_blank" className="text-white border font-semibold">
            Youtube
            </Link>
            <Link to="#" target="_blank" className="text-white border font-semibold">
            Web
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 w-full h-full bg-gradient rounded-md"></div>
      </Card>
    </div>
  );
};

export default CustomCard;
