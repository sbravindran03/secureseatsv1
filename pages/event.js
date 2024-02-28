import FrameComponent from "../components/frame-component";
import NameOfEvent from "../components/name-of-event";
import IconVectorFrame from "../components/icon-vector-frame";
import UploadImage from "../components/upload";

const Desktop = () => {
  return (
    <div className="w-full h-[1024px] relative bg-black overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-8 box-border gap-[18px_0px] tracking-[normal] text-left text-smi-9 text-shades-white font-inter mq925:h-auto">
      <header className="w-[1920px] h-[60px] relative bg-black hidden max-w-full" />
      <div className="w-[321px] h-[178px] flex flex-row items-start justify-start pt-0 pb-[141px] pr-0 pl-5 box-border max-w-full">
        <div className="h-0 w-0 relative">
          <img
            className="absolute top-[NaNpx] left-[NaNpx] rounded-[99.59px] w-[39.8px] h-[37.8px] hidden"
            alt=""
            src="/link.svg"
          />
          <img
            className="absolute top-[NaNpx] left-[NaNpx] rounded-[99.59px] w-[39.8px] h-[37.8px] hidden"
            alt=""
            src="/link.svg"
          />
        </div>
      </div>
      <div className="w-[109.5px] h-[27.9px] relative hidden" />
      <div className="w-[169.3px] h-[37.8px] relative rounded-[99.59px] box-border hidden border-[1px] border-solid border-gray">
        <img
          className="absolute top-[calc(50%_-_11.9px)] left-[12.9px] w-[23.9px] h-[23.9px] overflow-hidden hidden"
          alt=""
          src="/svg.svg"
        />
        <div className="absolute top-[9.2px] left-[42.8px] leading-[19.42px] font-semibold hidden items-center w-[113.9px] h-[19.4px]">
          Events in Chennai
        </div>
      </div>
      <div className="w-[119.4px] h-[37.8px] relative rounded-[99.59px] box-border hidden border-[1px] border-solid border-gray">
        <div className="absolute top-[9.2px] left-[12.9px] leading-[19.42px] font-semibold hidden items-center w-[93.9px] h-[19.4px]">
          List your event
        </div>
      </div>
      <div className="w-[126.4px] h-[37.8px] relative rounded-[99.59px] bg-black box-border hidden border-[1px] border-solid border-deepskyblue">
        <img
          className="absolute top-[calc(50%_-_11.9px)] left-[12.9px] w-[23.9px] h-[23.9px] overflow-hidden hidden"
          alt=""
          src="/svg.svg"
        />
        <div className="absolute top-[8.5px] left-[42.8px] leading-[19.42px] capitalize font-semibold hidden items-center w-[53.1px] h-[19.4px]">
          chennai
        </div>
        <img
          className="absolute top-[16.2px] left-[101.5px] w-3 h-[7px] overflow-hidden hidden"
          alt=""
          src="/svg.svg"
        />
      </div>
      <FrameComponent />
      <div className="w-[113.4px] h-[37.8px] relative rounded-[99.59px] box-border hidden border-[1px] border-solid border-deepskyblue">
        <div className="absolute top-[9px] left-[9px] leading-[19.42px] font-semibold hidden">
          Connect wallet
        </div>
      </div>
      <div className="w-8 relative text-12xl-3 leading-[46.92px] capitalize font-semibold text-black hidden mq450:text-lgi mq450:leading-[28px] mq925:text-6xl mq925:leading-[38px]">
        🎫
      </div>
      <div className="w-[87.6px] relative leading-[19.42px] capitalize font-semibold hidden items-center">
        <span className="[line-break:anywhere] w-full">
          <p className="m-0">SECURE</p>
          <p className="m-0">SEATS</p>
        </span>
      </div>
      <main className="self-stretch rounded bg-black flex flex-col items-center justify-start pt-1 px-3 pb-[33px] box-border gap-[24px_0px] max-w-full shrink-0 z-[1] text-left text-base text-shades-white font-manrope mq450:pb-5 mq450:box-border mq925:pt-5 mq925:pb-[21px] mq925:box-border">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[0px_8px] max-w-full text-[20px]">
          <div className="h-6 w-6 rounded box-border flex flex-row items-center justify-center py-2 px-[3px] border-[1px] border-solid border-neutral-200">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/icon.svg"
            />
          </div>
          <h3 className="m-0 h-[27px] flex-1 relative text-inherit font-semibold font-inherit inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[120px] max-w-full mq450:text-base ">
            Create an Event
          </h3>
        </div>
        <NameOfEvent />
        <div className="self-stretch h-[38px] flex flex-row items-start justify-start">
          <button className="cursor-pointer pt-2 px-0 pb-[3px] bg-[transparent] self-stretch w-[122px] box-border flex flex-col items-center justify-start gap-[5px_0px] border-[1px] border-solid border-deepskyblue">
            <div className="w-[81px] flex-1 relative text-base font-semibold font-manrope text-shades-white text-center inline-block overflow-hidden text-ellipsis whitespace-nowrap">
              Event
            </div>
            <div className="self-stretch h-0 flex flex-row items-start justify-start py-0 px-0 box-border">
              <div className="h-0.5 flex-1 relative box-border border-t-[2px] border-solid border-seagreen" />
            </div>
          </button>
        </div>
        <section className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-mini text-khaki-100 font-manrope">
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px_0px] max-w-full">
            <div className="self-stretch relative font-semibold">
              Description
            </div>
           <div className="h-[115px] rounded box-border flex flex-row items-start justify-start pt-3 pb-5 pr-80 pl-2 max-w-full border-[1px] border-solid border-shades-white">
  <input
    className="w-full border-none outline-none font-manrope text-sm bg-transparent h-8 text-neutral-500 inline-block overflow-hidden whitespace-nowrap"
    placeholder="Details about event"
    type="text"
  />
</div>

          </div>
        </section>
        <IconVectorFrame />
        <div className="self-stretch h-[22px] flex flex-row items-start justify-start text-neutral-800">
          <div className="self-stretch w-[98px] flex flex-row items-center justify-start py-0 pr-5 pl-0 box-border gap-[0px_8px]">
            <input
              className="m-0 h-4 w-4 relative rounded-sm"
              type="checkbox"
            />
            <div className="self-stretch flex-1 relative overflow-hidden text-ellipsis whitespace-nowrap">
              Repeat
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[0px_16px] max-w-full">
          <button className="cursor-pointer [border:none] py-1.5 px-3 bg-neutral-100 h-11 w-[102px] rounded flex flex-row items-center justify-center box-border whitespace-nowrap hover:bg-lightgray">
            <div className="w-[54px] relative text-base font-semibold font-manrope text-neutral-500 text-center inline-block">{`IMAGE `}</div>
          </button>
          <div className="flex-1 rounded box-border flex flex-row items-center justify-center py-1.5 px-2 gap-[0px_4px] min-w-[355px] min-h-[44px] max-w-full border-[1px] border-solid border-darkslategray mq450:min-w-full">
            <img
              className="h-5 w-5 relative"
              loading="lazy"
              alt=""
              src="/left-icon.svg"
            />
            <div className="overflow-hidden flex flex-row items-center justify-center py-0 px-0.5 box-border max-w-[calc(100%_-_24px)]">
              <div className="relative font-semibold whitespace-pre-wrap">{`UPLOAD THE BANNER IMAGE  OF THE EVENT `}</div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[0px_16px] max-w-full text-center text-neutral-500">
          <div className="h-11 w-[102px] rounded bg-neutral-100 flex flex-row items-center justify-center py-1.5 px-3 box-border whitespace-nowrap">
            <div className="w-[54px] relative font-semibold inline-block">{`IMAGE `}</div>
          </div>
          <div className="flex-1 rounded box-border flex flex-row items-center justify-center py-1.5 px-2 gap-[0px_4px] min-w-[296px] min-h-[44px] max-w-full text-left text-shades-white border-[1px] border-solid border-steelblue-100">
            <img className="h-5 w-5 relative" alt="" src="/left-icon-1.svg" />
            <div className="overflow-hidden flex flex-row items-center justify-center py-0 px-1">
              <UploadImage/>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[0px_16px] max-w-full text-center text-neutral-500">
          <div className="h-11 w-[102px] rounded bg-neutral-100 flex flex-row items-center justify-center py-1.5 px-3 box-border">
            <div className="relative font-semibold">Cancel</div>
          </div>
          <div className="flex-1 rounded box-border flex flex-row items-center justify-center py-1.5 px-2 gap-[0px_4px] min-w-[127px] min-h-[44px] max-w-full text-left text-shades-white border-[1px] border-solid border-steelblue-100">
            <img className="h-5 w-5 relative" alt="" src="/left-icon.svg" />
            <div className="overflow-hidden flex flex-row items-center justify-center py-0 px-0.5">
              <div className="relative font-semibold">Create Event</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Desktop;
