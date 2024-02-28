import { useMemo } from "react";

const Link = ({ figureHttps3A2F2Fmediains, experiences, propWidth }) => {
  const spancardGenreStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="self-stretch rounded-t-md rounded-b-none bg-whitesmoke-200 overflow-hidden flex flex-row items-start justify-end pt-2 px-[9px] pb-[181px] relative">
      <img
        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden object-cover"
        loading="lazy"
        alt=""
        src={figureHttps3A2F2Fmediains}
      />
      <button
        className="cursor-pointer [border:none] py-1.5 pr-[7px] pl-2 bg-deepskyblue rounded-md flex flex-row items-center justify-center z-[1] hover:bg-steelblue-100"
        style={spancardGenreStyle}
      >
        <b className="relative text-sm uppercase font-inter text-white text-left">
          {experiences}
        </b>
      </button>
    </div>
  );
};

export default Link;
