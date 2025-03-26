import { CharacterType } from "../../pages/character-detail";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";

export const CustomeCard = ({ data }: { data: CharacterType }) => {
  return (
    <div className="w-1/6  h-2/4 mx-auto">
      <Card className="bg-slate-400 ">
        <CardHeader>
          <CardTitle className="mx-auto">Chantre is so gay</CardTitle>
        </CardHeader>
        <CardContent>
          <img src={data.url} alt="" className="mx-auto rounded-full" />
        </CardContent>
        <CardFooter>
          <p className="mx-auto">Dorado el mejor</p>
        </CardFooter>
      </Card>
    </div>
  );
};
