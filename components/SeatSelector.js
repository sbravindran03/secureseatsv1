// SeatSelector.js
import { useState } from 'react';

const SeatSelector = () => {
  const totalRows = 10;
  const seatsPerRow = 10;
  const totalSeats = totalRows * seatsPerRow;

  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatNumber) => {
    const updatedSeats = [...selectedSeats];

    if (updatedSeats.includes(seatNumber)) {
      // If seat is already selected, remove it
      const index = updatedSeats.indexOf(seatNumber);
      updatedSeats.splice(index, 1);
    } else {
      // If seat is not selected, add it
      updatedSeats.push(seatNumber);
    }

    setSelectedSeats(updatedSeats);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-1 gap-y-2">
        {[...Array(totalRows)].map((_, rowIndex) => (
          <div key={rowIndex} className="flex justify-center items-center">
            {[...Array(seatsPerRow)].map((_, seatIndex) => {
              const seatNumber = rowIndex * seatsPerRow + seatIndex + 1;
              const isSelected = selectedSeats.includes(seatNumber);

              return (
                <div
                  key={seatIndex}
                  onClick={() => handleSeatClick(seatNumber)}
                  className={`seat ${isSelected ? 'selected' : ''}`}
                >
                  {seatNumber}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <style jsx>{`
        .seat {
          width: 30px;
          height: 30px;
          background-color: blue;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 2px;
          cursor: pointer;
        }

        .selected {
          background-color: yellow;
        }
      `}</style>
    </div>
  );
};

export default SeatSelector;
