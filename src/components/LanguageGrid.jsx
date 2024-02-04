import Language from "./Language";
import HTML from "../../assets/html.svg";
import CSS from "../../assets/css.svg";
import JS from "../../assets/js.svg";
import ReactJs from "../../assets/reactjs.svg";
import NodeJs from "../../assets/nodejs.svg";
import ExpressJs from "../../assets/expressjs.svg";
import Mui from "../../assets/mui.svg";
import Vite from "../../assets/vite.svg";
import Vercel from "../../assets/vercel.svg";
import Mongo from "../../assets/mongo.svg";
import Github from "../../assets/github.svg";
import Git from "../../assets/git.svg";
import Figma from "../../assets/figma.svg";
import Tailwind from "../../assets/tailwind.svg";

const LanguageGrid = () => {
  return (
    <div className="w-5/6 mx-auto mb-20 flex flex-col gap-10">
      <h1 className="text-4xl font-bold">Technologies Known</h1>
      <div className="w-full flex items-center justify-center gap-5 flex-wrap">
        <Language logo={HTML} name="HTML" />
        <Language logo={CSS} name="CSS" />
        <Language logo={JS} name="Javascript" />
        <Language logo={ReactJs} name="React" />
        <Language logo={NodeJs} name="NodeJs" />
        <Language logo={ExpressJs} name="Express" />
        <Language logo={Mongo} name="MongoDB" />
        <Language logo={Mui} name="MongoDB" />
        <Language logo={Tailwind} name="Tailwind Css" />
        <Language logo={Vite} name="Vite" />
        <Language logo={Vercel} name="Vercel" />
        <Language logo={Git} name="Git" />
        <Language logo={Github} name="GitHub" />
        <Language logo={Figma} name="Figma" />
      </div>
    </div>
  );
};

export default LanguageGrid;
