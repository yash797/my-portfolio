import AllProjects from "../components/AboutMe/AllProjects";
import Education from "../components/AboutMe/Education";
import Experience from "../components/AboutMe/Experience";
import Fade from "react-reveal/Fade";
import Hackathons from "../components/AboutMe/Hackathons";
import Organizations from "../components/AboutMe/Organizations";
import React from "react";

export default function AboutMe() {
  return (
    <div>
      <Fade up>
        <div>
          <h1 className="text-center mt-10 font-primary font-black text-3xl md:text-5xl capitalize text-gray-300 transition duration-500 ease-in-out transform hover:scale-105 hover:text-yellow-400">
            Bio
          </h1>
        </div>
      </Fade>
      <Fade up cascade>
        <div>
          <p className="mx-auto w-full lg:w-3/4 mt-4 font-secondary font-normal text-gray-400 text-xl text-justify">
            Hi, I am a driven third-year undergraduate student at Pune Institute
            of Computer Technology (PICT) pursuing a B.E in Electronics and
            Telecommunications. With a passion for Web Development, UI UX
            Designing, and Graphic Designing, I have honed my skills in creating
            visually appealing designs and user-friendly websites.
            {/* <br></br>
            <br></br> */}
          </p>
          <p className="mx-auto w-full lg:w-3/4 mt-3 font-secondary font-normal text-gray-400 text-xl text-justify">
            I am a quick learner and continuously seek to expand my knowledge in
            the field. I am currently learning C++ and Java programming
            languages, which will further enhance my skills. I am not only a
            talented designer and developer, but also a natural leader who is a
            hard worker and a great team player. I thrive under pressure and am
            confident in meeting tight deadlines.
          </p>
          <p className="mx-auto w-full lg:w-3/4 mt-3 font-secondary font-normal text-gray-400 text-xl text-justify">
            Cricket and Chess are my passions, and I love to bring my creative
            skills to these games. I am eager to use my skills and experience to
            make a positive impact in my future projects. Let's connect and see
            how we can work together to create something amazing.
          </p>
        </div>
      </Fade>
      <Education />
      <Experience />
      <AllProjects />
      <Hackathons />
      <Organizations />
    </div>
  );
}
