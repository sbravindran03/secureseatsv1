import React, { useCallback, useState } from "react";
import { useRouter } from "next/router";
import DatePicker from "react-datepicker";
import NextLink from 'next/link'; 
import "react-datepicker/dist/react-datepicker.css";

const EventLink = () => {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState(null);

  const onLinkButtonClick = useCallback(() => {
    if (selectedDate) {
      console.log("Booking for date:", selectedDate);
    } else {
      console.log("Please select a date");
    }
  }, [selectedDate]);

  const onLinkButton1Click = useCallback(() => {
    router.push("/desktop");
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-start gap-6 max-w-[1036px] mx-auto text-center pt-60 py-22">
      <b className="self-stretch relative text-5xl font-bold leading-10 text-yellow-500 ">
        Select the date for Booking your seat
      </b>
      <div className="flex flex-col items-center justify-start gap-4 text-left text-lg text-gray-500 pt-19">
        <div className="w-70">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="w-full h-12 text-lg bg-gray-100 border-none rounded-md"
          />
        </div>
        <div className="flex flex-row items-center justify-between w-64 pt-30px py-11">
          <button
            className="p-2 bg-gray-200 rounded-md"
            onClick={onLinkButton1Click}
          >
            Cancel
          </button>
          <button
            className="p-2 bg-primary blue-300 rounded-md"
            onClick={onLinkButtonClick}
          >
            Apply
          </button>
        </div>
      </div>
      <NextLink href="/panel">
  <button className="relative leading-[16px] uppercase bg-ec1066 text-white py-2 px-4 rounded-md bg-yellow-500" >
    Back
  </button>
</NextLink>
              <NextLink href="/buy">
  <button className="relative leading-[16px] uppercase bg-ec1066 text-white py-2 px-4 rounded-md bg-pink-600" >
    Buy now
  </button>
</NextLink>
    </div>
  );
};

export default EventLink;
