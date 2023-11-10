import { useState } from "react";

const Hello = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-[#282c33]">
        <div className="px-5 max-w-[1560px] mx-auto flex items-center justify-between pt-6 my-2">
          <div className="left flex gap-2 items-center font-bold text-white text-base">
            {/* logo */}
            <div className="img">
              <img src={require("./img/Logo.png")} alt="" />
            </div>
            Hafidz
          </div>
          <div className="right flex items-center">
            <div className={`menu duration-300 flex-col justify-center md:flex-row flex fixed w-full ${!toggle ? `right-[-100%] top-0 bottom-0` : `right-0 top-0 bottom-0`}  bg-[#282c33] md:static`}>
              <a href="#">
                <li className="text-[#abb2bf] text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
                  <span className="text-[#c778dd] font-medium">#</span>home
                </li>
              </a>
              <a href="#">
                <li className="text-[#abb2bf] text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
                  <span className="text-[#c778dd] font-medium">#</span>projects
                </li>
              </a>
              <a href="#">
                <li className="text-[#abb2bf] text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
                  <span className="text-[#c778dd] font-medium">#</span>footer
                </li>
              </a>
              <div onClick={() => setToggle(false)} className="close absolute block md:hidden right-3 top-3">
                <img src={require("./img/close.png")} alt="" />
              </div>
            </div>
            {/* Close & Open Btns */}
            <div onClick={() => setToggle(true)} className="">
              <div className="open block md:hidden w-8">
                <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#d9d9d9]"></div>
                <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#d9d9d9]"></div>
                <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#d9d9d9]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hello;
