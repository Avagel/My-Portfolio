import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router";

// Generates a live screenshot preview from the project URL
const getSitePreview = (url) => {
  if (!url) return null;
  return `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;
};

const ProjectCard = ({ data }) => {
  const { title, description, gitlink, livelink, tags, img } = data;

  // Use static img if provided, otherwise auto-generate from livelink
  const previewSrc = getSitePreview(livelink || gitlink) || img;

  return (
    <div className="bg-zinc-950/50 md:w-70 flex flex-col justify-center items-center min-h-80 relative rounded-xl shrink-0 w-full overflow-hidden p-3 hover:bg-zinc-950/90 transition-all duration-300 hover:-translate-y-4 cursor-pointer hover:shadow-xs shadow-black">
      {previewSrc ? (
        <img
          src={previewSrc}
          className="w-full h-[50%] object-cover object-top rounded-md"
          alt={`${title} preview`}
          onError={(e) => {
            e.target.style.display = "none";
          }} // hide if load fails
        />
      ) : (
        // Fallback placeholder if no URL available
        <div className="w-full h-[50%] rounded-md bg-zinc-800 flex items-center justify-center">
          <p className="text-xs text-zinc-500">No preview</p>
        </div>
      )}

      <div className="z-3 pt-3 flex flex-col justify-end items-center text-white p-3 text-center">
        <p className="font-medium text-xl my-3">{title}</p>
        <p
          className="font-light text-xs mt-2 mb-3 text-center"
          style={{ color: "var(--color-custom-darkwhite)" }}
        >
          {description}
        </p>
        <p
          className="text-xs font-extralight my-3"
          style={{ color: "#5fcdd9" }}
        >
          {tags && tags.join(" | ")}
        </p>
        <div className="flex gap-3 mt-3">
          {gitlink && (
            <Link
              target="_blank"
              to={gitlink}
              className="text-custom-darkblue hover:shadow-xs hover:scale-110 transition-all duration-300 shadow-custom-blue p-2 rounded-md bg-custom-white"
            >
              <Github className="shrink-0" size={15} />
            </Link>
          )}
          {(livelink || gitlink) && (
            <Link
              target="_blank"
              to={livelink || gitlink}
              className="text-custom-darkblue hover:shadow-xs hover:scale-110 transition-all duration-300 shadow-custom-blue p-2 rounded-md bg-custom-white"
            >
              <ExternalLink className="shrink-0" size={15} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
