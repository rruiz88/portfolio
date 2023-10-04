import js from "../images/javascript.svg";
import java from "../images/java.svg";
import reactLogo from "../images/reactLogo.svg";
import mysql from "../images/mysql.svg";
import node from "../images/node.svg";
import ts from "../images/typescript.svg";

const Skills = () => {
  return (
    <section id="skills">
      <h4 className="skill-header font-bold text-4xl text-center text-blue-400">
        My Top Skills
      </h4>
      <div className="skills-wrapper">
        <div className="skills">
          <img
            src={js}
            alt="javascript logo"
            loading="lazy"
            className="icon icon-card"
          />
          <img
            src={node}
            alt="node logo"
            loading="lazy"
            className="icon icon-card"
          />
          <img
            src={reactLogo}
            alt="react logo"
            loading="lazy"
            className="icon icon-card"
          />
        </div>
        <div className="skills">
          <img
            src={ts}
            alt="typescript logo"
            loading="lazy"
            className="icon icon-card"
          />
          <img
            src={java}
            alt="java logo"
            loading="lazy"
            className="icon icon-card"
          />
          <img
            src={mysql}
            alt="mysql logo"
            loading="lazy"
            className="icon icon-card"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
