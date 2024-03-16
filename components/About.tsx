import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center ">
          As a dedicated DevOps engineer with three years of hands-on experience, I thrive on orchestrating the harmonious integration of development and operations. Currently immersed in the dynamic world of WebHR, my expertise spans across a multitude of tools and technologies crucial for streamlining the software development lifecycle.
          <br />
          <br />
          With a passion for crafting efficient solutions, I navigate the ever-evolving landscape of DevOps practices. My journey involves automating workflows, ensuring continuous integration and delivery, and relentlessly pursuing optimization opportunities to enhance system reliability and scalability. I seamlessly blend cutting-edge technologies with innovative strategies to drive efficiency and agility within the development process, ultimately delivering seamless user experiences and pushing the boundaries of what's achievable in software deployment.
        </p>
      </div>
    </section>
  );
};

export default About;
