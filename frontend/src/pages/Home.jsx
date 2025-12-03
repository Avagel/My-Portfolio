import React from "react";
import ProjectCard from "../components/ProjectCard";
import { Github, Linkedin, Mail, Tags, Twitter } from "lucide-react";
import { Link } from "react-router";
import "../animate.css";
import AOS from "aos";
import { Carousel } from "flowbite-react";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SkillCard from "../components/SkillCard";
import screenshot from "../assets/screenshot.png";
import grid from "../assets/grid.png";
import bike from "../assets/project images/bike.png";
import pcdynamic from "../assets/project images/pcDynamic.png";
import gameReview from "../assets/project images/gameReview.png";
import CarouselItem from "../components/CarouselItem";

const Home = () => {
  const projects = [
    {
      title: "Bike Website",
      description: "A bike catalogue website landing page.",
      img: bike,
      gitlink: "",
      livelink: "",
      tags: ["HTML", "CSS", "JS"],
    },
    {
      title: "Game Review/News Site",
      description: "A place to find reviews and news on games.",
      img: gameReview,
      gitlink: "https://github.com/Avagel/Game-Review",
      livelink: "https://game-review-alpha.vercel.app/",
      tags: ["RAWG API", "React", "express"],
    },
    {
      title: "PC Dynamic",
      description: "A laptop sales website landing page.",
      img: pcdynamic,
      gitlink: "",
      livelink: "",
      tags: ["HTML", "CSS"],
    },
  ];
  const otherProjects = [
    {
      title: "E-commerce Website",
      description: "A ecommerce website landing page.",
      gitlink: "",
      tags: ["HTMl", "CSS", "JS"],
    },
    {
      title: "Manwha Reading site",
      description: "A place to find, read and organize manwhas.",
      gitlink: "https://github.com/Avagel/Manwha-App",
      tags: ["React", "MongoDB", "Express.js"],
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "React Native",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redis",
        "RESTful APIs",
        "Authentication & Authorization",
        "WebSockets",
      ],
    },
    {
      category: "Testing & Automation",
      items: ["Playwright", "Jest", "Postman"],
    },
    {
      category: "Dev Tools & Workflow",
      items: [
        "Git & GitHub",
        "VS Code",
        "Docker",
        "CI/CD Pipelines",
        "npm / pnpm / yarn",
      ],
    },
    {
      category: "Other",
      items: [
        "System Design Basics",
        "Performance Optimization",
        "Responsive UI/UX Design",
        "API Integration",
      ],
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="relative z-3 px-10 lg:px-40 pb-30">
      <div
        id="home"
        className="h-fit pt-40 lg:h-screen lg:pt-0 lg:flex  lg:flex-col lg:items-center lg:justify-center"
      >
        <div className="flex flex-col text-center items-center py-10 px-5">
          <p className="text-3xl lg:text-6xl font-semibold">
            hi, <span className="text-custom-blue">Iruo</span> here
          </p>
          <p
            className=" text-lg lg:text-xl lg:m-3 font-normal"
            data-aos="fade-up"
          >
            fullstack engineer
          </p>
          <p
            className="text-xs lg:text-sm font-light lg:w-[400px]"
            data-aos="fade-up"
          >
            I’m a Software Engineer crafting seamless web and mobile experiences
            that connect ideas to impact.
          </p>
          <a href="#projects">
            <button
              className="text-xs hover:bg-custom-darkblue hover:text-custom-blue  hover:shadow shadow-custom-blue text-custom-darkblue font-semibold px-7 py-3 bg-custom-blue rounded-md mt-5 transition-all duration-300"
              data-aos="fade-up"
            >
              projects
            </button>
          </a>
        </div>
      </div>

      <div id="about" className="pt-15 lg:pt-0 " data-aos="fade-up">
        <div className="flex flex-col items-center lg:items-start">
          <p className=" font-bold text-xl lg:text-4xl ">about me</p>
          <div className="w-4 h-1 rounded-full bg-custom-blue"></div>
        </div>
        <div className="lg:flex lg:flex-row-reverse lg:gap-10 lg:justify-between  lg:mt-10 ">
          <div className=" h-50 lg:h-70 rounded-md bg-white my-5 lg:my-0 lg:w-100 lg:shrink-0"></div>
          <p className="text-xs text-center font-normal lg:text-sm lg:text-justify lg:font-light leading-6">
            I’m Akanume Iruoghene, a passionate Software Engineer who loves
            turning ideas into intuitive, high-performing web and mobile
            applications. I focus on creating clean, efficient, and
            user-centered solutions that bring value to both users and
            businesses. I believe great software is built at the intersection of
            performance, simplicity, and purpose. My goal is always to craft
            digital products that are not only beautiful but also reliable and
            maintainable.
          </p>
        </div>
      </div>

      <div id="skills" className="pt-10 lg:pt-30" data-aos="fade-up">
        <div className="flex flex-col items-center lg:items-start">
          <p className="text-center font-bold text-xl lg:text-4xl ">skills</p>
          <div className="w-4 h-1 rounded-full bg-custom-blue"></div>
        </div>

        <div className="mt-4 flex flex-col gap-3 lg:mt-10 lg:grid lg:grid-cols-3 lg:gap-5 lg:justify-items-start">
          {skills.map((skillCategory, index) => (
            <div
              key={index}
              className=" my-5 lg:bg-zinc-950/50 lg:my-0 lg:p-3 lg:py-5 lg:rounded-md  "
            >
              <p className="font-normal text-sm text-center mb-3">
                {skillCategory.category}
              </p>
              <div className="flex flex-wrap gap-3 items-center justify-center ">
                {skillCategory.items.map((skill, idx) => (
                  <SkillCard key={idx} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="projects" className="pt-10 lg:pt-30" data-aos="fade-up">
        <div className="flex flex-col items-center lg:items-start">
          <p className=" font-bold text-xl lg:text-4xl ">projects </p>
          <div className="w-4 lg:ml-5 h-1 rounded-full bg-custom-blue"></div>
        </div>

        <div className="hidden lg:block w-full mt-10 h-130  rounded-md relative overflow-hidden">
          <Carousel
            className="[scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            onSlideChange={(index) => console.log("onSlideChange()", index)}
          >
            {projects.map((project, index) => {
              return <CarouselItem data={project} />;
            })}
          </Carousel>
        </div>

        <div className="mt-5 lg:mt-10 flex flex-wrap gap-3">
          {otherProjects.map((project, index) => {
            return <ProjectCard key={index} data={project} />;
          })}
        </div>
      </div>

      <div id="contact" className="pt-10 lg:pt-30 " data-aos="fade-up">
        <div className="flex flex-col items-center lg:items-start lg:hidden">
          <p className=" font-bold text-xl lg:text-4xl ">contact me</p>
          <div className="w-4 h-1 rounded-full bg-custom-blue"></div>
        </div>

        <div className="mt-5 lg:mt-10">
          <div className="">
            <p className="text-xs  lg:text-sm text-center">
              I'm always interested in hearing about new projects and
              opportunities.
            </p>

            <div className="flex gap-3 items-center  mt-4 justify-center">
              <Link
                to="mailto:akanumeiruoghene@gmail.com"
                className="text-custom-blue p-2 rounded-md bg-custom-darkblue hover:shadow-xs hover:scale-110 transition-all duration-300 shadow-custom-blue"
              >
                <Mail className="shrink-0" size={15} />
              </Link>
              <Link
                to="mailto:akanumeiruoghene@gmail.com"
                className="text-custom-blue p-2 rounded-md bg-custom-darkblue hover:shadow-xs hover:scale-110 transition-all duration-300 shadow-custom-blue"
              >
                <Github className="shrink-0" size={15} />
              </Link>
              <Link
                to="mailto:akanumeiruoghene@gmail.com"
                className="text-custom-blue p-2 rounded-md bg-custom-darkblue hover:shadow-xs hover:scale-110 transition-all duration-300 shadow-custom-blue"
              >
                <Linkedin className="shrink-0" size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
