import React from "react";

const SkillCard = ({ skill }) => {
  return (
    <div
      className="bg-custom-darkblue w-fit max-w-70 px-5 py-2 rounded-md cursor-pointer
      hover:shadow-xs hover:scale-110 transition-all duration-300 shadow-custom-blue"
    >
      <p className="text-xs" style={{ color: "var(--color-custom-blue)" }}>
        {skill}
      </p>
    </div>
  );
};

export default SkillCard;
