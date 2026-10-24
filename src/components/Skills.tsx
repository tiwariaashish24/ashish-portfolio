import Skillicon from "./Skillicon";

const Skills = () => {
  return (
    <div className="flex flex-col gap-3 flex-wrap justify-center m-10 mt-5 pt-3">
      <span className="text-4xl md:text-7xl text-[#7e3bc6] text-center font-extrabold m-4 text-upside-down">
        My Skills
      </span>

      {/* Programming Languages & Frontend */}
      <div className="flex gap-3 flex-wrap justify-center">
        <Skillicon imgurl={"/java.png"} />
        <Skillicon imgurl={"/html5.svg"} />
        <Skillicon imgurl={"/css3.svg"} />
        <Skillicon imgurl={"/javascript.svg"} />
        <Skillicon imgurl={"/typescript.svg"} />
        <Skillicon imgurl={"/react.svg"} />
        <Skillicon imgurl={"/nextjs.svg"} />
      </div>

      {/* Frontend Libraries & AI Tools */}
      <div className="flex gap-3 flex-wrap justify-center">
        <Skillicon imgurl={"/tailwind-css.svg"} />
        <Skillicon imgurl={"/mui.png"} />
        <Skillicon imgurl={"/framer.png"} />
        <Skillicon imgurl={"/redux.png"} />
        <Skillicon imgurl={"/claude.svg"} />
        <Skillicon imgurl={"/better-auth.svg"} />
      </div>

      {/* Backend & API Development */}
      <div className="flex gap-3 flex-wrap justify-center">
        <Skillicon imgurl={"/nodejs.svg"} />
        <Skillicon imgurl={"/express.svg"} />
        <Skillicon imgurl={"/socket-io.svg"} />
        <Skillicon imgurl={"/mcp.svg"} />
        <Skillicon imgurl={"/postman.svg"} />
      </div>

      {/* Databases & ORM */}
      <div className="flex gap-3 flex-wrap justify-center">
        <Skillicon imgurl={"/mongodb.svg"} />
        <Skillicon imgurl={"/mysql.svg"} />
        <Skillicon imgurl={"/postgresql.svg"} />
        <Skillicon imgurl={"/redis.svg"} />
        <Skillicon imgurl={"/neo4j.svg"} />
        <Skillicon imgurl={"/neon.svg"} />
        <Skillicon imgurl={"/prisma.svg"} />
    
      </div>

      {/* Developer Tools & DevOps */}
      <div className="flex gap-3 flex-wrap justify-center z-20">
        <Skillicon imgurl={"/git.svg"} />
        <Skillicon imgurl={"/github.svg"} />
        <Skillicon imgurl={"/cursor.svg"} />
        <Skillicon imgurl={"/docker.svg"} />
        <Skillicon imgurl={"/kubernetes.svg"} />
        <Skillicon imgurl={"/turborepo.svg"} />
        <Skillicon imgurl={"/vscode.png"} />
      </div>

      {/* Coding Profiles & Social Links */}
      <div className="flex gap-3 flex-wrap justify-center z-20">
        <Skillicon imgurl={"/github-icon.jpeg"} />
        {/* <Skillicon imgurl={"/linkedin-icon.jpg"} />
        <Skillicon imgurl={"/codeforces.jpg"} />
        <Skillicon imgurl={"/leetcode.jpg"} /> */}
      </div>
    </div>
  );
};

export default Skills;