import { CharacterType } from "../pages/character-detail";
import { Card } from "./ui/card";

const CustomCard = ({ data }: { data: CharacterType | undefined }) => {
  return (
    <div className="relative w-[350px] sm:w-[420px] mx-auto hover:scale-105 cursor-pointer transition">
      <Card className="bg-gradient-to-r from-cyan-500 to-blue-500 overflow-hidden">
        <img src={data?.image} className="mx-auto w-full" alt="" />

        <p className=" text-white z-10 absolute bottom-3 left-4 font-semibold">
          {data?.name}
        </p>
        <div className="absolute inset-0 w-full h-full bg-gradient rounded-md"></div>
      </Card>
    </div>
  );
};

export default CustomCard;
