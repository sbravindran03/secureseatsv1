import { useState } from "react";
import {
  TextField,
  InputAdornment,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const IconVectorFrame = () => {
  const [barDateTimePickerValue, setBarDateTimePickerValue] = useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <footer className="self-stretch flex flex-col items-center justify-center max-w-full text-left text-mini text-khaki-200 font-manrope bg-black">
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
          <div className="!m-[0] absolute top-[-4px] right-[114px] flex flex-row items-start justify-start p-1 box-border w-[18px] h-[18px]">
            <img
              className="h-2.5 w-2.5 relative"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
          <div className="!m-[0] absolute top-[-4px] right-[88px] flex flex-row items-start justify-start p-1 box-border w-[18px] h-[18px]">
            <img
              className="h-2.5 w-2.5 relative"
              loading="lazy"
              alt=""
              src="/vector-1.svg"
            />
          </div>
          <div className="!m-[0] absolute top-[-4px] right-[62px] flex flex-row items-start justify-start p-1 box-border w-[18px] h-[18px]">
            <img
              className="h-2.5 w-2.5 relative"
              loading="lazy"
              alt=""
              src="/vector-2.svg"
            />
          </div>
          <div className="!m-[0] absolute top-[-4px] right-[36px] flex flex-col items-start justify-start p-1 box-border w-[18px] h-[18px]">
            <img
              className="w-2.5 h-2.5 relative"
              loading="lazy"
              alt=""
              src="/vector-3.svg"
            />
          </div>
          <img
            className="h-2.5 w-2.5 absolute !m-[0] top-[0px] right-[14px]"
            loading="lazy"
            alt=""
            src="/frame-39886.svg"
          />
         <div className="flex-1 flex flex-col items-start justify-start gap-[12px_0px] max-w-full z-[1]">
  <div className="self-stretch flex flex-col items-start justify-start gap-[4px_0px] max-w-full">
    <div className="w-[54px] relative font-semibold inline-block box-border pr-2">
      Date
    </div>
    <div className="self-stretch w-[200px] max-w-full bg-white">
                <DatePicker
                  value={barDateTimePickerValue}
                  onChange={(newValue) => {
                    setBarDateTimePickerValue(newValue);
                  }}
                  renderInput={(props) => (
                    <TextField
                      {...props}
                      variant="standard"
                      fullWidth
                      placeholder="Enter a date"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <img width="20px" height="20px" src="/clock-icon.svg" alt="" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
              </div>
            </div>
            {/* ... (rest of your code) ... */}
          </div>
        </div>
      </footer>
    </LocalizationProvider>
  );
};

export default IconVectorFrame;
