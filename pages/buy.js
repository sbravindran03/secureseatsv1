import FrameComponent from "../components/frame-component";
import Ticket from "../components/ticket";


const Desktop = () => {
  return (
    <div className="w-full h-[1024px] relative bg-black overflow-hidden tracking-[normal] text-left text-smi-9 text-shades-white font-inter">
  
      <FrameComponent />
    
    
    
      
      
     
      
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[344px] left-[1345px] w-[132px] flex flex-row items-center justify-center">
        <div className="flex-1 rounded-[5.98px] bg-khaki-100 flex flex-row items-center justify-center pt-3 px-[11px] pb-[11px]">
          <div className="w-[89px] relative text-4xl-9 tracking-[-0.75px] leading-[35.87px] font-semibold font-inter text-black text-left inline-block box-border pl-5 pr-5 mq450:text-lgi mq450:leading-[29px]">
            BUY
          </div>
        </div>
      </button>
      <div className="absolute top-[261.3px] left-[1100.2px] text-[30.9px] tracking-[-0.97px] leading-[46.33px] font-semibold mq450:text-lgi mq450:leading-[28px] mq750:text-6xl mq750:leading-[37px]">
        Rs.1922 x
      </div>
      <Ticket/>
      <div className="absolute top-[-30px] left-[-250px] w-[830px] flex flex-col items-end justify-start pt-[387px] px-[34px] pb-[22px] box-border gap-[22px_0px] min-h-[589px] max-w-full text-center text-xl">
        <b className="w-full h-full absolute !m-[0] top-[0px] left-[28px] leading-[64px] flex items-center justify-center z-[2] mq450:text-base mq450:leading-[51px]">
          Phase 1 | Ticket will be generated in NFT
        </b>
        <b className="relative leading-[64px] inline-block max-w-full z-[3] mq450:text-base mq450:leading-[51px] left-[-132px]">
          Please arrive 15 minutes prior to your chosen slot time.
        </b>
        <div className="flex flex-row items-start justify-start py-0 px-[59px] box-border max-w-full ">
          <b className="relative leading-[64px] left-[-110px] z-[3] mq450:text-base mq450:leading-[51px]">
            The show goes on for approximately 30 minutes.
          </b>
        </div>
      </div>
      <b className="absolute bottom-[666px] left-[70px] text-xl leading-[64px] text-center whitespace-nowrap z-[3] mq450:text-base mq450:leading-[51px]">
        Note : Tickets are valid for The entry
      </b>
    </div>
  );
};

export default Desktop;
