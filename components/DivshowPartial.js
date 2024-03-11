import NextLink  from 'next/link';
const DivshowPartial = ({ heading31030AM }) => {
    return (
      <div className="self-stretch flex flex-row items-start justify-between pt-[27px] px-0 pb-7 gap-[20px] z-[2] text-left text-lg text-shades-white font-functional-button-b2 border-b-[1.1px] border-solid border-gainsboro-400 mq450:flex-wrap mq450:justify-center">
        <div className="relative whitespace-nowrap">{heading31030AM}</div>
        <NextLink href="/seat">
  <button className="relative leading-[16px] uppercase bg-ec1066 text-white py-2 px-4 rounded-md bg-cyan-700" >
    Book
  </button>
</NextLink>
      </div>
    );
  };
  
  export default DivshowPartial;
  