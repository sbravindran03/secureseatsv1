import FrameComponent from "../components/frame-component";

import MainTabpanel from "../components/Main-tab-panel";

const Desktop = () => {
  return (
    <div className="w-full h-[1024px] relative bg-black overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[184px] box-border gap-[150px_0px] tracking-[normal] mq450:gap-[37px_0px] mq750:gap-[75px_0px] mq1050:h-auto">
    
    
    
        <FrameComponent />
        <section className="w-[1413px] flex flex-row items-start justify-start py-0 px-16 box-border max-w-full lg:pl-8 lg:pr-8 lg:box-border">
          <MainTabpanel />
        </section>
    
    </div>
  );
};

export default Desktop;
