const DivshowPartial = ({ heading31030AM }) => {
    return (
      <div className="self-stretch flex flex-row items-start justify-between pt-[27px] px-0 pb-7 gap-[20px] z-[2] text-left text-lg text-shades-white font-functional-button-b2 border-b-[1.1px] border-solid border-gainsboro-400 mq450:flex-wrap mq450:justify-center">
        <div className="relative whitespace-nowrap">{heading31030AM}</div>
        <button className="cursor-pointer [border:none] pt-[9px] pb-3 pr-[26px] pl-[27px] bg-steelblue-400 rounded-[2.25px] overflow-hidden flex flex-row items-center justify-center hover:bg-steelblue-500 bg-cyan-700">
          <div className="relative text-sm-5 tracking-[2.25px] leading-[15.74px] uppercase font-functional-button-b2 text-shades-white text-center">
            Book
          </div>
        </button>
      </div>
    );
  };
  
  export default DivshowPartial;
  