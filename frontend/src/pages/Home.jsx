import React, { useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import { Github, Linkedin, Mail } from "lucide-react"; // Removed unused: Tags
import { Link } from "react-router";
import "../animate.css";
import AOS from "aos";
import { Carousel } from "flowbite-react";
import "aos/dist/aos.css";
import SkillCard from "../components/SkillCard";
import bike from "../assets/bike.png";
import pcdynamic from "../assets/pcDynamic.png";
import logo from "../assets/Avagel SVG.svg";
import gameReview from "../assets/gameReview.png";
import CarouselItem from "../components/CarouselItem";
import DotMatrixLogo from "../components/DotMatrixLogo";
// Removed unused imports: screenshot, grid

const Home = () => {
  const projects = [
    {
      title: "Bike Website",
      description: "A bike catalogue website landing page.",
      img: bike,
      gitlink: "https://github.com/Avagel/Bike-Website",
      livelink: "https://avagel.github.io/Bike-Website/",
      tags: ["HTML", "CSS", "JS"],
    },
    {
      title: "Game Review/News Site",
      description: "A place to find reviews and news on games.",
      img: gameReview,
      gitlink: "https://github.com/Avagel/Game-Review",
      livelink: "https://game-review-alpha.vercel.app/",
      tags: ["RAWG API", "React", "Express"],
    },
    {
      title: "PC Dynamic",
      description: "A laptop sales website landing page.",
      img: pcdynamic,
      gitlink: "https://github.com/Avagel/pc-dynamic",
      livelink: "https://avagel.github.io/pc-dynamic/",
      tags: ["HTML", "CSS"],
    },
    {
      title: "Habit Tracker",
      description:
        "A full-stack habit tracking app to build consistency and monitor daily progress.",
      gitlink: "https://github.com/Avagel/Habit-Tracker",
      livelink: "https://habit-tracker-five-hazel.vercel.app",
      tags: ["Next.js", "Playwright", "Vitest"],
    },
    {
      title: "Invoice App",
      description:
        "A clean invoice management app to create, edit and track payment statuses.",
      gitlink: "https://github.com/Avagel/Invoice-App",
      livelink: "https://invoice-app-two-lac.vercel.app",
      tags: ["React"],
    },
  ];

  const otherProjects = [
    {
      title: "Portfolio Website",
      description: "An ecommerce website landing page.",
      gitlink: "https://github.com/Avagel/My-Portfolio.git",
      tags: ["HTML", "CSS", "JS"], // Fixed typo: HTMl → HTML
    },
    {
      title: "Manhwa Reading Site", // Fixed typo: Manwha → Manhwa
      description: "A place to find, read and organize manhwas.",
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
    <div className="relative z-3 px-6 lg:max-w-[1200px] pb-30 flex flex-col items-center gap-6">
      {/* Hero */}
      <div
        id="home"
        className=" h-screen flex flex-col items-center justify-center lg:w-[1000px] "
      >
        <div className="flex flex-col text-center items-center py-10 px-5">
          <DotMatrixLogo dotColor="#5fcdd9" svgUrl={logo} />
          <p className="text-3xl lg:text-6xl font-semibold mt-4">
            hi, <span className="text-custom-blue">Iruo</span> here
          </p>
          <p
            className="text-xs lg:text-sm font-light lg:w-[400px] my-4"
            data-aos="fade-up"
          >
            I'm a full stack Software Engineer crafting seamless web and mobile
            experiences that connect ideas to impact.
          </p>
          <a href="#projects">
            <button
              className="text-xs hover:bg-custom-darkblue hover:text-custom-blue hover:shadow shadow-custom-blue text-custom-darkblue font-semibold px-7 py-3 bg-custom-blue rounded-md transition-all duration-300"
              data-aos="fade-up"
            >
              projects
            </button>
          </a>
        </div>
      </div>

      {/* About */}
      <div
        id="about"
        className="py-24 lg:py-32 lg:w-[1000px] b"
        data-aos="fade-up"
      >
        <div className="flex flex-col items-center lg:items-start">
          <p className="font-bold text-xl lg:text-4xl">about me</p>
          <div className="w-4 h-1 rounded-full bg-custom-blue"></div>
        </div>
        <div className="lg:flex lg:flex-row-reverse lg:gap-8 justify-end lg:mt-10">
          <div className="h-50 rounded-md bg-white my-5 lg:my-0 lg:w-70 lg:shrink-0"></div>
          <p className="text-xs text-center max-w-[600px] font-normal lg:text-sm lg:text-justify lg:font-light leading-6">
            I'm Akanume Iruoghene, a passionate Software Engineer who loves
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

      {/* Skills */}
      <div id="skills" className="md:h-screen lg:w-[1000px]" data-aos="fade-up">
        <div className="flex flex-col items-center lg:items-start">
          <p className="text-center font-bold text-xl lg:text-4xl">skills</p>
          <div className="w-4 h-1 rounded-full bg-custom-blue"></div>
        </div>
        <div className="mt-4 flex flex-col lg:flex-wrap justify-center lg:justify-start lg:flex-row gap-3 lg:mt-10 lg:gap-5">
          {skills.map((skillCategory, index) => (
            <div
              key={index}
              className="my-5 lg:bg-zinc-950/50 lg:my-0 shrink-0 lg:p-3 lg:py-5 lg:w-70 lg:rounded-xl"
            >
              <p className="font-normal text-sm text-center mb-3">
                {skillCategory.category}
              </p>
              <div className="flex flex-wrap gap-3 items-center justify-center">
                {skillCategory.items.map((skill, idx) => (
                  <SkillCard key={idx} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div
        id="projects"
        className="py-24 lg:py-32 h-fit lg:w-[1000px]"
        data-aos="fade-up"
      >
        <div className="flex flex-col items-center lg:items-start">
          <p className="font-bold text-xl lg:text-4xl">projects</p>
          <div className="w-4 lg:ml-5 h-1 rounded-full bg-custom-blue"></div>
        </div>

        {/* Desktop carousel */}
        <div className="hidden md:block lg:block w-full mt-10 h-130 rounded-3xl relative overflow-hidden">
          <Carousel
            className="[scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            onSlideChange={(index) => console.log("onSlideChange()", index)}
          >
            {projects.map((project, index) => (
              <CarouselItem key={index} data={project} />
            ))}
          </Carousel>
        </div>

        {/* Mobile cards */}
        <div className="lg:hidden md:hidden mt-5 flex justify-center flex-wrap gap-3">
          {[...projects, ...otherProjects].map((project, index) => (
            <ProjectCard key={index} data={project} />
          ))}
        </div>

        {/* Desktop other projects */}
        <div className="hidden md:flex mt-5 lg:mt-10 lg:flex flex-wrap gap-6">
          {otherProjects.map((project, index) => (
            <ProjectCard key={index} data={project} />
          ))}
        </div>
      </div>

      {/* Contact */}
      <div id="contact" data-aos="fade-up">
        {/* Fixed: removed lg:hidden so heading is visible on all screen sizes */}
        <div className="flex flex-col items-center lg:items-start">
          <p className="font-bold text-xl lg:text-4xl">contact me</p>
          <div className="w-4 h-1 rounded-full bg-custom-blue"></div>
        </div>

        <div className="mt-5 lg:mt-10">
          <p className="text-xs lg:text-sm text-center">
            I'm always interested in hearing about new projects and
            opportunities.
          </p>
          <div className="flex gap-3 items-center mt-4 justify-center">
            <Link
              to="mailto:akanumeiruoghene@gmail.com"
              className="text-custom-blue p-2 rounded-md bg-custom-darkblue hover:shadow-xs hover:scale-110 transition-all duration-300 shadow-custom-blue"
            >
              <Mail className="shrink-0" size={15} />
            </Link>
            <Link
              to="https://github.com/Avagel"
              className="text-custom-blue p-2 rounded-md bg-custom-darkblue hover:shadow-xs hover:scale-110 transition-all duration-300 shadow-custom-blue"
            >
              <Github className="shrink-0" size={15} />
            </Link>
            <Link
              to="https://www.linkedin.com/in/akanume-iruoghene-437015342" // Fixed: added https://
              className="text-custom-blue p-2 rounded-md bg-custom-darkblue hover:shadow-xs hover:scale-110 transition-all duration-300 shadow-custom-blue"
            >
              <Linkedin className="shrink-0" size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
