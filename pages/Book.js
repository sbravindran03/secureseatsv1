import { useCallback } from "react";
import FrameComponent from "../components/frame-component";
import Link from "../components/link";

const Desktop = () => {
  const onLinkContainer1Click = useCallback(() => {
    // Please sync "Desktop - 6" to the project
  }, []);

  return (
    <div className="w-full h-[1024px] relative bg-black overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-8 box-border gap-[159px_0px] tracking-[normal] text-left text-smi-9 text-white font-inter mq450:gap-[159px_0px] mq750:gap-[159px_0px] mq1050:h-auto">
     
     <FrameComponent />
      
      <div className="w-[366px] h-[37px] flex flex-row items-start justify-start py-0 px-[65px] box-border max-w-full">
        
      </div>
   
     
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-0 box-border max-w-full">
        <main className="w-[1920px] flex flex-col items-start justify-start gap-[51px_0px] max-w-[133%] shrink-0 mq750:gap-[51px_0px]">
        
          <section className="self-stretch flex flex-col items-start justify-start relative gap-[15px_0px] max-w-full text-left text-[18.7px] text-white font-inter">
           
            <div className="w-[1402px] flex flex-row items-start justify-start py-0 px-[42px] box-border max-w-full lg:pl-[21px] lg:pr-[21px] lg:box-border">
              <div className="flex-1 flex flex-col items-end justify-start gap-[31px_0px] max-w-full mq750:gap-[31px_0px]">
                <div className="self-stretch flex flex-row items-center justify-between py-0 pr-px pl-0 gap-[20px] mq450:flex-wrap">
                  <div className="w-[238px] flex flex-row items-center justify-start gap-[0px_13px]">
                    <img
                      className="h-[49px] w-12 relative rounded-[48.5px]"
                      loading="lazy"
                      alt=""
                      src="/divcss5utof8.svg"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                      <div className="self-stretch overflow-hidden flex flex-row items-start justify-start">
                        <b className="w-[216px] relative leading-[28px] uppercase flex items-center shrink-0">
                          {" "}
                          TrENDING Events
                        </b>
                      </div>
                    </div>
                  </div>
                  <button className="cursor-pointer py-1.5 pr-[5px] pl-2.5 bg-white rounded-[5px] flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-darkgray hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray">
                    <div className="relative text-base font-inter text-black text-left">
                      View all
                    </div>
                  </button>
                </div>
                <div className="w-[1280px] grid flex-row items-start justify-start pt-0 px-0 pb-2 box-border gap-[0px_40px] max-w-full grid-cols-[repeat(3,_minmax(300px,_1fr))] text-base text-gray-100 mq750:gap-[0px_40px] mq750:grid-cols-[minmax(300px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(300px,_520px))]">
                  <div className="rounded-xl bg-khaki box-border flex flex-col items-center justify-start pt-px px-0 pb-2.5 gap-[10px_0px] max-w-full border-[1px] border-solid border-whitesmoke-100">
                    <Link
                      figureHttps3A2F2Fmediains="/anderson.png"
                      experiences="Experiences"
                    />
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-[9px]">
                      <b className="relative leading-[24px]">
                        <p className="m-0 ">
                          The Real Van Gogh Immersive Experience -
                        </p>
                        <p className="m-0">Chennai</p>
                      </b>
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 pr-[49px] pl-[9px] box-border max-w-full text-smi text-darkslategray mq450:pr-5 mq450:box-border">
                      <div className="w-[340px] flex flex-col items-start justify-start gap-[9px_0px] max-w-full">
                        <div className="self-stretch flex flex-row items-start justify-start gap-[0px_9px] mq450:flex-wrap">
                          <img
                            className="h-[25px] w-6 relative overflow-hidden shrink-0 min-h-[25px]"
                            alt=""
                            src="/link--svg.svg"
                          />
                          <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[200px]">
                            <div className="self-stretch overflow-hidden flex flex-row items-start justify-start">
                              <div className="relative leading-[19.5px] font-semibold">
                                New dates: 2 February - 17 March | 10AM - 10PM
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[0px_9px]">
                          <img
                            className="h-6 w-6 relative overflow-hidden shrink-0"
                            alt=""
                            src="/link--svg-1.svg"
                          />
                          <div className="h-[19.5px] overflow-hidden flex flex-row items-center justify-center pt-0 px-0 pb-px box-border">
                            <div className="h-[19px] flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border">
                              <div className="mt-[-1px] relative leading-[19.5px] font-semibold">
                                Express Avenue Mall, Gate no 3, Chennai
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="w-[380px] rounded-4xs bg-aliceblue flex flex-row items-start justify-between py-[11px] px-[9px] box-border max-w-full gap-[20px] cursor-pointer text-xs-1 text-gray-200 mq450:flex-wrap"
                      onClick={onLinkContainer1Click}
                    >
                      <b className="relative leading-[16px] uppercase">
                        ₹999 Onwards
                      </b>
                      <div className="flex flex-row items-center justify-end py-0 pr-0 pl-2.5 text-2xs-8 border-l-[1px] border-solid border-deepskyblue">
                        <b className="relative leading-[16px] uppercase">
                          Buy now
                        </b>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl bg-khaki box-border flex flex-col items-center justify-start pt-px px-0 pb-2.5 gap-[21px_0px] max-w-full border-[1px] border-solid border-whitesmoke-100">
                    <Link
                      figureHttps3A2F2Fmediains="/figure--https3a2f2fmediainsiderin2fimage2fupload2fc-crop2cg-custom2fv17072997082fethqprd7lon9ajpwu6hjjpg@2x.png"
                      experiences="Music"
                      propWidth="63px"
                    />
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-[9px]">
                      <div className="overflow-hidden flex flex-row items-start justify-start">
                        <b className="relative leading-[24px]">
                          Darshan Raval - Live in Chennai
                        </b>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start py-0 px-[9px] gap-[12px_0px] text-smi text-darkslategray">
                      <div className="flex flex-col items-start justify-start gap-[9px_0px]">
                        <div className="flex flex-row items-start justify-start gap-[0px_9px]">
                          <img
                            className="h-[25px] w-6 relative overflow-hidden shrink-0 min-h-[25px]"
                            alt=""
                            src="/link--svg.svg"
                          />
                          <div className="h-[22px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                            <div className="relative leading-[19.5px] font-semibold">
                              March 3 | Gates Open at 5PM
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[0px_9px]">
                          <img
                            className="h-6 w-6 relative overflow-hidden shrink-0"
                            alt=""
                            src="/link--svg-1.svg"
                          />
                          <div className="h-[19.5px] overflow-hidden flex flex-row items-center justify-center pt-0 px-0 pb-px box-border">
                            <div className="h-[18px] flex flex-col items-start justify-start py-0 px-0 box-border">
                              <div className="mt-[-1px] relative leading-[19.5px] font-semibold">
                                YMCA Royapettah, Chennai
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-4xs bg-aliceblue flex flex-row items-start justify-between py-[11px] px-[9px] gap-[20px] text-[10.9px] text-gray-200 mq450:flex-wrap">
                        <b className="relative leading-[16px] uppercase">
                          ₹1100 onwards
                        </b>
                        <div className="flex flex-row items-center justify-end py-0 pr-0 pl-2.5 text-2xs-8 border-l-[1px] border-solid border-deepskyblue">
                          <b className="relative leading-[16px] uppercase">
                            Buy now
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl bg-khaki box-border flex flex-col items-center justify-start pt-px px-0 pb-2.5 gap-[21px_0px] max-w-full border-[1px] border-solid border-whitesmoke-100">
                    <Link
                      figureHttps3A2F2Fmediains="/figure--https3a2f2fmediainsiderin2fimage2fupload2fc-crop2cg-custom2fv17080676612fz9h5iqamqjbp6dcqyftnpng@2x.png"
                      experiences="Music"
                      propWidth="63px"
                    />
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-[9px]">
                      <b className="relative leading-[24px]">
                        Asha @90 Woh phir nahi aate
                      </b>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start py-0 px-[9px] gap-[12px_0px] text-smi text-darkslategray">
                      <div className="w-[233px] flex flex-col items-start justify-start gap-[9px_0px]">
                        <div className="flex flex-row items-start justify-start gap-[0px_9px]">
                          <img
                            className="h-[25px] w-6 relative overflow-hidden shrink-0 min-h-[25px]"
                            alt=""
                            src="/link--svg.svg"
                          />
                          <div className="h-[22px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                            <div className="relative leading-[19.5px] font-semibold">
                              March 9 | 7PM
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start gap-[0px_9px]">
                          <img
                            className="h-6 w-6 relative overflow-hidden shrink-0"
                            alt=""
                            src="/link--svg-1.svg"
                          />
                          <div className="h-[19.5px] flex-1 overflow-hidden flex flex-row items-center justify-center pt-0 px-0 pb-px box-border">
                            <div className="h-[19px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
                              <div className="mt-[-1px] relative leading-[19.5px] font-semibold">
                                Jio World Garden, BKC, Mumbai
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-4xs bg-aliceblue flex flex-row items-start justify-between py-[11px] px-[9px] gap-[20px] text-xs-1 text-gray-200 mq450:flex-wrap">
                        <b className="relative leading-[16px] uppercase">
                          ₹2999 Onwards
                        </b>
                        <div className="flex flex-row items-center justify-end py-0 pr-0 pl-2.5 text-2xs-8 border-l-[1px] border-solid border-deepskyblue">
                          <b className="relative leading-[16px] uppercase">
                            Buy now
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="w-[15px] h-10 absolute !m-[0] right-[530px] bottom-[394.5px] overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/link--svg-6.svg"
            />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Desktop;
