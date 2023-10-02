import github from "../images/github.svg";
import facebook from "../images/facebook.svg";
import linkedin from "../images/linkedin.svg";

const Footer = () => {
  return (
    <footer className="py-16 bg-blue-400">
      <div className="flex space-x-10 justify-center">
        <a href="https://github.com/rruiz88">
          <img src={github} alt="github logo" className="h-6" />
        </a>
        <a href="https://facebook.com/romangsr">
          <img src={facebook} alt="facebook logo" className="h-6" />
        </a>
        <a href="https://www.linkedin.com/in/romaneruiz/">
          <img src={linkedin} alt="linkedin logo" className="h-6" />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
