import React from "react";
import screenshot from "../assets/screenshot.png";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router";

const ProjectCard = ({ data }) => {
  const { title, description, gitlink, tags } = data;

  return (
    <Link to={data.livelink || gitlink}>
      <div className="bg-zinc-950/50  w-70 flex flex-col justify-center items-center  min-h-80  relative rounded-md  my-5 overflow-hidden p-3 hover:bg-zinc-950/90 transition-all duration-300 hover:-translate-y-4 cursor-pointer hover:shadow-xs shadow-black">
        {data.img ? (
          <img
            src={data.img}
            className="w-full h-[50%]  object-cover rounded-md"
            alt=""
          />
        ) : (
          ""
        )}

        <div className="z-3  pt-3 flex flex-col justify-end items-center   text-white p-3 text-center">
          <p className="font-medium text-xl my-3">{title} </p>
          <p
            className=" font-light text-xs mt-2 mb-3 text-center"
            style={{ color: "var(--color-custom-darkwhite)" }}
          >
            {description}
          </p>

          <p
            className="text-xs text-custom-blue font-extralight my-3"
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
              to="mailto:akanumeiruoghene@gmail.com"
              className="text-custom-darkblue hover:shadow-xs hover:scale-110 transition-all duration-300 shadow-custom-blue p-2 rounded-md bg-custom-white"
            >
              <ExternalLink className="shrink-0" size={15} />
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
