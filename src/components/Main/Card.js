const Card = ({ img, langs, title, disc }) => {
  return (
    <>
      <div className="border mx-auto w-[90%] md:w-[48%] lg:w-[30%] border-[#abb2bf] p-0">
        {/* img */}
        <div className="">
          <img className="w-full" src={img} alt="" />
        </div>
        {/* skills */}
        <div className="flex gap-2 flex-wrap p-2 border-y border-[#abb2bf]">
          {langs.map((e) => {
            return <span className="text-[#abb2bf]">{e}</span>;
          })}
        </div>
        {/* disc */}
        <div className="p-4">
          <h2 className="text-[#ffffff] text-2xl font-medium">{title}</h2>
          <p className="py-4 text-[#abb2bf]">{disc}</p>
          {/* btns */}
          <div className="">
            <button className="py-2 px-4 text-white border border-[#c778dd] hover:bg-[#c778dd33] duration-150">
              Live {"<"}~{">"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
