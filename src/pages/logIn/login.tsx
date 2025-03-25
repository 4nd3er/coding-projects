import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
} from "@heroui/react";
import { Link } from "react-router-dom";
import { Button } from "@heroui/react";
import { Input } from "@heroui/react";
// const Artists = [{id:1,name:"Travis",description:"Nació el 30 de abril de 1991 en Houston, Texas. Creció en Missouri City, una zona suburbana de clase media que limita con el suroeste de Houston. Webster vivió con su abuela, pero luego se mudó a los suburbios, donde su padre tenía su propio negocio.",url:"/fein.jpg",footer:"Fein"},
//   {id:2,name:"Kendrick",description:"Criado en Compton, California, Lamar desarrolló un interés por la música y la poesía a una temprana edad. Inspirado por presenciar en vivo como Tupac y Dr. Dre grababan el video musical de California Love en su ciudad, Lamar decidió perseguir una carrera como un rapero.",url:"/kendrick.jpg",footer:"Pride"},
//   {id:3,name:"Metroo",description:"Criado en St. Louis, Wayne comenzó una carrera de producción en la escuela secundaria y se hizo más conocido por sus exitosas grabaciones con artistas de rap de Atlanta como Future, 21 Savage, Gucci Mane y Migos a mediados de la década de 2010.",url:"/metro.jpg",footer:"Overdue"}]

export default function App() {
  return (
    <div className="w-full flex justify-center items-center">
      <Card className="">
        <CardHeader className="flex gap-3 justify-center">
          <div className="flex flex-col">
            <p className="text-md font-sans font-semibold py-4 ">Login</p>
          </div>
        </CardHeader>
        <Divider />
        <div className="flex w-full flex-wrap flex-col md:flex-nowrap gap-4">
          <Input className="text-black" label="Email" type="email" />
          <Input
            className="text-black"
            label="Password"
            placeholder="Enter your password"
            type="password"
          />
        </div>
        <Divider />
        <CardFooter className="justify-center">
          <Button color="primary" radius="full" variant="ghost">
            <Link to="/LogIn" className="">
              Submit
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
