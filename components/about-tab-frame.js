const AboutTabFrame = () => {
    return (
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-2 box-border max-w-full text-left text-xl-5 text-shades-white font-inter">
        <div className="flex-1 flex flex-col items-start justify-start gap-[50px_0px] max-w-full mq750:gap-[50px_0px]">
          <img
            className="w-[654.2px] h-[347.1px] relative overflow-hidden shrink-0 max-w-full"
            loading="lazy"
            alt=""
            src="/anderson.png"
          />
          <div className="w-[959px] box-border flex flex-row items-center justify-start pt-0 px-0 pb-0.5 max-w-full shrink-0 border-b-[1.1px] border-solid border-whitesmoke">
            <div className="h-[38px] w-[72px] flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border">
              <div className="mt-[-1px] self-stretch overflow-hidden flex flex-row items-start justify-center pt-0 px-0 pb-[7px] border-b-[2.3px] border-solid border-black">
                <input
                  className="w-full [border:none] [outline:none] bg-[transparent] h-8 flex-1 flex flex-col items-start justify-start font-inter font-bold text-5xl text-shades-white min-w-[43px]"
                  placeholder="About"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-end justify-start gap-[0px_54px] max-w-full shrink-0 mq1275:flex-wrap mq750:gap-[0px_54px]">
            <div className="h-[164.5px] relative leading-[34.94px] flex items-center max-w-full mq450:text-base mq450:leading-[28px]">
              <span>
                <p className="m-0">
                  For the first time in India witness Van Gogh in Full Brilliance:
                  20k Lumens Projectors Illuminate
                </p>
                <p className="m-0">India's Immersive Showcase.</p>
                <p className="m-0">
                  The Real Van Gogh Immersive Experience takes visitors on a
                  mesmerising journey through Van
                </p>
                <p className="m-0">
                  Gogh's complex life and extraordinary body of work, offering a
                  unique and engaging way to
                </p>
                <p className="m-0">
                  interact with the works of Vincent Van Gogh.
                </p>
              </span>
            </div>
            <div className="w-[277px] rounded-[3.57px] bg-khaki-100 overflow-hidden shrink-0 flex flex-row items-center justify-center py-4 px-3.5 box-border whitespace-nowrap text-center text-2xl-4 text-black">
              <div className="relative tracking-[3.57px] leading-[24.98px] uppercase">
                see your event
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutTabFrame;
  