import { useState } from 'react';

const Ticket = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="absolute top-[268.7px] left-[1249.2px] bg-shades- overflow-hidden flex flex-row items-end justify-start py-0 pr-[3px] pl-3 gap-[0px_12px] text-[22.4px] border-solid border-shades-white">
      <div className="h-8 flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border">
        <div className="mt-[-7px] h-[38.9px] relative tracking-[-0.97px] leading-[46.33px] font-semibold inline-block shrink-0 mq450:text-lg mq450:leading-[37px]">
          max 10
        </div>
      </div>
      {/* Dropdown for selecting category */}
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="ml-2 p-2 border border-gray-300 rounded"
      >
        <option value="">No of Tickets</option>
        {/* Add options for categories */}
        <option value="Category1"> 1</option>
        <option value="Category2"> 2</option>
        <option value="Category3"> 3</option>
        <option value="Category4"> 4</option>
        <option value="Category5"> 5</option>
        <option value="Category6"> 6</option>
        <option value="Category7"> 7</option>
        <option value="Category8"> 8</option>
        <option value="Category9"> 9</option>
        <option value="Category10"> 10</option>
        {/* Add more options as needed */}
      </select>
    </div>
  );
};

export default Ticket;
