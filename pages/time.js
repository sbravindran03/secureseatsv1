import  FrameComponent from "../components/frame-component";
import DivshowPartial from "../components/DivshowPartial";

const Desktop = () => {
  return (
    <div className="w-full h-[1024px] relative bg-black overflow-hidden flex flex-col items-start justify-start gap-[150px_0px] tracking-[normal] mq450:gap-[150px_0px] mq975:gap-[150px_0px] mq700:h-auto">
     
     
     <FrameComponent />
      <main className="mb-[-1572px] self-stretch flex flex-col items-center py-3 justify-start gap-[51px_0px] max-w-full shrink-0 mq975:gap-[51px_0px]">
      
        <section className="w-[957px] flex flex-row items-start justify-start py-0 pr-[13px] pl-0 box-border max-w-full text-left text-lg text-shades-white font-functional-button-b2 mq975:max-w-[calc(100%_-_13px)]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[27px_0px] max-w-full">
            <div className="self-stretch flex flex-col items-center justify-start max-w-full text-center py-7 text-[32.3px] text-khaki-100">
              <div className="w-[842px] flex flex-row items-start justify-start py-20 pr-[17px] pl-0 box-border max-w-full mq975:max-w-[calc(100%_-_17px)]">
                <b className="h-[62px] flex-1 relative leading-[45.27px] flex items-center justify-center max-w-full z-[1] mq450:text-lgi mq450:leading-[27px] mq975:text-[26px] mq975:leading-[36px]">{`Book your tickets , By your affordable time `}</b>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[27px_0px] text-left text-sm text-shades-white">
                <DivshowPartial heading31030AM="10:30 AM" />
                <DivshowPartial heading31030AM="11:00 AM" />
                <DivshowPartial heading31030AM="11:30 AM" />
                <DivshowPartial heading31030AM="12:00 PM" />
                <DivshowPartial heading31030AM="12:30 PM" />
               
               
               
              </div>
            </div>
           
            
          </div>
        </section>
      </main>
    </div>
  );
};

export default Desktop;
