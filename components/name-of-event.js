const NameOfEvent = () => {
  return (
    <section className="self-stretch flex flex-col items-start justify-start gap-[4px_0px] max-w-full text-left text-mini text-khaki-100 font-manrope">
      <div className="self-stretch flex flex-col items-start justify-start gap-[4px_0px] max-w-full">
        <div className="self-stretch h-5 relative font-semibold inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
          Title
        </div>
       
        <div className="self-stretch rounded box-border flex items-center justify-start py-1 pr-2 pl-2 max-w-[500px] text-sm text-shades-white border-[1px] border-solid border-shades-white">
  <div className="h-[19px] overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
    Name of event
  </div>
</div>

      </div>
      <div className="self-stretch relative text-sm font-light text-neutral-500 text-right">
        0/30
      </div>
    </section>
  );
};

export default NameOfEvent;
