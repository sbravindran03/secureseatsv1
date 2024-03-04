import NavHome from "../components/navhome";

const Desktop = () => {
  return (
    <div className="w-full min-h-screen bg-black overflow-hidden flex flex-col items-center justify-start pt-20 px-0 pb-[271px] box-border gap-[164px_0px] tracking-[normal] text-left text-smi-9 text-shades-white font-inter mq750:gap-[164px_0px] mq450:gap-[164px_0px]">
      <NavHome />
      <div className="absolute top-[212px] left-[111px] w-[460px] h-[552px]">
        <h1 className="m-0 absolute top-[px] left-[0px] text-inherit  font-extrabold font-inherit inline-block w-[460px] text-[50px] leading-[80px] mq450:text-[45px] mq450:leading-[40px] mq750:text-[50px] mq750:leading-[53px]">
          Building Trust in Ticket Booking
        </h1>
      </div>  
    </div>
  );
};

export default Desktop;
