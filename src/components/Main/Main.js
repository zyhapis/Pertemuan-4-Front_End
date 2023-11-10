import Card from "./Card";
import Projek1 from "./img/projek1.png";
import Projek2 from "./img/projek2.png";
import Projek3 from "./img/projek3.png";

const Main = () => {
  // date
  const main = [
    {
      img: Projek1,
      langs: ["html", "css"],
      title: "Website DKM PeTIK Jombang",
      disc: "My first project",
    },
    {
      img: Projek2,
      langs: ["React.js"],
      title: "MyPortofolio",
      disc: "My first portfolio",
    },
    {
      img: Projek3,
      langs: ["React.js"],
      title: "Karasu",
      disc: "Website Stream Anime and Read Manga",
    },
  ];

  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* Top */}
        <div className="flex justify-between items-center gap-5">
          {/* Left */}
          <div className="text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
            <div className="">
              <span className="text-[#c778dd]">#</span>projects
            </div>
            <div className="line w-2/3 h-px bg-[#c778dd]"></div>
          </div>
          {/* Right */}
          <div className="text-white font-medium">
            <a href="">
              <span>View all ~~&gt;</span>
            </a>
          </div>
        </div>
        {/* Bottom */}
        <div className="flex flex-wrap justify-between gap-4 my-12">
            {/* Card */}
          {main.map(({ img, langs, title, disc }) => {
            return (
              <>
                <Card img={img} langs={langs} title={title} disc={disc} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Main;
