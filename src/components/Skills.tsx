import Skillicon from "./Skillicon";

const Skills = () => {
  return (
    <div className=" flex flex-col gap-3 flex-wrap justify-center m-10 mt-5 pt-3">
        <span className="text-4xl md:text-7xl  text-[#7e3bc6] text-center font-extrabold m-4 text-upside-down">
        My Skills
      </span>
      <div className="flex gap-3 flex-wrap justify-center ">
        <Skillicon imgurl={"/c.png"} />
        <Skillicon imgurl={"/c++.png"} />
        <Skillicon imgurl={"/java.png"} />
        <Skillicon imgurl={"/python.png"} />
        <Skillicon imgurl={"/html.png"} />
        <Skillicon imgurl={"/css.png"} />
        <Skillicon imgurl={"/js.png"} />
        <Skillicon imgurl={"/react.png"} />
        <Skillicon imgurl={"/next.png"} />
      </div>

      <div className="flex gap-3 flex-wrap justify-center ">
        <Skillicon imgurl={"/tailwind.png"} />
        <Skillicon imgurl={"/ts.png"} />
        <Skillicon imgurl={"/mui.png"} />
        <Skillicon imgurl={"/framer.png"} />
        <Skillicon imgurl={"/redux.png"} />
        <Skillicon imgurl={"/figma.png"} />
        <Skillicon imgurl={"/node.png"} />
      </div>

      <div className="flex gap-3 flex-wrap justify-center ">
        <Skillicon imgurl={"/express.png"} />
        <Skillicon imgurl={"/mongodb.png"} />
        <Skillicon imgurl={"/firebase.png"} />
        <Skillicon imgurl={"/git.png"} />
        <Skillicon imgurl={"/github-icon.jpeg"} />
      </div>
      <div className="flex gap-3 flex-wrap justify-center z-20">
        <Skillicon imgurl={"/vscode.png"} />
        <Skillicon imgurl={"/sublime.png"} />
        <Skillicon imgurl={"/docker.png"} />
      </div>
      <div className="flex gap-3 flex-wrap justify-center  z-20">
        <Skillicon imgurl={"/mysql.png"} />
      </div>
    </div>
  );
};

export default Skills;
