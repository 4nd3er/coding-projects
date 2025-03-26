import { Button } from "@heroui/react";
import { Link } from "react-router-dom";
import { Card } from "./ui/card";
import { Github } from "./Github.tsx";
import { Youtube } from "../components/Youtube.tsx";
import { Web } from "../components/Web.tsx";

type CharacterType = {
  id: string;
  name: string;
  species?: string;
  image?: string;
  url?: string;
  description: string;
  links: Record<any, any>[];
};

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
      className="relative sm:w-[480px] w-[350px] mx-auto hover:scale-105 overflow-hidden transition"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card className="bg-gradient-to-r from-cyan-500 to-blue-500 overflow-hidden">
        <img
          src={data?.image}
          className="w-full h-auto aspect-video object-cover"
          alt=""
        />
        <div
          className={`text-white z-20 absolute bottom-3 left-4 transition font-semibold ${
            data?.id === id
              ? "translate-y-0"
              : "translate-y-[calc(100%_-_1.5rem)]"
          } flex flex-col gap-3`}
        >
          <p className="text-white font-semibold">{data?.name}</p>
          <p className={`text-sm h-auto  text-white text-pretty`}>
            {data?.description}
          </p>
          <div className="flex gap-4 over">
            {data?.links.map((link) => (
              <Button
                className="text-white"
                variant="bordered"
                color="default"
                startContent={link.component}
              >
                {link.name}
              </Button>
            ))}
            {/* <Link
              to=""
              target="_blank"
              className="text-white border font-semibold flex gap-2 p-1 rounded-md"
            >
              <Github />
              github
            </Link>
            <Link
              to="#"
              target="_blank"
              className="text-white border font-semibold flex gap-2 p-1 rounded-md"
            >
              <Youtube />
              Youtube
            </Link>
            <Link
              to="#"
              target="_blank"
              className="text-white border font-semibold flex gap-2 p-1 rounded-md"
            >
              <Web />
              Web
            </Link> */}
          </div>
        </div>
        <div
          className={`absolute inset-0 w-full h-full rounded-md ${
            data?.id === id
              ? `${innerWidth < 768 ? "bg-gradient_h_res" : "bg-gradient_h"}`
              : "bg-gradient"
          }`}
        ></div>
      </Card>
    </div>
  );
};

export default CustomCard;
