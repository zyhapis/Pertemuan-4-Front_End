const Header = () => {
    return (
        <>
            <div className="px-5 max-w-[1560px] mx-auto min-h-screen pt-20 flex items-center justify-between flex-wrap">
                <div className="w-10/12 sm:w-8/12 mx-auto">
                    <h1 className="font-semibold text-[32px] text-white mb-3">
                        Hafidz is a <span className="text-[#c778dd]">web designer</span> and{" "}
                        <span className="text-[#c778dd]">front-end developer</span>
                    </h1>
                    <p className="text-[#abb2bf] my-6">
                        He crafts responsive website where technologies meet creativity
                    </p>
                    <button className="text-white font-medium py-2 px-4 border duration-200 border-[#c778dd] hover:bg-[#c778dd33]">
                        Contact me!!
                    </button>
                </div>
                <div className="mx-auto">
                    <div className="">
                        <img src={require("./img/main.png")} alt="" />
                    </div>
                    <div className="border flex items-center gap-2 border-[#abb2bf] p-2 text-[#abb2bf]">
                        <div className="w-4 h-4 bg-[#c778dd]"></div>
                        <div className="">
                            Daijōbu desho.{" "}
                            <span className="text-white">Datte Kimi yowai mon</span>{" "}
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-5 py-10">
                <img className="mx-auto" src={require("./img/quote.png")} alt="" />
            </div>
        </>
    );
};

export default Header;
