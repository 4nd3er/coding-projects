import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@radix-ui/react-menubar";
import { MenubarShortcut } from "./menubar";
export const CustomeBar = () => {
  return (
    <>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            {" "}
            <CiMenuBurger />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Link to="/" className="hover:text-yellow-300">
                Home
              </Link>{" "}
              <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              {" "}
              <Link to="/about" className="hover:text-yellow-300">
                About
              </Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              {" "}
              <Link to="/contact" className="hover:text-yellow-300">
                Contact
              </Link>
            </MenubarItem>
            <MenubarSeparator />
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </>
  );
};
