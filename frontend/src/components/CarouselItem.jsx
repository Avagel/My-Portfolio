import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router";

const CarouselItem = ({ data }) => {
  const { img, title, gitlink, livelink, description, tags } = data;
  return (
    <div className="relative flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
      <img
        src={img}
        className="absolute inset-0 h-full object-cover w-full"
        alt=""
      />
      <div className="z-3 pt-3 flex flex-col justify-end pb-5 items-center bg-zinc-900/50 w-full h-full text-white p-3">
        <p className="font-medium text-2xl">{title} </p>
        <p
          className=" font-light text-sm my-2 mb-3 text-center"
          style={{ color: "var(--color-custom-darkwhite)" }}
        >
          {description}
        </p>

        <p
          className="text-xs text-custom-blue font-extralight mb-3"
          style={{ color: "#5fcdd9" }}
        >
          {tags && tags.join(" | ")}
        </p>
        <div className="text-custom-white flex gap-3 mt-3">
          <Link
            to={gitlink}
            className="text-custom-darkblue hover:shadow-xs hover:scale-110 transition-all duration-300 shadow-custom-blue p-2 rounded-md bg-custom-white"
          >
            <Github className="shrink-0" size={15} />
          </Link>
          <Link
            to={livelink}
            className="text-custom-darkblue hover:shadow-xs hover:scale-110 transition-all duration-300 shadow-custom-blue p-2 rounded-md bg-custom-white"
          >
            <ExternalLink className="shrink-0" size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
