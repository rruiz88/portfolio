import photoSocial from "../images/photoSocial.png";

const About = () => {
  return (
    //about section container
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow border shadow-2xl rounded-2xl p-6 mr-6 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-400">
            Hi, I'm Roman.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            I was laid off over a year ago working as a licensed insurance sales
            agent and took that time to develop my programming skills with the
            help of a non-profit,
            <a
              href="https://www.launchcode.org/"
              className="hover:text-blue-400"
            >
              {" "}
              LaunchCode.
            </a>{" "}
            During this time, I have developed a deep understanding of these
            technologies and have used them to build a variety of applications.
            I am comfortable working with both front-end and back-end
            technologies and am able to work independently or as part of a team.
            Through these experiences, I have developed strong communication
            skills and am able to work effectively with others. I am excited
            about the opportunity to bring my skills and experience to your
            comapny and believe that I would be an asset to your team.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Hire Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 hover:text-white rounded text-lg"
            >
              See My Past Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-2xl"
            alt="me"
            src={photoSocial}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
