import React from "react";
import { Button } from "./ui/button";
import { MdArrowBackIos } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

const ButtonBar = ({
  setCurrentPage,
  currentPage,
}: {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
}) => {
  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const handleBack = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  return (
    <div className="flex flex-row justify-center w-full mx-auto my-2">
      <Button onClick={handleBack}>
        <MdArrowBackIos />
      </Button>
      <p className="p-2 bg-gray-950 text-white mx-1 rounded-lg">
        {currentPage}
      </p>
      <Button onClick={handleNext}>
        <IoIosArrowForward />
      </Button>
    </div>
  );
};

export default ButtonBar;
