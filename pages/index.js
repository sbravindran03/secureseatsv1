import NavHome from "../components/navhome";
import Head from 'next/head';
import Link from 'next/link'; // Import Head from Next.js

const Desktop = () => {
  return (
    <div className="w-full min-h-screen bg-black overflow-hidden flex flex-col items-center justify-start pt-20 px-0 pb-[271px] box-border gap-[164px_0px] tracking-[normal] text-left text-smi-9 text-shades-white font-inter mq750:gap-[164px_0px] mq450:gap-[164px_0px]">
      <Head>
        {/* Add meta tags, title, etc. here if needed */}
      </Head>
      <NavHome />
      <div className="absolute top-[212px] left-[111px] w-[460px] h-[552px]">
        <h1 className="m-0 absolute top-[0px] left-[0px] text-inherit  font-extrabold font-inherit inline-block w-[700px] text-[55px] leading-[70px] mq450:text-[45px] mq450:leading-[40px] mq750:text-[50px] mq750:leading-[53px]">
          Building Trust in <br/>Ticket Booking
        </h1>
        </div> 
      <img
        className="absolute top-[252px] left-[940px] w-[340px] h-[330px] object-cover"
        loading="lazy"
        alt=""
        src="/9ptpjzhvtqqaifmkb7tfdgremovebgpreview-1@2x.png"
      />
      <div className="absolute top-[407px] left-[119px] text-[15.2px] leading-[51.02px] whitespace-pre-wrap inline-block w-[606px] h-[252px] mq450:text-lgi mq450:leading-[41px]">
        This includes integrating NFTs for unique ticket ownership, fostering
        interoperability with Web3 platforms..This strategic approach aligns
        with decentralization principles and blockchain technology for a dynamic
        evolution.
      </div>
      {/* Button for booking tickets */}
      <Link href="/Book"> <button className="absolute top-[600px] left-[119px] bg-red-500 text-white px-7 py-4 rounded-md cursor-pointer mr-4">
        Book Tickets
      </button></Link>
     
      {/* Button for creating an event */}
     
<Link href="/event" >
  <button className="absolute top-[600px] left-[405px] bg-green-500 text-white px-7 py-4 rounded-md cursor-pointer">
    Create Event
  </button>
</Link>
    </div>
  );
};

export default Desktop;
