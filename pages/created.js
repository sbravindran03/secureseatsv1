import FrameComponent from "../components/frame-component";
import AboutTabFrame from "../components/about-tab-frame";

const Desktop = () => {
  return (
    <div className="w-full h-[1024px] relative bg-black overflow-hidden flex flex-col items-end justify-start pt-0 pb-24 pr-0 pl-[19px] box-border gap-[102px_0px] tracking-[normal] text-left text-smi-9 text-shades-white font-inter mq450:gap-[102px_0px] mq750:gap-[102px_0px] mq1100:h-auto">
      <div className="w-[109.5px] h-[27.9px] relative hidden" />
      <FrameComponent />
    
     
    
     
     
      <main className="w-[1379px] flex flex-row items-start justify-start py-0 px-[62px] box-border max-w-full shrink-0 mq1275:pl-[31px] mq1275:pr-[31px] mq1275:box-border">
        <section className="flex-1 flex flex-col items-start justify-start gap-[79px_0px] max-w-full text-center text-base text-shades-white font-manrope mq450:gap-[79px_0px] mq750:gap-[79px_0px]">
          <div className="w-[1081px] h-[38px] box-border flex flex-row items-center justify-center py-2 pr-[21px] pl-5 max-w-full border-[1px] border-solid border-deepskyblue">
            <div className="self-stretch w-[278px] relative font-semibold inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0">{`Event has been created `}</div>
          </div>
          <AboutTabFrame />
        </section>
      </main>
    </div>
  );
};

export default Desktop;
