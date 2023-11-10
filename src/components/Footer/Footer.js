const Footer = () => {
  return (
    <>
      {/* Line */}
      <div className="w-full h-px bg-[#abb2bf] mt-20 mb-8"></div>
      {/* Footer */}
      <div className="px-5 max-w-[1560px] mx-auto">
        {/* Top */}
        <div className="flex justify-between gap-y-10 flex-wrap">
          {/* Left */}
          <div className="mx-auto md:mx-0">
            <div className="flex items-center gap-8 mb-3">
              {/* Logo */}
              <div className="flex gap-2 items-center text-2xl text-white font-bold">
                <img src={require("./img/Logo.png")} alt="" />
                <span>Hafidz</span>
              </div>
              {/* Email */}
              <span className="text-[#abb2bf]">hellowould991@gmail.com</span>
            </div>
            {/* Disc */}
            <div className="text-[#ffffff]">
              <p>Web designer and front-end developer based in Indonesia</p>
            </div>
          </div>
          {/* Right */}
          <div className="mx-auto md:mx-0">
            {/* Title */}
            <h2 className="text-white text-2xl font-medium mb-3 text-center">Media</h2>
            {/* Media */}
            <div className="flex items-center gap-2">
              <a href="#">
                <img src={require("./img/instagram.png")} alt="" />
              </a>
              <a href="#">
                <img src={require("./img/linkedin.png")} alt="" />
              </a>
              <a href="#">
                <img src={require("./img/github.png")} alt="" />
              </a>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="text-center text-[#abb2bf] pb-8 mt-12">
          © Copyright 2023. Made by Hafidz
        </div>
      </div>
    </>
  );
};

export default Footer;
