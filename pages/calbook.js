import FrameComponent from "../components/frame-component";

import EventLink from "../components/event-link";

const Desktop = () => {
  return (
    <div className="w-full h-[1024px] relative bg-black overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[190px] box-border gap-[99px_0px] tracking-[normal] mq450:gap-[99px_0px] mq750:h-auto mq750:gap-[99px_0px]">
    
      <FrameComponent />
      
      <section className="w-[1410px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full shrink-0">
        <EventLink />
      </section>
    </div>
  );
};

export default Desktop;
