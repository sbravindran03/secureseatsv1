import FrameComponent from "../components/frame-component";
import EventsFrame from "../components/events-frame";

const Desktop = () => {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-col items-center justify-start pt-20 px-0 pb-[271px] box-border gap-[164px_0px] tracking-[normal] text-left text-smi-9 text-shades-white font-inter mq750:gap-[164px_0px] mq450:gap-[164px_0px]">
     
     
      <FrameComponent />
     
      <EventsFrame />
    </div>
  );
};

export default Desktop;
